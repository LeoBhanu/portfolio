import { EDUCATION, INTERESTS, PERSONAL, CONTACT_ITEMS } from '../../myInfo'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './EducationContact.css'

export function Education() {
  const ref = useScrollReveal()
  return (
    <section id="education" className="education">
      <div className="container" ref={ref}>
        <div className="animate-in">
          <p className="section-label">04. Education</p>
          <h2 className="section-title">Academic <span className="accent-text">Background</span></h2>
        </div>

        {EDUCATION.map((edu, i) => (
          <div className="edu-card animate-in" key={i}>
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-body">
              <h3>{edu.degree}</h3>
              <p className="edu-field">{edu.field}</p>
              <p className="edu-college">{edu.college}</p>
              <div className="edu-meta">
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {edu.period}
                </span>
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  {edu.score}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="interests-row animate-in">
          <p className="section-label" style={{marginTop:'3rem'}}>Interests</p>
          {INTERESTS.map(i => (
            <span className="interest-tag" key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const message = form.message.value
    window.location.href = `mailto:${PERSONAL.email}?subject=Hello from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container" ref={ref}>
        <div className="animate-in contact-header">
          <p className="section-label">05. Contact</p>
          <h2 className="section-title">Let's <span className="accent-text">Connect</span></h2>
          <p className="contact-sub">
            Open to exciting roles, freelance projects, or just a good tech conversation.
            Drop me a message!
          </p>
        </div>

        <div className="contact-grid animate-in">
          <div className="contact-links">
            {CONTACT_ITEMS.map(item => (
              <div className="contact-item" key={item.label}>
                <span className="ci-icon">{item.icon}</span>
                <div>
                  <p className="ci-label">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="ci-value">{item.value}</a>
                    : <p className="ci-value no-link">{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email-display">Your Email</label>
              <input id="email-display" name="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="I'd love to discuss..." required />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span style={{color:'var(--accent-cyan)'}}>{'<'}</span>
          {PERSONAL.name.short}
          <span style={{color:'var(--accent-cyan)'}}>{'/>'}</span>
        </span>
        <p>Built with React + Vite · Designed with ❤️</p>
        <p className="footer-copy">© {new Date().getFullYear()} {PERSONAL.name.full}</p>
      </div>
    </footer>
  )
}
