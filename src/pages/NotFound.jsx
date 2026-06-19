import { Link } from 'react-router-dom'
import { PageHero } from '../components/Sections.jsx'
import { Arrow } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero
        crumb="Not found"
        eyebrow="404"
        title={<>This page <em>wandered off.</em></>}
        lede="The page you are looking for doesn't exist or may have moved."
      />
      <section className="section">
        <div className="wrap">
          <Link to="/" className="btn btn-primary">Back to home <Arrow /></Link>
        </div>
      </section>
    </>
  )
}
