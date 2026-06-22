import { PageHero, Steps, CTA } from '../components/Sections.jsx'
import { ServiceIcons } from '../components/Icons.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services"
        title={<>Technology solutions built for <em>growth.</em></>}
        lede="We help businesses transform ideas into scalable digital solutions that drive efficiency, innovation, and sustainable growth — with the expertise and guidance to move forward with confidence."
      />

      <section className="section">
        <div className="wrap">
          <div className="svc-grid" style={{ marginTop: 0 }}>
            {SERVICES.map((s, i) => (
              <div className="svc reveal" data-d={(i % 4) + 1} key={s.slug}>
                <span className="ico">{ServiceIcons[s.icon]}</span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="h2 reveal" data-d="1">A clear path from idea to impact.</h2>
            <p className="lede reveal" data-d="2">Every engagement begins with understanding your business — then we design and deliver solutions that align with your objectives.</p>
          </div>
          <Steps />
        </div>
      </section>

      <CTA
        title="Your long-term technology partner."
        lede="We work alongside our clients to navigate change, embrace innovation, and build stronger digital foundations for the future."
      />
    </>
  )
}
