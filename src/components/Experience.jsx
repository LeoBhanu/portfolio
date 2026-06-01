import { useState } from 'react'
import { EXPERIENCES } from '../../myInfo'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const ref = useScrollReveal()
  const job = EXPERIENCES[active]

  return (
    <section id="experience" className="experience">
      <div className="container" ref={ref}>
        <div className="animate-in">
          <p className="section-label">03. Experience</p>
          <h2 className="section-title">Where I've <span className="accent-text">Worked</span></h2>
        </div>

        <div className="exp-layout animate-in">
          <ul className="exp-tabs">
            {EXPERIENCES.map((j, i) => (
              <li key={j.id}>
                <button
                  className={`exp-tab ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="exp-tab-company">{j.company}</span>
                  <span className="exp-tab-period">{j.period.split('—')[0].trim()}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="exp-content" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <span className="exp-company-name">@ {job.company}</span>
              </div>
              <div className="exp-metric">
                <span className="metric-val">{job.metric.value}</span>
                <span className="metric-label">{job.metric.label}</span>
              </div>
            </div>

            <p className="exp-period-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {job.period}
            </p>

            <div className="exp-stack">
              {job.stack.map(t => (
                <span className="stack-tag" key={t}>{t}</span>
              ))}
            </div>

            <ul className="exp-bullets">
              {job.highlights.map((h, i) => (
                <li key={i} style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="bullet-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
