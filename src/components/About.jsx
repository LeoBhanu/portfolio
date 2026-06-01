import { PERSONAL, ABOUT_HIGHLIGHTS } from '../../myInfo'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <div className="animate-in">
          <p className="section-label">01. About</p>
          <h2 className="section-title">Crafting Digital<br /><span className="accent-text">Experiences</span></h2>
        </div>

        <div className="about-grid animate-in">
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: PERSONAL.bio.about1 }} />
            <p dangerouslySetInnerHTML={{ __html: PERSONAL.bio.about2 }} />
            <p dangerouslySetInnerHTML={{ __html: PERSONAL.bio.about3 }} />
            <div className="about-contact-row">
              <a href={`mailto:${PERSONAL.email}`} className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone}`} className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 7.49 19.79 19.79 0 01.82 2.9 2 2 0 012.8 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.85a16 16 0 006.29 6.29l1.01-1.01a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                {PERSONAL.phone}
              </a>
              <span className="contact-chip location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {PERSONAL.location}
              </span>
            </div>
          </div>

          <div className="about-highlights">
            {ABOUT_HIGHLIGHTS.map(h => (
              <div className="highlight-card" key={h.label}>
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <h4>{h.label}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
