import { useTranslation } from 'react-i18next'
import mark from '../assets/veroluxa-mark.png'
import word from '../assets/veroluxa-word.png'
import { LocaleLink } from '../i18n/locale.jsx'
import { COMPANY } from '../data.js'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img className="mark" src={mark} alt="Veroluxa" />
            <p>{t('footer.brand')}</p>
          </div>
          <div className="foot-col">
            <h4>{t('footer.company')}</h4>
            <LocaleLink to="/about">{t('nav.about')}</LocaleLink>
            <LocaleLink to="/services">{t('nav.services')}</LocaleLink>
            <LocaleLink to="/careers">{t('nav.careers')}</LocaleLink>
            <LocaleLink to="/contact">{t('nav.contact')}</LocaleLink>
          </div>
          <div className="foot-col">
            <h4>{t('footer.services')}</h4>
            <LocaleLink to="/services">{t('footer.customSoftware')}</LocaleLink>
            <LocaleLink to="/services">{t('footer.webMobile')}</LocaleLink>
            <LocaleLink to="/services">{t('footer.aiAutomation')}</LocaleLink>
            <LocaleLink to="/services">{t('footer.uiux')}</LocaleLink>
          </div>
          <div className="foot-col">
            <h4>{t('footer.getInTouch')}</h4>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">{t('common.followUs')}</a>
            <span className="muted">{t('common.location')}</span>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} {COMPANY.legalName}. {t('footer.rights')}</span>
          <img className="word" src={word} alt="Veroluxa" />
        </div>
      </div>
    </footer>
  )
}
