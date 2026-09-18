import { config } from '../constants/config'
import AgencyIntro from '../components/AgencyIntro'
import BrandFramework from '../components/BrandFramework'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import TestimonialsSection from '../components/TestimonialsSection'

const narrativeItems = [
  {
    title: 'Strategy that sharpens the message',
    copy:
      'We build campaigns around real audience insight, positioning, and attention—so every creative choice creates meaning, not noise.',
  },
  {
    title: 'Production with editorial taste',
    copy:
      'From concept to final frame, we craft polished visual stories that feel premium, contemporary, and unmistakably brand-led.',
  },
  {
    title: 'Launches designed to move people',
    copy:
      'Whether it is a product reveal or a full-funnel campaign, we design the experience to generate recall, trust, and action.',
  },
]

function Landing() {
  return (
    <div className="landing-page page-wrap">
      <HomeHero />

      <AgencyIntro />

      <section className="story-block slim-block">
        <p>
          We shape campaigns that balance clarity, beauty, and performance—combining creative
          direction, production, and motion to turn attention into brand equity.
        </p>
      </section>

      <HomeServices />

      <BrandFramework />

      <TestimonialsSection />

      <section className="narrative-section">
        <div className="section-header">
          <p className="eyebrow">What we do</p>
          <h2>Creative systems built for growth.</h2>
        </div>

        <div className="narrative-stack">
          {narrativeItems.map((item, index) => (
            <article className="narrative-row" key={item.title}>
              <div className="narrative-index">0{index + 1}</div>
              <div className="narrative-text">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="framework-section">
        <div className="section-header align-left">
          <p className="eyebrow">Brand framework</p>
          <h2>From insight to launch we keep the story clear.</h2>
        </div>

        <div className="process-grid">
          {config.framework.map((step) => (
            <article key={step.step} className="process-card feature-card">
              <span className="step-label">Step {step.step}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2>Clients trust us to make brands feel unmistakably premium.</h2>
        </div>

        <div className="testimonial-grid">
          {config.testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.company}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Landing
