import { useState } from 'react'
import { config } from '../constants/config'

function SocialIcon({ platform, name }) {
  const [hasCustomIcon, setHasCustomIcon] = useState(true)

  const fallbackIcons = {
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-svg-fallback">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-svg-fallback">
        <path d="M4 4h4.8l4 5.4L17.4 4H20l-5.9 6.8L20 20h-4.8l-4.2-5.6L6.4 20H4l6.1-7.1L4 4z" fill="currentColor" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-svg-fallback">
        <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="7" y="10" width="2.2" height="7" fill="currentColor" />
        <circle cx="8.1" cy="7.8" r="1.2" fill="currentColor" />
        <path d="M12 10h2.1v1c.7-.9 1.7-1.3 3-1.3 2.3 0 3.4 1.5 3.4 4v3.3h-2.2v-3c0-1.5-.5-2.2-1.7-2.2-1.2 0-2 .8-2 2.3v2.9H12V10z" fill="currentColor" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-svg-fallback">
        <path d="M14.8 4.2c.8 1.2 1.9 2 3.3 2.4v2.6c-1.2-.1-2.3-.5-3.3-1.2v5.3c0 3.2-2.2 5.5-5.3 5.5-2.9 0-5.1-2.2-5.1-5 0-2.9 2.3-5.2 5.2-5.2.3 0 .6 0 .8.1v2.7c-.3-.1-.6-.2-.9-.2-1.4 0-2.4 1.1-2.4 2.5s1 2.4 2.3 2.4c1.6 0 2.7-1.1 2.7-2.9V4.2h2.7z" fill="currentColor" />
      </svg>
    ),
  }

  return (
    <>
      {hasCustomIcon && (
        <img
          src={`/social/${platform}.svg`}
          alt=""
          aria-hidden="true"
          className="social-svg"
          loading="lazy"
          onError={() => setHasCustomIcon(false)}
        />
      )}
      {!hasCustomIcon && fallbackIcons[platform]}
      <span className="sr-only">{name}</span>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-shell">
        <p>© {config.site.year} Mbongwa Creatives. All rights reserved.</p>

        <div className="social-links">
          {Object.entries(config.social)
            .sort(([, a], [, b]) => (a.priority || 99) - (b.priority || 99))
            .map(([platform, item]) => (
            <a key={item.name} className="social-icon" href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
              <SocialIcon platform={platform} name={item.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
