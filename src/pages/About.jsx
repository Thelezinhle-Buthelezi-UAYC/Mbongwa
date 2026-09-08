import { motion } from 'framer-motion'
import { config } from '../constants/config'
import { fadeIn, staggerContainer, staggerItem } from '../constants/animations'
import adsData from '../data/adsData'
import motionGraphicsThumb from '../assets/images/motion-graphics-thumb.png'

function About() {
  const showcaseVideos = adsData.slice(0, 3).map((ad) => ad.videoUrl)

  return (
    <motion.div className="page-wrap" {...fadeIn}>
      <section className="section-intro">
        <p className="eyebrow">About Us</p>
        <h1>We turn ideas into unforgettable brand experiences</h1>
      </section>

      <section className="story-block">
        <div className="story-layout">
          <div className="story-copy">
            <p>
              Mbongwa Creatives is a creative advertising agency specializing in commercial
              production, motion graphics, product launches, and integrated campaigns that
              help brands connect, stand out, and grow.
            </p>
            <p>
              Our approach is built on clarity, strategy, and craftsmanship, combining creativity
              with execution so every campaign feels intentional, polished, and memorable.
            </p>
          </div>
          <figure className="story-media">
            <img src={motionGraphicsThumb} alt="Motion Graphics campaign" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading center">
          <p className="eyebrow">Our Framework</p>
          <h2>How we turn strategy into impact</h2>
        </div>

        <motion.div
          className="process-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {config.framework.map((step) => (
            <motion.div key={step.step} className="process-card" variants={staggerItem}>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="showcase-section">
        <div className="section-heading center">
          <p className="eyebrow">Campaign Videos</p>
          <h2>Visual highlights from our latest work</h2>
        </div>

        <div className="showcase-grid">
          {showcaseVideos.map((videoSrc, index) => (
            <article key={videoSrc} className="showcase-card">
              <video
                className="showcase-video"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label={`Campaign video ${index + 1}`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading center">
          <p className="eyebrow">Client Love</p>
          <h2>What our clients say</h2>
        </div>

        <div className="testimonial-grid">
          {config.testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <p>{item.quote}</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                {item.role && <span>{item.role}</span>}
                <small>{item.company}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default About
