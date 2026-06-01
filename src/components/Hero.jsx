import { useState, useEffect } from 'react'
import { PERSONAL, HERO_ROLES, HERO_STATS, HERO_CODE_LINES } from '../../myInfo'
import './Hero.css'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [codeVisible, setCodeVisible] = useState(HERO_CODE_LINES.map(() => false))

  useEffect(() => {
    const current = HERO_ROLES[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % HERO_ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  useEffect(() => {
    HERO_CODE_LINES.forEach((_, i) => {
      setTimeout(() => {
        setCodeVisible(prev => {
          const next = [...prev]; next[i] = true; return next
        })
      }, 600 + i * 300)
    })
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="mono-tag">&lt; hello world /&gt;</span>
          </div>

          <h1 className="hero-name">
            <span className="name-first">{PERSONAL.name.first}</span>
            <span className="name-last">{PERSONAL.name.last}</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I am</span>{' '}
            <span className="role-typed">{displayed}<span className="cursor">|</span></span>
          </div>

          <p
            className="hero-bio"
            dangerouslySetInnerHTML={{ __html: PERSONAL.bio.hero }}
          />

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="btn btn-secondary">Get in Touch</a>
          </div>

          <div className="hero-stats">
            {HERO_STATS.map(({ value, label }) => (
              <div className="stat" key={label}>
                <span className="stat-num">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-code-card">
          <div className="code-card-header">
            <span className="dot red"/><span className="dot yellow"/><span className="dot green"/>
            <span className="code-card-title">profile.json</span>
          </div>
          <div className="code-card-body">
            <div className="code-line dim">&#123;</div>
            {HERO_CODE_LINES.map((line, i) => (
              <div key={i} className={`code-line entry ${codeVisible[i] ? 'show' : ''}`}>
                <span className="indent">  </span>
                <span className="code-key">{line.key}</span>
                <span className="colon">: </span>
                <span className="code-val">"{line.value}"</span>
                {i < HERO_CODE_LINES.length - 1 ? <span className="comma">,</span> : null}
              </div>
            ))}
            <div className="code-line dim">&#125;</div>
          </div>
          <div className="code-card-footer">
            <span className="status-dot" />
            <span>{PERSONAL.availability}</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
