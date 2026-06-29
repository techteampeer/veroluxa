import { useTranslation } from 'react-i18next'
import mark from '../assets/veroluxa-mark.png'
import { Arrow, ServiceIcons } from '../components/Icons.jsx'
import { Strip, Steps, CTA } from '../components/Sections.jsx'
import { LocaleLink } from '../i18n/locale.jsx'
import { SERVICES, STATS } from '../data.js'

export default function Home() {
  const { t } = useTranslation()
  const stats = t('home.stats', { returnObjects: true })
  const preview = SERVICES.slice(0, 3)

  return (
    <>
      <header className="hero on-dark">
        <div className="hero-grid" />
        <img className="hero-chev" src={mark} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-inner">
            <span className="hero-eyebrow"><span className="dot" /> {t('home.category')}</span>
            <h1 className="display reveal in" data-d="1">{t('home.titlePre')} <em>{t('home.titleEm')}</em></h1>
            <p className="hero-sub reveal in" data-d="2">{t('home.sub')}</p>
            <div className="hero-actions reveal in" data-d="3">
              <LocaleLink to="/contact" className="btn btn-signal">{t('common.startConversation')} <Arrow /></LocaleLink>
              <LocaleLink to="/services" className="btn btn-ghost">{t('common.exploreServices')}</LocaleLink>
            </div>
          </div>
          <div className="hero-rail">
            {STATS.map((s, i) => (
              <div className="stat reveal" data-d={i + 1} key={i}>
                <div className="n">{s.n}<span>{s.sup}</span></div>
                <div className="l">{stats[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Strip />

      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('home.whatEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('home.whatTitle')}</h2>
            <p className="lede reveal" data-d="2">{t('home.whatLede')}</p>
          </div>
          <div className="svc-grid">
            {preview.map((s, i) => (
              <div className="svc reveal" data-d={i + 1} key={s.slug}>
                <span className="ico">{ServiceIcons[s.icon]}</span>
                <h3>{t(`services.items.${s.slug}.title`)}</h3>
                <p>{t(`services.items.${s.slug}.blurb`)}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '2.2rem' }}>
            <LocaleLink to="/services" className="btn btn-ghost">{t('common.seeAllServices')} <Arrow /></LocaleLink>
          </div>
        </div>
      </section>

      <section className="section statement">
        <div className="hero-grid" />
        <div className="wrap statement-inner">
          <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>{t('home.missionEyebrow')}</span>
          <p className="lede-xl reveal" data-d="1">{t('home.missionPre')} <em>{t('home.missionEm')}</em></p>
          <p className="sub reveal" data-d="2">{t('home.missionBody')}</p>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('home.howEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('home.howTitle')}</h2>
            <p className="lede reveal" data-d="2">{t('home.howLede')}</p>
          </div>
          <Steps />
        </div>
      </section>

      <CTA />
    </>
  )
}
