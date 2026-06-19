import { Link } from 'react-router-dom'
import mark from '../assets/veroluxa-mark.png'
import { Arrow, ServiceIcons } from '../components/Icons.jsx'
import { Strip, Steps, CTA } from '../components/Sections.jsx'
import { SERVICES, STATS } from '../data.js'

export default function Home() {
  const preview = SERVICES.slice(0, 3)
  return (
    <>
      {/* HERO — company overview */}
      <header className="hero on-dark">
        <div className="hero-grid" />
        <img className="hero-chev" src={mark} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-inner">
            <span className="hero-eyebrow"><span className="dot" /> Management &amp; Technology Consulting</span>
            <h1 className="display reveal in" data-d="1">We turn complexity into <em>clear, confident decisions.</em></h1>
            <p className="hero-sub reveal in" data-d="2">Veroluxa is a consulting partner for organisations navigating change — pairing sharp strategy with hands-on delivery to create outcomes that last.</p>
            <div className="hero-actions reveal in" data-d="3">
              <Link to="/contact" className="btn btn-signal">Start a conversation <Arrow /></Link>
              <Link to="/services" className="btn btn-ghost">Explore our services</Link>
            </div>
            <div className="hero-pills reveal in" data-d="3">
              <span className="hero-pill">Strategy</span>
              <span className="hero-pill">Technology</span>
              <span className="hero-pill">Transformation</span>
            </div>
          </div>
          <div className="hero-rail">
            {STATS.map((s, i) => (
              <div className="stat reveal" data-d={i + 1} key={i}>
                <div className="n">{s.n}<span>{s.sup}</span></div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <Strip />

      {/* WHAT WE DO — preview */}
      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">What we do</span>
            <h2 className="h2 reveal" data-d="1">Consulting across strategy,<br />technology, and execution.</h2>
            <p className="lede reveal" data-d="2">From boardroom strategy to hands-on delivery, we meet you where you are and move you to where you want to be.</p>
          </div>
          <div className="svc-grid">
            {preview.map((s, i) => (
              <div className="svc reveal" data-d={i + 1} key={s.slug}>
                <span className="ico">{ServiceIcons[s.icon]}</span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '2.2rem' }}>
            <Link to="/services" className="btn btn-ghost">See all services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="h2 reveal" data-d="1">A clear path from question to result.</h2>
            <p className="lede reveal" data-d="2">A proven way of working that keeps you in control and the outcome in sight at every step.</p>
          </div>
          <Steps />
        </div>
      </section>

      <CTA />
    </>
  )
}
