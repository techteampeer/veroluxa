import { Link } from 'react-router-dom'
import { PageHero } from '../components/Sections.jsx'
import { Arrow, PerkIcons } from '../components/Icons.jsx'
import { JOBS, PERKS, COMPANY } from '../data.js'

export default function Careers() {
  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Careers"
        title={<>Build your career <em>at Veroluxa.</em></>}
        lede="We are a small team that does serious work. If you like ownership, variety, and being trusted with the hard problems, you will feel at home here."
      />

      <section className="section">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">Open roles</span>
            <h2 className="h2 reveal" data-d="1">Roles we are hiring for.</h2>
            <p className="lede reveal" data-d="2">A few of the positions we are currently looking to fill. Demo listings for now — real openings will appear here.</p>
          </div>
          <div className="jobs">
            {JOBS.map((j, i) => (
              <div className="job reveal" data-d={i + 1} key={j.title}>
                <div className="j-main">
                  <h3>{j.title}</h3>
                  <p>{j.blurb}</p>
                </div>
                <div className="j-meta">
                  <span className="j-tag">{j.tag}</span>
                  <Link className="arr-link" to="/contact">View role <Arrow /></Link>
                </div>
              </div>
            ))}
          </div>
          <p className="careers-note reveal">
            Don&apos;t see your role? We&apos;re always glad to meet talented people — write to{' '}
            <a href={`mailto:${COMPANY.emailCareers}`}>{COMPANY.emailCareers}</a>.
          </p>
        </div>
      </section>

      <section className="section safety">
        <div className="wrap">
          <div className="s-head">
            <span className="eyebrow reveal">Why Veroluxa</span>
            <h2 className="h2 reveal" data-d="1">A place to do your best work.</h2>
          </div>
          <div className="perks">
            {PERKS.map((p, i) => (
              <div className="perk reveal" data-d={i + 1} key={p.title}>
                <span className="ico">{PerkIcons[p.icon]}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
