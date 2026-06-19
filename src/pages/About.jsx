import { PageHero, CTA } from '../components/Sections.jsx'
import { VALUES, GLANCE } from '../data.js'

const POINTS = [
  { b: 'Senior-led, always.', t: 'The people who win your trust are the people who do the work.' },
  { b: 'Outcomes over output.', t: 'We measure success by the results you keep — not the slides we ship.' },
  { b: 'Built to last.', t: 'We leave your teams more capable than we found them.' },
]

const checkIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M2.5 9.5 7 14l8.5-9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Veroluxa"
        title={<>A consulting partner that stays <em>close to the work.</em></>}
        lede="We pair strategic clarity with the technical depth to deliver it — working shoulder-to-shoulder with our clients from first question to lasting result."
      />

      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow reveal">Who we are</span>
            <h2 className="h2 reveal" data-d="1" style={{ margin: '1.2rem 0 1.2rem' }}>Great advice is only worth the results it leaves behind.</h2>
            <p className="lede reveal" data-d="2">Veroluxa was founded on a simple belief: consulting should be measured by impact, not activity. We are a small, senior team that takes on the hard problems and stays until they are solved.</p>
            <div className="about-points">
              {POINTS.map((p, i) => (
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
                {VALUES.map((v) => <span className="value-chip" key={v}>{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Want to work with us?" lede="Whether you have a defined brief or just a tough question, we would love to hear from you." />
    </>
  )
}
