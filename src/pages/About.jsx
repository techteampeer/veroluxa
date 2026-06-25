import { useTranslation } from 'react-i18next'
import { PageHero, CTA } from '../components/Sections.jsx'

const checkIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M2.5 9.5 7 14l8.5-9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function About() {
  const { t } = useTranslation()
  const story = t('about.story', { returnObjects: true })
  const points = t('about.points', { returnObjects: true })
  const glance = t('about.glance', { returnObjects: true })
  const chips = t('about.valueChips', { returnObjects: true })
  const values = t('about.values', { returnObjects: true })
  const whyPoints = t('about.whyPoints', { returnObjects: true })

  return (
    <>
      <PageHero
        crumb={t('nav.about')}
        eyebrow={t('about.eyebrow')}
        titlePre={t('about.titlePre')}
        titleEm={t('about.titleEm')}
        lede={t('about.lede')}
      />

      {/* STORY */}
      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow reveal">{t('about.storyEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '1.2rem 0 1.2rem' }}>{t('about.storyTitle')}</h2>
            {story.map((p, i) => (
              <p className="lede reveal" data-d={i + 2} key={i} style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>{p}</p>
            ))}
            <div className="about-points">
              {points.map((p, i) => (
                <div className="about-point reveal" data-d={i + 1} key={i}>
                  <span className="ico">{checkIcon}</span>
                  <p><b>{p.b}</b> {p.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" data-d="2">
            <div className="glance">
              <div className="grp">{t('about.glanceTitle')}</div>
              {glance.map((r) => (
                <div className="row" key={r.k}><span className="k">{r.k}</span><span className="v">{r.v}</span></div>
              ))}
              <div className="grp" style={{ marginTop: '1.6rem' }}>{t('about.valuesLabel')}</div>
              <div className="value-chips">
                {chips.map((v) => <span className="value-chip" key={v}>{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section statement">
        <div className="hero-grid" />
        <div className="wrap statement-inner">
          <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>{t('about.philosophyEyebrow')}</span>
          <p className="lede-xl reveal" data-d="1">{t('about.philosophyHeadline')}</p>
          <p className="sub reveal" data-d="2">{t('about.philosophySub')}</p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('about.standEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('about.standTitle')}</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card reveal" data-d={(i % 2) + 1} key={v.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow reveal">{t('about.whyEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '1.2rem 0 1.2rem' }}>{t('about.whyTitle')}</h2>
            <p className="lede reveal" data-d="2">{t('about.whyLede')}</p>
          </div>
          <div>
            <div className="about-points" style={{ marginTop: 0 }}>
              {whyPoints.map((p, i) => (
                <div className="about-point reveal" data-d={i + 1} key={i}>
                  <span className="ico">{checkIcon}</span>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section statement">
        <div className="hero-grid" />
        <div className="wrap statement-inner">
          <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>{t('about.visionEyebrow')}</span>
          <p className="lede-xl reveal" data-d="1">{t('about.visionHeadline')}</p>
          <p className="sub reveal" data-d="2">{t('about.visionSub')}</p>
        </div>
      </section>

      <CTA title={t('about.ctaTitle')} lede={t('about.ctaLede')} />
    </>
  )
}
