// src/pages/Spotify.jsx
import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Spotify = () => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // 🔁 Refresh Access Token
  const refreshAccessToken = async (storedRefreshToken) => {
    try {
      const res = await axios.post("/spotify/refresh-token", {
        refresh_token: storedRefreshToken,
      });

      const { access_token, expires_in } = res.data;
      const expiryTime = new Date(Date.now() + expires_in * 1000);

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("token_expiry", expiryTime.toISOString());

      setAccessToken(access_token);
      setIsAuthorized(true);
    } catch (err) {
      console.error("❌ Failed to refresh access token:", err);
      localStorage.clear();
      setIsAuthorized(false);
      window.location.href =
        "https://portfolio-chatbot-backend-wj84.onrender.com/api/spotify/login";
    }
  };

  // 🔐 Get tokens from URL or localStorage
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const access_token = hashParams.get("access_token");
    const refresh_token = hashParams.get("refresh_token");
    const expires_in = hashParams.get("expires_in");
    
  
    if (access_token && refresh_token && expires_in) {
      const expiryTime = new Date(Date.now() + expires_in * 1000);
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("token_expiry", expiryTime.toISOString());
  
      setAccessToken(access_token);
      setRefreshToken(refresh_token);
      setExpiresIn(expires_in);
      setIsAuthorized(true);
  
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const storedAccess = localStorage.getItem("access_token");
      const storedRefresh = localStorage.getItem("refresh_token");
      const expiry = new Date(localStorage.getItem("token_expiry"));
  
      if (storedAccess && storedRefresh) {
        if (new Date() < expiry) {
          setAccessToken(storedAccess);
          setRefreshToken(storedRefresh);
          setIsAuthorized(true);
        } else {
          refreshAccessToken(storedRefresh);
        }
      } else {
        // 👇 Redirect to Spotify login automatically if no token found
        window.location.href =
          "https://portfolio-chatbot-backend-wj84.onrender.com/api/spotify/login";
      }
    }
  }, []);  

  // 🔁 Schedule refresh 5 mins before expiry
  useEffect(() => {
    if (!accessToken || !refreshToken) return;

    const expiry = new Date(localStorage.getItem("token_expiry"));
    const now = new Date();
    const timeout = expiry.getTime() - now.getTime() - 5 * 60 * 1000;

    if (timeout > 0) {
      const timer = setTimeout(() => {
        refreshAccessToken(refreshToken);
      }, timeout);

      return () => clearTimeout(timer);
    } else {
      refreshAccessToken(refreshToken);
    }
  }, [accessToken, refreshToken]);

  // 🎧 Fetch music data
  useEffect(() => {
    if (!accessToken) return;

    const fetchData = async () => {
      try {
        const topRes = await axios.get("/spotify/top-tracks", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const nowRes = await axios.get("/spotify/now-playing", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        setTopTracks(topRes.data.tracks || []);
        setNowPlaying(nowRes.data || {});
      } catch (err) {
        console.error(err);
        setIsAuthorized(false);
      }
    };

    fetchData();
  }, [accessToken]);

  const handlePause = async () => {
    try {
      await axios.put("/spotify/stop", null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      alert("Playback paused!");
    } catch (err) {
      const errorMsg =
        err.response?.data?.error?.message || "Failed to pause playback.";

      if (
        err.response?.data?.error?.reason === "PREMIUM_REQUIRED" ||
        errorMsg.toLowerCase().includes("premium")
      ) {
        alert("⚠️ This action requires a Spotify Premium account.");
      } else {
        alert("Pause failed: " + errorMsg);
      }
    }
  };

  const handlePlay = async (trackId) => {
    await axios.put(`/spotify/play/${trackId}`, null, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    alert(`Playing track: ${trackId}`);
  };


  // if(isAuthorized) {
  //   return (
  //     <div className="style">
  //       <h1>Loading.........</h1>
  //     </div>
  //   )
  // }
  if (isAuthorized) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Spotify Login Required</h2>
        <a
          href="https://portfolio-chatbot-backend-wj84.onrender.com/api/spotify/login"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1DB954",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Login with Spotify
        </a>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      {/* 🎵 Now Playing Section */}
      <h2>🎵 Now Playing</h2>
      {nowPlaying && nowPlaying.name ? (
        <div
          style={{
            background: "#121212", // dark grayish black (Spotify dark)
            color: "#fff",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
            marginBottom: "2rem",
            maxWidth: "500px",
            border: "1px solid #282828", // soft border like Spotify
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "50px" }}>
            {nowPlaying.name}
          </h3>
          <p style={{ margin: "0.2rem 0" }}>
            <strong>Artist:</strong> {nowPlaying.artists}
          </p>
          <p style={{ margin: "0.2rem 0" }}>
            <strong>Playing:</strong> {nowPlaying.is_playing ? "Yes" : "No"}
          </p>
          <button
            onClick={handlePause}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1ed760")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1DB954")}
            style={{
              marginTop: "1rem",
              padding: "10px 20px",
              backgroundColor: "#1DB954",
              color: "#000",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s ease",
            }}
          >
            ⏸ Pause
          </button>
          <button
            onClick={handlePlay}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1ed760")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1DB954")}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#1DB954",
              color: "#000",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s ease",
            }}
          >
            ⏸ Play
          </button>
        </div>
      ) : (
        <p>No song currently playing.</p>
      )}

      {/* 🔥 Top Tracks */}
      <h2>🔥 Top 10 Tracks</h2>
      {topTracks.length === 0 ? (
        <p>
          You don’t have any top tracks yet. Try listening to music on Spotify
          and come back later!
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {topTracks.map((track) => (
            <div
              key={track.id}
              style={{
                background: "#f1f1f1",
                padding: "1rem",
                borderRadius: "10px",
                maxWidth: "500px",
              }}
            >
              <h4 style={{ margin: 0 }}>{track.name}</h4>
              <p style={{ margin: "0.5rem 0" }}>
                <strong>Artist:</strong> {track.artists}
              </p>
              <button
                onClick={() => handlePlay(track.id)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#1DB954",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ▶️ Play
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Spotify;
