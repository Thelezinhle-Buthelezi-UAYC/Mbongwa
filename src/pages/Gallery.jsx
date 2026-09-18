import adsData from '../data/adsData'

const portfolioItems = [...adsData, ...adsData].slice(0, 13)

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
  return (
    <div className="page-wrap portfolio-page">
      <section className="page-intro portfolio-page__header">
        <p className="eyebrow">Portfolio</p>
        <h1>Portfolio</h1>
        <p className="lead-copy narrow-copy">
          A curated look at our recent work across commercial production, product storytelling,
          branding moments, and editorial motion.
        </p>
      </section>

      <div className="instagram-alert">
        Follow our creative process and latest release on Instagram: <a href="https://www.instagram.com/mbongwacreatives/" target="_blank" rel="noreferrer">@mbongwacreatives</a>
      </div>

      <section className="portfolio-grid">
        {portfolioItems.map((ad, index) => (
          <article className="portfolio-card" key={`${ad.id}-${index}`}>
            <div className="portfolio-media">
              {isLocalVideo(ad.videoUrl) ? (
                <video
                  className="portfolio-video"
                  src={ad.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={`Preview for ${ad.title || 'campaign work'} video`}
                />
              ) : (
                <iframe
                  src={getDriveEmbedUrl(ad.videoUrl)}
                  title={`Campaign video ${index + 1}`}
                  className="portfolio-video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  aria-label={`Embedded campaign video ${index + 1}`}
                />
              )}
            </div>
            <div className="portfolio-meta">
              <span>{ad.category || 'Campaign'}</span>
              <h3>{ad.title || `Campaign ${index + 1}`}</h3>
            </div>
          </article>
        ))}
      </section>

      <div className="instagram-alert closing-alert">
        More work is available on Instagram: <a href="https://www.instagram.com/mbongwacreatives/" target="_blank" rel="noreferrer">@mbongwacreatives</a>
      </div>
    </div>
  )
}

export default Gallery
