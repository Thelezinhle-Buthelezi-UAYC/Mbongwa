import { useEffect, useRef, useState } from 'react'

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

function PortfolioPreview({ src, label }) {
  const mediaRef = useRef(null)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const media = mediaRef.current
    if (!media) return undefined

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '400px 0px', threshold: 0.01 },
    )

    observer.observe(media)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    } else {
      video.pause()
    }
  }, [isVisible])

  return (
    <div ref={mediaRef} className="portfolio-media">
      <video
        ref={videoRef}
        className="portfolio-video"
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  )
}

function PortfolioMasonry({ items = [] }) {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (!selectedItem) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  return (
    <>
      <section className="portfolio-grid" aria-label="Portfolio work grid">
        {items.map((item, index) => (
          <article
            className={`portfolio-card portfolio-card--${item.aspectRatio || 'landscape'}`}
            key={`${item.id}-${index}`}
          >
            <button
              type="button"
              className="portfolio-trigger"
              onClick={() => setSelectedItem(item)}
              aria-label={`Open media for ${item.title || `campaign ${index + 1}`}`}
              title={`Open media for ${item.title || `campaign ${index + 1}`}`}
            >
              {isLocalVideo(item.videoUrl) ? (
                <PortfolioPreview
                  src={item.videoUrl}
                  label={`Portfolio video ${index + 1}`}
                />
              ) : (
                <div className="portfolio-media">
                  <iframe
                    src={getDriveEmbedUrl(item.videoUrl)}
                    title={`Campaign video ${index + 1}`}
                    className="portfolio-video"
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    aria-label={`Embedded campaign video ${index + 1}`}
                  />
                </div>
              )}
            </button>
          </article>
        ))}
      </section>

      {selectedItem && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title || 'Portfolio item'}
          onClick={() => setSelectedItem(null)}
        >
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close portfolio item"
              title="Close portfolio item"
            >
              ✕
            </button>
            <div className="lightbox-media">
              {isLocalVideo(selectedItem.videoUrl) ? (
                <video
                  className="portfolio-video"
                  src={selectedItem.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  aria-label={`${selectedItem.title || 'Campaign'} video preview`}
                />
              ) : (
                <iframe
                  src={getDriveEmbedUrl(selectedItem.videoUrl)}
                  title={selectedItem.title || 'Portfolio item'}
                  className="portfolio-video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  aria-label={`${selectedItem.title || 'Campaign'} embedded video`}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PortfolioMasonry
