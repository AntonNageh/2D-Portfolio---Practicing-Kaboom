import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png"],
  manifest:{
    name:"React-vite-app",
    short_name:"react-vite-app",
    description:"I am a simple vite app",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },

  ],
  theme_color:'#FFFFFF',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  "start_url": "/index.html",
  orientation:'portrait'
  }
}
export default defineConfig({
  base: "./",
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    }, manifestForPlugIn)
  ],
  build: {
    minify: "terser",
  },
});