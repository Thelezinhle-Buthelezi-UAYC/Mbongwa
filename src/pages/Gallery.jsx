import { motion } from 'framer-motion'
import adsData from '../data/adsData'
import { fadeIn, staggerContainer, staggerItem } from '../constants/animations'

const isLocalVideo = (src = '') => src.endsWith('.mp4') || src.endsWith('.webm') || src.startsWith('/src/assets/')

const getDriveEmbedUrl = (src = '') => {
  if (!src.includes('drive.google.com')) return src
  if (src.includes('/file/d/')) {
    return src.replace('/view', '/preview')
  }
  if (src.includes('/drive/folders/')) {
    return src.replace('/drive/folders/', '/file/d/').replace('?usp=drive_link', '/preview')
  }
  return src
}

function Gallery() {
  const youtubeChannelUrl = 'https://www.youtube.com/@mbongwacreatives'

  return (
    <motion.div className="page-wrap" {...fadeIn}>
      <section className="section-intro">
        <p className="eyebrow">Our Work</p>
        <h1>Creative campaigns that leave a mark</h1>
        <p className="lead">
          A curated look at the work we build for brands, campaigns, launches, and unforgettable moments.
        </p>
      </section>

      <motion.section
        className="gallery-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {adsData.map((ad) => (
          <motion.article key={ad.id} className="gallery-card" variants={staggerItem}>
            <div className="gallery-media">
              {isLocalVideo(ad.videoUrl) ? (
                <video
                  className="gallery-video"
                  src={ad.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              ) : (
                <iframe
                  src={getDriveEmbedUrl(ad.videoUrl)}
                  title={`Campaign video ${ad.id}`}
                  className="gallery-video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.article>
        ))}
      </motion.section>

      <section className="gallery-cta section-intro" style={{ paddingTop: '1rem' }}>
        <a
          href={youtubeChannelUrl}
          target="_blank"
          rel="noreferrer"
          className="btn gallery-see-more-btn"
        >
          See more
        </a>
      </section>
    </motion.div>
  )
}

export default Gallery
