import { useState } from 'react'
import { PageHero } from '../components/Sections.jsx'
import { Arrow, ContactIcons } from '../components/Icons.jsx'
import { COMPANY, SERVICES } from '../data.js'

const INQUIRY_TYPES = [...SERVICES.map((s) => s.title), 'General enquiry']

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: front-end only for now — submission backend to be decided.
    setSent(true)
    e.target.reset()
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title={<>Let&apos;s talk about <em>what&apos;s next.</em></>}
        lede="Tell us a little about your goals and we will get back to you to arrange an introductory call."
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid" style={{ marginTop: 0 }}>
            <div className="contact-info reveal">
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.mail}</span>
                <div><div className="lab">Email us</div><div className="val"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.pin}</span>
                <div><div className="lab">Headquarters</div><div className="val">{COMPANY.location}</div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.user}</span>
                <div><div className="lab">Legal entity</div><div className="val">{COMPANY.legalName}</div></div>
              </div>
              <div className="ci-row">
                <span className="ci-ico">{ContactIcons.link}</span>
                <div><div className="lab">Follow us</div><div className="val"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
              </div>
            </div>

            <form className="form reveal" data-d="2" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" placeholder="Your name" required /></div>
                <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" placeholder="you@company.com" required /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="f-company">Company</label><input id="f-company" name="company" type="text" placeholder="Company name" /></div>
                <div className="field">
                  <label htmlFor="f-type">How can we help?</label>
                  <select id="f-type" name="type" defaultValue={INQUIRY_TYPES[0]}>
                    {INQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label htmlFor="f-msg">Your message</label><textarea id="f-msg" name="message" placeholder="A few lines about your goals or project..." required /></div>
              <button type="submit" className="btn btn-signal" style={{ width: '100%', justifyContent: 'center' }}>Send inquiry <Arrow /></button>
              <p className="form-note">We typically reply within 2 business days.</p>
              {sent && <div className="form-ok">Thanks — your inquiry has been noted. We&apos;ll be in touch shortly.</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
