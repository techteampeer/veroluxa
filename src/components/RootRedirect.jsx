import { Navigate } from 'react-router-dom'
import { LANGS, DEFAULT_LANG, STORAGE_KEY } from '../i18n/locale.jsx'

// Pick a language for the bare "/" (or any unprefixed path):
// remembered choice → browser language → default.
function pickLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch { /* ignore */ }
  const nav = (navigator.language || '').toLowerCase()
  const match = LANGS.find((l) => nav.startsWith(l))
  return match || DEFAULT_LANG
}

export default function RootRedirect() {
  return <Navigate to={`/${pickLang()}`} replace />
}
