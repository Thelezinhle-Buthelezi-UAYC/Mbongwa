import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function HomeHero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const playVideo = async () => {
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    const handleMotionPreference = () => {
      if (mediaQuery.matches) {
        video.pause()
        setIsPlaying(false)
        return
      }

      playVideo()
    }

    handleMotionPreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMotionPreference)
      return () => mediaQuery.removeEventListener('change', handleMotionPreference)
    }

    mediaQuery.addListener(handleMotionPreference)
    return () => mediaQuery.removeListener(handleMotionPreference)
  }, [])

  const handleTogglePlayback = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      await video.play()
      setIsPlaying(true)
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  return (
    <section className="home-hero" aria-label="Mbongwa Creatives hero section">
      <div className="home-hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="home-hero__video"
          src="/assets/hero/home-hero.mp4"
          poster="/assets/hero/home-hero.jpg"
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
        <p className="home-hero__eyebrow">Creative Advertising Agency</p>
        <h1 className="home-hero__headline">
          <span>creating experiences.</span>
          <span>building brands.</span>
          <span>inspiring growth.</span>
        </h1>
        <p className="home-hero__subheadline">
          We create powerful advertising, cinematic content, and brand campaigns that connect
          with audiences, elevate brands, and drive meaningful growth.
        </p>

        <Link to="/site/portfolio" className="home-hero__cta">
          View Our Work <span aria-hidden="true">→</span>
        </Link>
      </div>

      <button
        type="button"
        className="home-hero__toggle"
        onClick={handleTogglePlayback}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        title={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </section>
  )
}

export default HomeHero
