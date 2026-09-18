import { useEffect } from 'react'
import { contactDetails } from '../data/siteData'

function ContactPage() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const video = document.querySelector('.contact-video')
    if (!video) return undefined

    if (mediaQuery.matches) {
      video.pause()
      return undefined
    }

    video.play().catch(() => {})
    return undefined
  }, [])

  return (
    <div className="page-wrap contact-page">
      <section className="contact-hero" aria-label="Contact Mbongwa Creatives">
        <video
          className="contact-video"
          src="/assets/contact/contact-background.mp4"
          poster="/assets/contact/contact-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          title="Parallel Light Patterns"
          aria-label="Parallel Light Patterns background video"
        />
        <div className="contact-overlay" />

        <div className="contact-hero-copy">
          <p className="eyebrow light">Contact</p>
          <h1>Let&apos;s Create Something Memorable</h1>
          <p className="contact-subheadline">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>

          <div className="contact-list">
            {contactDetails.map((item) => (
              <p key={item.label}>
                {item.label !== 'Email' && <span>{item.label}: </span>}
                <a href={item.href}>{item.value}</a>
              </p>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default ContactPage
