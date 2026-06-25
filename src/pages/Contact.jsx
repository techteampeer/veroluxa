import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Sections.jsx'
import { Arrow, ContactIcons } from '../components/Icons.jsx'
import { COMPANY, SERVICES } from '../data.js'

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const inquiryTypes = [...SERVICES.map((s) => t(`services.items.${s.slug}.title`)), t('services.general')]

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: front-end only for now — submission backend to be decided.
    setSent(true)
    e.target.reset()
  }

  return (
    <>
      <PageHero
        crumb={t('nav.contact')}
        eyebrow={t('contact.eyebrow')}
        titlePre={t('contact.titlePre')}
        titleEm={t('contact.titleEm')}
        lede={t('contact.lede')}
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid" style={{ marginTop: 0 }}>
            <div className="contact-info reveal">
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.mail}</span>
                <div><div className="lab">{t('contact.emailUs')}</div><div className="val"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.pin}</span>
                <div><div className="lab">{t('contact.hq')}</div><div className="val">{t('common.location')}</div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.user}</span>
                <div><div className="lab">{t('contact.legal')}</div><div className="val">{COMPANY.legalName}</div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.link}</span>
                <div><div className="lab">{t('contact.follow')}</div><div className="val"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">{t('common.followUs')}</a></div></div>
              </div>
            </div>

            <form className="form reveal" data-d="2" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field"><label htmlFor="f-name">{t('contact.fName')}</label><input id="f-name" name="name" type="text" placeholder={t('contact.phName')} required /></div>
                <div className="field"><label htmlFor="f-email">{t('contact.fEmail')}</label><input id="f-email" name="email" type="email" placeholder={t('contact.phEmail')} required /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="f-company">{t('contact.fCompany')}</label><input id="f-company" name="company" type="text" placeholder={t('contact.phCompany')} /></div>
                <div className="field">
                  <label htmlFor="f-type">{t('contact.fType')}</label>
                  <select id="f-type" name="type" defaultValue={inquiryTypes[0]}>
                    {inquiryTypes.map((ty) => <option key={ty}>{ty}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label htmlFor="f-msg">{t('contact.fMessage')}</label><textarea id="f-msg" name="message" placeholder={t('contact.phMessage')} required /></div>
              <button type="submit" className="btn btn-signal" style={{ width: '100%', justifyContent: 'center' }}>{t('contact.submit')} <Arrow /></button>
              <p className="form-note">{t('common.replyTime')}</p>
              {sent && <div className="form-ok">{t('common.formOk')}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
