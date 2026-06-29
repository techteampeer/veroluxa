import { useEffect } from 'react'
import { Head } from 'vite-react-ssg'
import { LANGS, DEFAULT_LANG, STORAGE_KEY } from '../i18n/locale.jsx'

// Pick a language for the bare "/" — remembered choice → browser → default.
function pickLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch { /* ignore */ }
  const nav = (navigator.language || '').toLowerCase()
  return LANGS.find((l) => nav.startsWith(l)) || DEFAULT_LANG
}

// "/" is handled by a Vercel redirect in production; this covers dev and
// any client-side hit. Renders a meta-refresh fallback for no-JS.
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${pickLang()}`)
  }, [])
  return (
    <Head>
      <meta httpEquiv="refresh" content={`0; url=/${DEFAULT_LANG}`} />
      <meta name="robots" content="noindex" />
    </Head>
  )
}
