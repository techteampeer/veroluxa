import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Sections.jsx'
import { Arrow, ContactIcons } from '../components/Icons.jsx'
import { useSeo } from '../seo/useSeo.js'
import { COMPANY, SERVICES } from '../data.js'

// Public Web3Forms access key (safe in client code). VITE_WEB3FORMS_KEY
// overrides it if set in the env, so the key can be rotated without a code change.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '9ef46012-5782-4d02-b3dc-a6e39c791c12'

export default function Contact() {
  const { t } = useTranslation()
  useSeo({ title: t('contact.seo.title'), description: t('contact.seo.description') })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const inquiryTypes = [...SERVICES.map((s) => t(`services.items.${s.slug}.title`)), t('services.general')]

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Honeypot: bots fill hidden fields — silently drop.
    if (data.get('botcheck')) return

    data.append('subject', `New website inquiry — ${data.get('type') || 'General'}`)
    data.append('from_name', 'Veroluxa Website')

    // Fallback when no key is configured yet: open the user's mail client.
    if (!WEB3FORMS_KEY) {
      const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || '—'}\nType: ${data.get('type')}\n\n${data.get('message')}`
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Website inquiry')}&body=${encodeURIComponent(body)}`
      setStatus('ok')
      form.reset()
      return
    }

    data.append('access_key', WEB3FORMS_KEY)
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
            </div>

            <form className="form reveal" data-d="2" onSubmit={handleSubmit}>
              {/* honeypot (hidden from users) */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
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
              <button type="submit" className="btn btn-signal" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? t('common.sending') : <>{t('contact.submit')} <Arrow /></>}
              </button>
              <p className="form-note">{t('common.replyTime')}</p>
              {status === 'ok' && <div className="form-ok">{t('common.formOk')}</div>}
              {status === 'error' && <div className="form-err">{t('common.formErr')}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
