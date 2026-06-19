import { PageHero, Steps, CTA } from '../components/Sections.jsx'
import { ServiceIcons } from '../components/Icons.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title={<>Consulting across <em>strategy &amp; technology.</em></>}
        lede="From boardroom strategy to hands-on delivery, our services flex to meet you where you are — and move you to where you want to be."
      />

      <section className="section">
        <div className="wrap">
          <div className="svc-grid" style={{ marginTop: 0 }}>
            {SERVICES.map((s, i) => (
              <div className="svc reveal" data-d={(i % 4) + 1} key={s.slug}>
                <span className="ico">{ServiceIcons[s.icon]}</span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                {s.soon && <span className="soon">Own products — coming soon</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="h2 reveal" data-d="1">A clear path from question to result.</h2>
            <p className="lede reveal" data-d="2">Every engagement follows the same disciplined, transparent path — so you always know where things stand.</p>
          </div>
          <Steps />
        </div>
      </section>

      <CTA title="Have a challenge in mind?" lede="Tell us where you want to get to, and we will map the path to get there." />
    </>
  )
}
