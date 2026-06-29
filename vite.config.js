import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const LANGS = ['en', 'ar']
const SUBS = ['', 'services', 'about', 'careers', 'contact']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    dirStyle: 'flat', // /en -> en.html, /en/services -> en/services.html
    // The content routes live under a dynamic :lang segment, so enumerate
    // every localized path explicitly for pre-rendering.
    includedRoutes() {
      const out = []
      for (const l of LANGS) for (const s of SUBS) out.push(`/${l}${s ? '/' + s : ''}`)
      return out
    },
  },
})
