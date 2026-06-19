import { Link } from 'react-router-dom'
import { Arrow, Chevron, StepIcons } from './Icons.jsx'
import { CAPABILITIES, STEPS } from '../data.js'

export function Strip() {
  const items = [...CAPABILITIES, ...CAPABILITIES]
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {items.map((t, i) => (
          <span className="strip-item" key={i}><Chevron />{t}</span>
        ))}
      </div>
    </div>
  )
}

export function Steps() {
  return (
    <div className="steps">
      {STEPS.map((s, i) => (
        <div className="step reveal" data-d={i + 1} key={s.n}>
          <span className="bar" />
          <span className="n">{s.n}</span>
          <span className="ico">{StepIcons[s.icon]}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

export function PageHero({ eyebrow, title, lede, crumb }) {
  return (
    <header className="page-hero">
      <div className="hero-grid" />
      <div className="wrap">
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>{crumb}
          </div>
          {eyebrow && <span className="eyebrow light reveal in" style={{ marginBottom: '1.1rem', display: 'inline-flex' }}>{eyebrow}</span>}
          <h1 className="display reveal in" data-d="1">{title}</h1>
          {lede && <p className="lede reveal in" data-d="2">{lede}</p>}
        </div>
      </div>
    </header>
  )
}

export function CTA({ title = "Let's talk about what's next.", lede = 'Tell us about your goals and we will arrange an introductory call.' }) {
  return (
    <section className="section cta">
      <div className="hero-grid" />
      <div className="wrap cta-inner">
        <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>Get started</span>
        <h2 className="h2 reveal" data-d="1">{title}</h2>
        <p className="lede reveal" data-d="2">{lede}</p>
        <div className="cta-actions reveal" data-d="3">
          <Link to="/contact" className="btn btn-signal">Start a conversation <Arrow /></Link>
          <Link to="/services" className="btn btn-ghost">Explore our services</Link>
        </div>
      </div>
    </section>
  )
}
