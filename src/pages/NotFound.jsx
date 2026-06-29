import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Sections.jsx'
import { Arrow } from '../components/Icons.jsx'
import { LocaleLink } from '../i18n/locale.jsx'
import { useSeo } from '../seo/useSeo.js'

export default function NotFound() {
  const { t } = useTranslation()
  useSeo({ title: t('notFound.seo.title'), description: t('notFound.seo.description') })
  return (
    <>
      <PageHero
        crumb={t('notFound.crumb')}
        eyebrow={t('notFound.eyebrow')}
        titlePre={t('notFound.titlePre')}
        titleEm={t('notFound.titleEm')}
        lede={t('notFound.lede')}
      />
      <section className="section">
        <div className="wrap">
          <LocaleLink to="/" className="btn btn-primary">{t('common.backToHome')} <Arrow /></LocaleLink>
        </div>
      </section>
    </>
  )
}
