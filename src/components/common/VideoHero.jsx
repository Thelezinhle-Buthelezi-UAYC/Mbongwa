import { useEffect, useRef, useState } from 'react'

function VideoHero({
  videoSrc,
  posterSrc,
  eyebrow,
  title,
  description,
  overlayClassName = '',
  videoClassName = '',
  contentClassName = '',
  buttonText = '',
  onToggle,
  buttonLabel,
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleMotionPreference = () => {
      if (mediaQuery.matches) {
        video.pause()
        setIsPlaying(false)
        return
      }

      if (video.paused) {
        video.play().catch(() => setIsPlaying(false))
        setIsPlaying(true)
      }
    }

    handleMotionPreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMotionPreference)
      return () => mediaQuery.removeEventListener('change', handleMotionPreference)
    }

    mediaQuery.addListener(handleMotionPreference)
    return () => mediaQuery.removeListener(handleMotionPreference)
  }, [])

  const handleToggle = async () => {
    if (onToggle) {
      onToggle()
      return
    }

    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      await video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="contact-hero" aria-label={eyebrow || 'Video hero'}>
      <video
        ref={videoRef}
        className={`contact-video ${videoClassName}`.trim()}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={title || 'Background video'}
        title={title || 'Background video'}
      />
      <div className={`contact-overlay ${overlayClassName}`.trim()} />

      <div className={`contact-hero-copy ${contentClassName}`.trim()}>
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
        {title && <h1>{title}</h1>}
        {description && <p className="contact-subheadline">{description}</p>}
      </div>

      {buttonText && (
        <button
          type="button"
          className="contact-video-toggle"
          onClick={handleToggle}
          aria-label={buttonLabel || (isPlaying ? 'Pause background video' : 'Play background video')}
          title={buttonLabel || (isPlaying ? 'Pause background video' : 'Play background video')}
        >
          {buttonText}
        </button>
      )}
    </section>
  )
}

export default VideoHero
