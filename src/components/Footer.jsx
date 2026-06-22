import { Link } from 'react-router-dom'
import mark from '../assets/veroluxa-mark.png'
import word from '../assets/veroluxa-word.png'
import { COMPANY } from '../data.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img className="mark" src={mark} alt="Veroluxa" />
            <p>Engineering vision into value — a Dubai-based technology partner helping businesses grow through intelligent digital solutions.</p>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <Link to="/services">Custom Software</Link>
            <Link to="/services">Web &amp; Mobile</Link>
            <Link to="/services">AI &amp; Automation</Link>
            <Link to="/services">UI/UX Design</Link>
          </div>
          <div className="foot-col">
            <h4>Get in touch</h4>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="muted">{COMPANY.location}</span>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</span>
          <img className="word" src={word} alt="Veroluxa" />
        </div>
      </div>
    </footer>
  )
}
