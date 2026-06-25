import { Link, NavLink, useParams } from 'react-router-dom'

export const LANGS = ['en', 'ar']
export const DEFAULT_LANG = 'en'
export const RTL_LANGS = ['ar']
export const STORAGE_KEY = 'veroluxa_lang'

export function isRTL(lang) {
  return RTL_LANGS.includes(lang)
}

// Current language from the :lang route param (falls back to default).
export function useLang() {
  const { lang } = useParams()
  return LANGS.includes(lang) ? lang : DEFAULT_LANG
}

function build(lang, to) {
  return `/${lang}${to === '/' ? '' : to}`
}

// Internal links that automatically carry the active locale prefix.
export function LocaleLink({ to, children, ...rest }) {
  const lang = useLang()
  return <Link to={build(lang, to)} {...rest}>{children}</Link>
}

export function LocaleNavLink({ to, children, ...rest }) {
  const lang = useLang()
  return <NavLink to={build(lang, to)} {...rest}>{children}</NavLink>
}
