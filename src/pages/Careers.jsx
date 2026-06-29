import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Sections.jsx'
import { Arrow, PerkIcons } from '../components/Icons.jsx'
import { LocaleLink } from '../i18n/locale.jsx'
import Seo from '../seo/Seo.jsx'
import { PERK_ICONS, COMPANY } from '../data.js'

export default function Careers() {
  const { t } = useTranslation()
  const jobs = t('careers.jobs', { returnObjects: true })
  const perks = t('careers.perks', { returnObjects: true })

  return (
    <>
      <Seo title={t('careers.seo.title')} description={t('careers.seo.description')} />
      <PageHero
        crumb={t('nav.careers')}
        eyebrow={t('careers.eyebrow')}
        titlePre={t('careers.titlePre')}
        titleEm={t('careers.titleEm')}
        lede={t('careers.lede')}
      />

      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('careers.openEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('careers.openTitle')}</h2>
            <p className="lede reveal" data-d="2">{t('careers.openLede')}</p>
          </div>
          <div className="jobs">
            {jobs.map((j, i) => (
              <div className="job reveal" data-d={i + 1} key={i}>
                <div className="j-main">
                  <h3>{j.title}</h3>
                  <p>{j.blurb}</p>
                </div>
                <div className="j-meta">
                  <span className="j-tag">{j.tag}</span>
                  <LocaleLink className="arr-link" to="/contact">{t('common.viewRole')} <Arrow /></LocaleLink>
                </div>
              </div>
            ))}
          </div>
          <p className="careers-note reveal">
            {t('careers.noteText')}{' '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">{t('careers.whyEyebrow')}</span>
            <h2 className="h2 reveal" data-d="1">{t('careers.whyTitle')}</h2>
          </div>
          <div className="perks">
            {perks.map((p, i) => (
              <div className="perk reveal" data-d={i + 1} key={i}>
                <span className="ico">{PerkIcons[PERK_ICONS[i]]}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
