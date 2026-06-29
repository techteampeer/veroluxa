import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'
import { LANGS, DEFAULT_LANG } from '../i18n/locale.jsx'

// Production site URL — baked into pre-rendered absolute URLs (canonical,
// hreflang, og:url). Override with VITE_SITE_URL; defaults to the final
// domain so tags are correct the moment it goes live.
const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://veroluxa.com').replace(/\/+$/, '')

export default function Seo({ title, description }) {
  const { pathname } = useLocation()
  const seg = pathname.split('/')[1]
  const lang = LANGS.includes(seg) ? seg : DEFAULT_LANG
  const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, '')
  const url = SITE_URL + pathname

  return (
    <Head>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}/${l}${rest}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/${DEFAULT_LANG}${rest}`} />
      <meta property="og:site_name" content="Veroluxa" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_AE' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
