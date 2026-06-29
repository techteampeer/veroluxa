import { ViteReactSSG } from 'vite-react-ssg'
import i18n from './i18n/config.js'
import { LANGS } from './i18n/locale.jsx'
import { routes } from './App.jsx'
import './styles.css'

// Client: set language from the URL before hydration so a pre-rendered
// Arabic page hydrates as Arabic (avoids a hydration mismatch/flash).
if (typeof window !== 'undefined') {
  const seg = window.location.pathname.split('/')[1]
  if (LANGS.includes(seg) && i18n.language !== seg) i18n.changeLanguage(seg)
}

// ViteReactSSG mounts on the client and provides the entry for the
// static build. On the server, routePath tells us which locale to render.
export const createRoot = ViteReactSSG(
  { routes },
  async ({ routePath }) => {
    if (routePath) {
      const seg = routePath.split('/')[1]
      if (LANGS.includes(seg) && i18n.language !== seg) {
        await i18n.changeLanguage(seg)
      }
    }
  },
)
