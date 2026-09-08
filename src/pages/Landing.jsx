import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { config } from '../constants/config'
import { adsData, getFeaturedAds } from '../data/adsData'
import {
  pageTransition,
  fadeIn,
  staggerContainer,
  staggerItem,
} from '../constants/animations'

function Landing() {
  const heroVideoRef = useRef(null)
  const featuredVideoRef = useRef(null)

  const featuredAds = getFeaturedAds()
  const heroAd = featuredAds.length > 0 ? featuredAds[0] : adsData[0]
  const featuredSectionAd = adsData.find(
    (ad) => ad.id !== heroAd?.id && ad.videoUrl !== heroAd?.videoUrl,
  ) || heroAd
  const featuredDescription = heroAd?.description && heroAd.description.trim().length > 50
    ? heroAd.description
    : 'This featured campaign highlights how we combine strategy, production, and storytelling to create advert content that is clear, memorable, and built for audience impact across platforms.'

  const videoSrc = heroAd?.videoUrl?.includes('drive.google.com')
    ? heroAd.videoUrl.replace('/drive/folders/', '/file/d/').replace('?usp=drive_link', '/preview')
    : heroAd.videoUrl

  const heroEmbedSrc = videoSrc?.includes('?')
    ? `${videoSrc}&autoplay=1&mute=1&playsinline=1`
    : `${videoSrc}?autoplay=1&mute=1&playsinline=1`

  const featuredVideoSrc = featuredSectionAd?.videoUrl?.includes('drive.google.com')
    ? featuredSectionAd.videoUrl.replace('/drive/folders/', '/file/d/').replace('?usp=drive_link', '/preview')
    : featuredSectionAd?.videoUrl

  const featuredEmbedSrc = featuredVideoSrc?.includes('?')
    ? `${featuredVideoSrc}&autoplay=1&mute=1&playsinline=1`
    : `${featuredVideoSrc}?autoplay=1&mute=1&playsinline=1`

  const isLocalVideo = (src) => {
    if (!src) return false
    return src.startsWith('/src/assets/') || src.endsWith('.mp4') || src.endsWith('.webm')
  }

  useEffect(() => {
    ;[heroVideoRef.current, featuredVideoRef.current].forEach((videoEl) => {
      if (!videoEl) return
      videoEl.muted = true
      const playPromise = videoEl.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Browser autoplay policies may delay playback until media is buffered.
        })
      }
    })
  }, [videoSrc, featuredVideoSrc])

  return (
    <motion.div className="landing-page" {...pageTransition}>
      <section className="hero-section">
        <div className="hero-copy">
          <motion.div
            className="hero-text"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={staggerItem} className="eyebrow">
              Creative Advertising Agency
            </motion.p>
            <motion.h1 variants={staggerItem} className="hero-title">
              Creating Experiences.<br />
              Building Brands.<br />
              Inspiring Growth.
            </motion.h1>
            <motion.p variants={staggerItem} className="hero-description">
              Mbongwa Creatives helps brands stand out through commercial production,
              motion graphics, product launches, and campaign storytelling that connects
              with people and drives growth.
            </motion.p>
            <motion.div variants={staggerItem} className="hero-actions">
              <Link to="/gallery" className="btn btn-primary hero-primary-btn">
                View Our Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-visual-card">
            {isLocalVideo(videoSrc) ? (
              <video
                ref={heroVideoRef}
                className="hero-video"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <iframe
                src={heroEmbedSrc}
                title={heroAd.title}
                className="hero-video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </section>

      <motion.section
        className="featured-section"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <p className="eyebrow">Featured Campaign</p>
          <h2>{heroAd.title}</h2>
        </div>

        <div className="featured-layout">
          <div className="video-panel">
            {isLocalVideo(featuredVideoSrc) ? (
              <video
                ref={featuredVideoRef}
                className="video-frame"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              >
                <source src={featuredVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={featuredEmbedSrc}
                title={`${heroAd.title} Preview`}
                className="video-frame"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="featured-copy">
            <p>{featuredDescription}</p>
            <p className="featured-note">Live campaign preview playing automatically for quick viewing.</p>
            <Link to="/gallery" className="inline-link">
              Explore More Campaigns →
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="services-preview"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="section-heading center">
          <p className="eyebrow">What We Do</p>
          <h2>Creative solutions built for impact</h2>
        </div>

        <div className="services-grid">
          {config.services.slice(0, 6).map((service) => (
            <motion.article
              key={service.id}
              className="service-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-banner"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Let’s build the brand your audience will remember</h2>
        <Link to="/contact" className="btn btn-primary btn-large cta-primary-btn">
          Start Your Project
        </Link>
      </motion.section>
    </motion.div>
  )
}

export default Landing
