import { PageHero, CTA } from '../components/Sections.jsx'
import {
  COMPANY, GLANCE, VALUE_CHIPS, VALUES, ABOUT_STORY, ABOUT_POINTS,
  PHILOSOPHY, WHY_POINTS, VISION,
} from '../data.js'

const checkIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M2.5 9.5 7 14l8.5-9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Veroluxa"
        title={<>A technology partner built for <em>long-term growth.</em></>}
        lede={COMPANY.intro}
      />

      {/* STORY */}
      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow reveal">More than a service provider</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '1.2rem 0 1.2rem' }}>We measure success by the value our work keeps creating.</h2>
            {ABOUT_STORY.map((p, i) => (
              <p className="lede reveal" data-d={i + 2} key={i} style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>{p}</p>
            ))}
            <div className="about-points">
              {ABOUT_POINTS.map((p, i) => (
                <div className="about-point reveal" data-d={i + 1} key={i}>
                  <span className="ico">{checkIcon}</span>
                  <p><b>{p.b}</b> {p.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" data-d="2">
            <div className="glance">
              <div className="grp">At a glance</div>
              {GLANCE.map((r) => (
                <div className="row" key={r.k}><span className="k">{r.k}</span><span className="v">{r.v}</span></div>
              ))}
              <div className="grp" style={{ marginTop: '1.6rem' }}>Core values</div>
              <div className="value-chips">
                {VALUE_CHIPS.map((v) => <span className="value-chip" key={v}>{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY statement */}
      <section className="section statement">
        <div className="hero-grid" />
        <div className="wrap statement-inner">
          <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>Our philosophy</span>
          <p className="lede-xl reveal" data-d="1">{PHILOSOPHY.headline}</p>
          <p className="sub reveal" data-d="2">{PHILOSOPHY.sub}</p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">What we stand for</span>
            <h2 className="h2 reveal" data-d="1">The principles behind every engagement.</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div className="value-card reveal" data-d={(i % 2) + 1} key={v.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow reveal">Why businesses choose Veroluxa</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '1.2rem 0 1.2rem' }}>They need more than technical delivery.</h2>
            <p className="lede reveal" data-d="2">Our clients need a partner who understands the commercial realities behind every decision — and turns technology into a catalyst for growth.</p>
          </div>
          <div>
            <div className="about-points" style={{ marginTop: 0 }}>
              {WHY_POINTS.map((p, i) => (
                <div className="about-point reveal" data-d={i + 1} key={i}>
                  <span className="ico">{checkIcon}</span>
                  <p>A partner who <b>{p.charAt(0).toLowerCase() + p.slice(1)}</b></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section statement">
        <div className="hero-grid" />
        <div className="wrap statement-inner">
          <span className="eyebrow light reveal" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>Our vision</span>
          <p className="lede-xl reveal" data-d="1">{VISION.headline}</p>
          <p className="sub reveal" data-d="2">{VISION.sub}</p>
        </div>
      </section>

      <CTA title="Let's build what's next, together." lede="Whether you have a defined brief or just a tough question, we would love to hear from you." />
    </>
  )
}
