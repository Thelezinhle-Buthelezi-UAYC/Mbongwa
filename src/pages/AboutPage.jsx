import { Link } from 'react-router-dom'
import { values, teamProfiles } from '../data/teamData'
import { capabilityList } from '../data/servicesData'
import motionGraphicsImage from '../assets/images/motion-graphics-thumb.png'
import TeamProfile from '../components/about/TeamProfile'
import SectionHeading from '../components/layout/SectionHeading'

function AboutPage() {
  return (
    <div className="page-wrap about-page">
      <section className="page-intro about-page__header">
        <p className="eyebrow">About</p>
        <h1>About Mbongwa Creatives</h1>
        <p className="lead-copy narrow-copy">Infinite Imagination. Timeless Creativity.</p>
        <p className="lead-copy narrow-copy">Creating Experiences. Building Brands. Inspiring Growth.</p>
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
        <SectionHeading eyebrow="Our foundation" title="Built around clear intent." />

        <div className="pillar-grid">
          {values.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <span className="step-label">{pillar.title}</span>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <SectionHeading eyebrow="Expertise" title="Creative services designed for modern brands." />

        <div className="expertise-layout">
          <ul className="expertise-list">
            {capabilityList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="team-grid">
            {teamProfiles.map((profile) => (
              <TeamProfile
                key={profile.name}
                name={profile.name}
                role={profile.role}
                summary={profile.summary}
                quote={profile.quote}
              />
            ))}
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

export default AboutPage
