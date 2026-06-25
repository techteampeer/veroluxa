import { useTranslation } from 'react-i18next'
import { Arrow, Chevron, StepIcons } from './Icons.jsx'
import { LocaleLink } from '../i18n/locale.jsx'
import { STEP_ICONS } from '../data.js'

export function Strip() {
  const { t } = useTranslation()
  const caps = t('capabilities', { returnObjects: true })
  const items = [...caps, ...caps]
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {items.map((c, i) => (
          <span className="strip-item" key={i}><Chevron />{c}</span>
        ))}
      </div>
    </div>
  )
}

export function Steps() {
  const { t } = useTranslation()
  const steps = t('steps', { returnObjects: true })
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <div className="step reveal" data-d={i + 1} key={i}>
          <span className="bar" />
          <span className="n">{String(i + 1).padStart(2, '0')}</span>
          <span className="ico">{StepIcons[STEP_ICONS[i]]}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

export function PageHero({ eyebrow, titlePre, titleEm, lede, crumb }) {
  const { t } = useTranslation()
  return (
    <header className="page-hero on-dark">
      <div className="hero-grid" />
      <div className="wrap">
        <div className="page-hero-inner">
          <div className="crumbs">
            <LocaleLink to="/">{t('nav.home')}</LocaleLink><span className="sep">/</span>{crumb}
          </div>
          {eyebrow && <span className="eyebrow light reveal in" style={{ marginBottom: '1.1rem', display: 'inline-flex' }}>{eyebrow}</span>}
          <h1 className="display reveal in" data-d="1">{titlePre} <em>{titleEm}</em></h1>
          {lede && <p className="lede reveal in" data-d="2">{lede}</p>}
        </div>
      </div>
    </header>
  )
}

export function CTA({ title, lede }) {
  const { t } = useTranslation()
  return (
    <section className="section cta on-dark">
      <div className="hero-grid" />
      <div className="wrap cta-inner">
        <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>{t('common.getStarted')}</span>
        <h2 className="h2 reveal" data-d="1">{title || t('cta.title')}</h2>
        <p className="lede reveal" data-d="2">{lede || t('cta.lede')}</p>
        <div className="cta-actions reveal" data-d="3">
          <LocaleLink to="/contact" className="btn btn-signal">{t('common.startConversation')} <Arrow /></LocaleLink>
          <LocaleLink to="/services" className="btn btn-ghost">{t('common.exploreServices')}</LocaleLink>
        </div>
      </div>
    </section>
  )
}
