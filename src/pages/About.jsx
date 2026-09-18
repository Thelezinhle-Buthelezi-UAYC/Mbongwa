import { Link } from 'react-router-dom'
import { config } from '../constants/config'
import motionGraphicsImage from '../assets/images/motion-graphics-thumb.png'

const pillars = [
  { title: 'Purpose', copy: 'To help brands connect with the people who matter most through meaningful, memorable creative.' },
  { title: 'Vision', copy: 'To be the creative partner of choice for ambitious businesses seeking clarity, identity, and traction.' },
  { title: 'Mission', copy: 'To craft strategy-led campaigns and visual storytelling that convert attention into trust and action.' },
  { title: 'Promise', copy: 'To deliver premium work with thoughtful execution, strong communication, and lasting brand value.' },
]

const expertise = [
  'Commercial production',
  'Creative direction',
  'Motion design and animation',
  'Brand campaigns',
  'Product launches',
  'Social storytelling',
]

function About() {
  return (
    <div className="page-wrap about-page">
      <section className="page-intro about-page__header">
        <p className="eyebrow">About</p>
        <h1>About Mbongwa Creatives</h1>
        <p className="lead-copy narrow-copy">
          Mbongwa Creatives is a creative advertising studio focused on helping brands stand out
          with clarity, craft, and confidence. We build campaigns and visuals that feel premium,
          purposeful, and naturally resonant with the audiences they reach.
        </p>
      </section>

      <section className="story-block">
        <div className="story-layout">
          <div className="story-copy">
            <p>
              Every brand has a point of view. We help sharpen it, build the visual language around
              it, and create the content that gives it momentum. The result is work that feels not
              just polished, but genuinely memorable.
            </p>
            <p>
              Our approach blends strategic thinking with compelling production. That means cleaner
              messaging, sharper creative decisions, and more meaningful engagement across every touchpoint.
            </p>
          </div>
          <figure className="story-media">
            <img src={motionGraphicsImage} alt="Motion graphics creative work from Mbongwa Creatives" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="pillar-section">
        <div className="section-header">
          <p className="eyebrow">Our foundation</p>
          <h2>Built around clear intent.</h2>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <span className="step-label">{pillar.title}</span>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-header align-left">
          <p className="eyebrow">Expertise</p>
          <h2>Creative services designed for modern brands.</h2>
        </div>

        <div className="expertise-layout">
          <ul className="expertise-list">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="team-grid">
            <article className="team-card">
              <span className="team-badge">Creative lead</span>
              <h3>Teboho Mbongwa</h3>
              <p>
                Leads the studio’s creative vision, concept development, and campaign storytelling with a focus on brand clarity.
              </p>
            </article>
            <article className="team-card">
              <span className="team-badge">Production</span>
              <h3>Mbongwa Creatives Team</h3>
              <p>
                A collaborative creative unit producing high-impact visuals, motion assets, and launch content for bold brands.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner smaller">
        <h2>Ready to give your next campaign a sharper edge?</h2>
        <Link to="/site/contact" className="primary-btn">Let’s Connect</Link>
      </section>
    </div>
  )
}

export default About
