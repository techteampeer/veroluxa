import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import mark from '../assets/veroluxa-mark.png'
import word from '../assets/veroluxa-word.png'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on navigation
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link className="nav-logo" to="/" aria-label="Veroluxa home">
        <img className="mark" src={mark} alt="Veroluxa" />
        <img className="word" src={word} alt="Veroluxa" />
      </Link>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {l.label}
          </NavLink>
        ))}
      </div>

      <div className="nav-cta">
        <Link to="/contact" className="btn btn-primary">Get in touch</Link>
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
