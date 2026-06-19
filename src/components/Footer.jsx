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
            <p>A consulting partner for organisations navigating change — strategy, technology, data &amp; AI, and hands-on delivery.</p>
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
            <Link to="/services">Strategy &amp; Advisory</Link>
            <Link to="/services">Digital Transformation</Link>
            <Link to="/services">Data &amp; Analytics</Link>
            <Link to="/services">AI &amp; Automation</Link>
          </div>
          <div className="foot-col">
            <h4>Solutions</h4>
            <span className="muted">Products — coming soon</span>
            <a href={`mailto:${COMPANY.emailGeneral}`}>{COMPANY.emailGeneral}</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} Veroluxa. All rights reserved.</span>
          <img className="word" src={word} alt="Veroluxa" />
        </div>
      </div>
    </footer>
  )
}
