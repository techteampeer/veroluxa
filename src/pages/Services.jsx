import { useTranslation } from 'react-i18next'
import { PageHero, Steps, CTA } from '../components/Sections.jsx'
import { ServiceIcons } from '../components/Icons.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  const { t } = useTranslation()
  return (
    <>
      <PageHero
        crumb={t('services.eyebrow')}
        eyebrow={t('services.eyebrow')}
        titlePre={t('services.titlePre')}
        titleEm={t('services.titleEm')}
        lede={t('services.lede')}
      />

      <section className="section">
        <div className="wrap">
          <div className="svc-grid" style={{ marginTop: 0 }}>
            {SERVICES.map((s, i) => (
              <div className="svc reveal" data-d={(i % 4) + 1} key={s.slug}>
                <span className="ico">{ServiceIcons[s.icon]}</span>
                <h3>{t(`services.items.${s.slug}.title`)}</h3>
                <p>{t(`services.items.${s.slug}.blurb`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('services.howEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('services.howTitle')}</h2>
            <p className="lede reveal" data-d="2">{t('services.howLede')}</p>
          </div>
          <Steps />
        </div>
      </section>

      <CTA title={t('services.ctaTitle')} lede={t('services.ctaLede')} />
    </>
  )
}
