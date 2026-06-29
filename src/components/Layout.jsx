import { useEffect } from 'react'
import { Outlet, Navigate, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { LANGS, DEFAULT_LANG, STORAGE_KEY, isRTL } from '../i18n/locale.jsx'

export default function Layout() {
  const { lang } = useParams()
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const valid = LANGS.includes(lang)

  // During SSG (no window) set the language synchronously so the page
  // pre-renders in the correct locale; the client uses the effect below.
  if (valid && typeof window === 'undefined' && i18n.language !== lang) {
    i18n.changeLanguage(lang)
  }

  // Sync i18n + <html lang/dir> with the URL locale.
  useEffect(() => {
    if (!valid) return
    if (i18n.language !== lang) i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr'
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
  }, [lang, valid, i18n])

  // Scroll to top on navigation.
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Reveal-on-scroll for elements rendered on this route.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!els.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  if (!valid) return <Navigate to={`/${DEFAULT_LANG}`} replace />

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
