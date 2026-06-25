import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import mark from '../assets/veroluxa-mark.png'
import word from '../assets/veroluxa-word.png'
import { LocaleLink, LocaleNavLink, useLang, LANGS } from '../i18n/locale.jsx'

const LINKS = [
  { to: '/', key: 'home', end: true },
  { to: '/services', key: 'services' },
  { to: '/about', key: 'about' },
  { to: '/careers', key: 'careers' },
  { to: '/contact', key: 'contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const lang = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // Swap the locale segment of the current path, keeping the same page.
  const swapTo = (l) => {
    const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, '')
    return `/${l}${rest}`
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <LocaleLink className="nav-logo" to="/" aria-label="Veroluxa home">
        <img className="mark" src={mark} alt="Veroluxa" />
        <img className="word" src={word} alt="Veroluxa" />
      </LocaleLink>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <LocaleNavLink key={l.to} to={l.to} end={l.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {t(`nav.${l.key}`)}
          </LocaleNavLink>
        ))}
      </div>

      <div className="nav-cta">
        <div className="lang-switch" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <Link key={l} to={swapTo(l)} className={l === lang ? 'active' : undefined}
              lang={l} aria-current={l === lang ? 'true' : undefined}>
              {l === 'ar' ? 'ع' : 'EN'}
            </Link>
          ))}
        </div>
        <LocaleLink to="/contact" className="btn btn-primary nav-get">{t('nav.getInTouch')}</LocaleLink>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
    </nav>
  )
}
