import { Link } from 'react-router-dom'
import { config } from '../constants/config'
import { serviceRows, narrativeItems, frameworkSteps, testimonialItems } from '../data/servicesData'
import { portfolioItems } from '../data/portfolioData'
import { siteCopy } from '../data/siteData'
import ProcessStage from '../components/home/ProcessStage'
import Testimonial from '../components/home/Testimonial'
import SectionHeading from '../components/layout/SectionHeading'
import motionGraphicsImage from '../assets/images/motion-graphics-thumb.png'

const dunnsVideo = portfolioItems.find((item) => item.title === 'Dunns.mp4')?.videoUrl

const renderServiceCopy = (services) => (
  <div className="services-featured-copy">
    {services.map((service) => (
      <div className="services-featured-copy__item" key={service.title}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
)

function HomePage() {
  return (
    <div className="landing-page page-wrap">
      <section className="home-hero" aria-label="Mbongwa Creatives hero section">
        <div className="home-hero__media" aria-hidden="true">
          <video
            className="home-hero__video"
            src={dunnsVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Background hero video for Mbongwa Creatives"
            title="Background hero video"
          />
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">{siteCopy.home.eyebrow}</p>
          <h1 className="home-hero__headline">
            {siteCopy.home.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="home-hero__subheadline">{siteCopy.home.subheadline}</p>

          <Link to="/site/portfolio" className="home-hero__cta">
            View Our Work <span aria-hidden="true">→</span>
          </Link>
        </div>

      </section>

      <section className="agency-intro" aria-label="Agency introduction and capabilities">
        <div className="agency-intro__content">
          <p className="agency-intro__statement">
            Mbongwa Creatives is a creative advertising agency specializing in commercial production,
            motion graphics, product launches, and integrated campaigns that help brands connect,
            stand out, and grow.
          </p>

          <ul className="agency-intro__list" aria-label="Core creative services">
            {['Video Advert Curation for television and digital platforms', 'Motion Graphics & Animated Content', 'Product Launch Campaigns', 'Brand Activations & Experiential Marketing', 'Advertising Campaign Strategy & Creative Execution', 'Public Relations Campaign Support', 'Corporate & Event Productions', 'Product Photography & Campaign Visuals', 'Creative Direction & Brand Storytelling'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="agency-intro__period" aria-hidden="true">.</div>
      </section>

      <section className="story-block slim-block">
        <p>
          We shape campaigns that balance clarity, beauty, and performance—combining creative
          direction, production, and motion to turn attention into brand equity.
        </p>
      </section>

      <section className="services-section" aria-label="Our services">
        <div className="section-header services-header">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>What you can get from us</h2>
        </div>

        <div className="services-featured-panels">
          <article className="services-featured-panel">
            <figure className="services-featured-image">
              <img src={motionGraphicsImage} alt="Motion graphics and advertising creative work" />
              <figcaption>Motion, image, and story working as one.</figcaption>
            </figure>
            {renderServiceCopy(serviceRows.slice(0, 4))}
          </article>

          <article className="services-featured-panel services-featured-panel--reverse">
            <figure className="services-featured-image">
              <img src={serviceRows[7].imageSrc} alt="Home and Tech Box product campaign creative" />
              <figcaption>Brand ideas designed to move people.</figcaption>
            </figure>
            {renderServiceCopy(serviceRows.slice(4, 8))}
          </article>
        </div>
      </section>

      <section className="brand-framework" aria-label="Brand framework">
        <div className="brand-framework__header">
          <p className="eyebrow">OUR FRAMEWORK</p>
          <h2>Our Framework for Brand Clarity</h2>
          <p className="brand-framework__intro">
            A collaborative creative process that transforms ideas into unforgettable brand experiences and impactful campaigns.
          </p>
        </div>

        <div className="brand-framework__grid">
          {frameworkSteps.map((step) => (
            <article key={step.step} className="brand-framework__stage">
              <span className="brand-framework__index">0{step.step}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>What My Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonialItems.map((item) => (
            <Testimonial key={item.name} quote={item.quote} name={item.name} company={item.company} />
          ))}
        </div>
      </section>

      <section className="narrative-section">
        <SectionHeading eyebrow="What we do" title="Creative systems built for growth." />

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
        <SectionHeading eyebrow="Brand framework" title="From insight to launch we keep the story clear." />

        <div className="process-grid">
          {config.framework.map((step) => (
            <ProcessStage key={step.step} step={step.step} name={step.name} description={step.description} />
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <SectionHeading eyebrow="Testimonials" title="Clients trust us to make brands feel unmistakably premium." />

        <div className="testimonial-grid">
          {config.testimonials.map((item) => (
            <Testimonial key={item.id} quote={item.quote} name={item.name} company={item.company} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
