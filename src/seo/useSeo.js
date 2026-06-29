import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LANGS, DEFAULT_LANG } from '../i18n/locale.jsx'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Per-page <title>, meta description, canonical, hreflang alternates and
// Open Graph tags. Absolute URLs are derived from the live origin, so the
// tags stay correct after the domain is switched — nothing hardcoded.
export function useSeo({ title, description }) {
  const { pathname } = useLocation()
  const seg = pathname.split('/')[1]
  const lang = LANGS.includes(seg) ? seg : DEFAULT_LANG

  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const url = origin + pathname

    if (title) document.title = title
    if (description) setMeta('name', 'description', description)

    setCanonical(url)

    // Open Graph / Twitter
    setMeta('property', 'og:site_name', 'Veroluxa')
    setMeta('property', 'og:title', title || document.title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', lang === 'ar' ? 'ar_AE' : 'en_US')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title || document.title)
    setMeta('name', 'twitter:description', description)

    // hreflang alternates (path without the locale prefix)
    document.head.querySelectorAll('link[rel="alternate"][data-seo="1"]').forEach((n) => n.remove())
    const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, '')
    const addAlt = (hl, href) => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'alternate')
      l.setAttribute('hreflang', hl)
      l.setAttribute('href', href)
      l.setAttribute('data-seo', '1')
      document.head.appendChild(l)
    }
    LANGS.forEach((l) => addAlt(l, `${origin}/${l}${rest}`))
    addAlt('x-default', `${origin}/${DEFAULT_LANG}${rest}`)
  }, [pathname, lang, title, description])
}
