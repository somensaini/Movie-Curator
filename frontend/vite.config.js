import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api/v1": "https://movie-curator.onrender.com/",
//     },
//   },
//   plugins: [react()],
// })

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_LETTERBOXD_TOKEN': JSON.stringify(env.VITE_LETTERBOXD_TOKEN)
    },
  };
});