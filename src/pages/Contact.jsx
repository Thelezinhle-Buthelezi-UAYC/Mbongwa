import { useEffect, useRef, useState } from 'react'
import homeTechImage from '../assets/images/home-tech-box-thumb.png'

function Contact() {
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

  const handleVideoToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false))
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="page-wrap contact-page">
      <section className="contact-hero" aria-label="Contact Mbongwa Creatives">
        <video
          ref={videoRef}
          className="contact-video"
          src="/assets/contact/contact-background.mp4"
          poster="/assets/contact/contact-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          title="Background contact video"
          aria-label="Background contact video for Mbongwa Creatives"
        />
        <div className="contact-overlay" />

        <div className="contact-hero-copy">
          <p className="eyebrow light">Contact</p>
          <h1>Let&#39;s Create Something Memorable</h1>
          <p className="contact-subheadline">
            Have a project in mind or just want to say hello? I&#39;d love to hear from you
          </p>

          <div className="contact-list">
            <p>
              <span>Teboho Mahlangu: </span>
              <a href="tel:+27671406632">+27 67 140 6632</a>
            </p>
            <p>
              <span>Lingelihle Ndesi: </span>
              <a href="tel:+27684957045">+27 68 495 7045</a>
            </p>
            <p>
              <a href="mailto:mbongwacreatives@gmail.com">mbongwacreatives@gmail.com</a>
            </p>
          </div>
        </div>

        <button
          type="button"
          className="contact-video-toggle"
          onClick={handleVideoToggle}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        </button>
      </section>

      <section className="contact-showcase" aria-label="Open laptop display">
        <div className="contact-showcase__media">
          <img src={homeTechImage} alt="Home and Tech Box product campaign creative" loading="lazy" />
        </div>
      </section>
    </div>
  )
}

export default Contact
