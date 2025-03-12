import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/praneethalluri.github.io/', // 👈 Add this line (Must match your repo name)
});
