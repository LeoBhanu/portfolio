import { useState } from 'react'
import { SKILL_CATEGORIES, TECH_CLOUD } from '../../myInfo'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

export default function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].id)
  const ref = useScrollReveal()
  const current = SKILL_CATEGORIES.find(c => c.id === active)

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <div className="animate-in">
          <p className="section-label">02. Skills</p>
          <h2 className="section-title">My Tech <span className="accent-text">Arsenal</span></h2>
        </div>

        <div className="skills-tabs animate-in">
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel" key={active}>
          {current.skills.map((s, i) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-meta">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ '--target': `${s.level}%`, '--delay': `${i * 60}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud animate-in">
          {TECH_CLOUD.map(t => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
