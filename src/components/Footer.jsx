import { Link } from 'react-router-dom'
import homeTechImage from '../assets/images/home-tech-box-thumb.png'

function Footer() {
  const socials = [
    { label: 'Facebook', url: 'https://web.facebook.com/people/Mbongwa-Creatives/61592170432178/' },
    { label: 'Instagram', url: 'https://www.instagram.com/mbongwacreatives/' },
    { label: 'Twitter / X', url: 'https://x.com/MbongwaCreate' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/mbongwa-creatives/' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@mbongwacreatives/' },
  ]

  return (
    <footer className="site-footer">
      <div
        className="footer-banner"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.35)), url('${homeTechImage}')` }}
      >
        <div className="footer-banner-inner">
          <Link to="/site" className="footer-brand-block" aria-label="Mbongwa Creatives home">
            <span className="brand-mark footer-mark" aria-hidden="true">M</span>
            <span className="brand-wordmark footer-wordmark">MBONGWA CREATIVES</span>
          </Link>

          <h2>Let&#39;s Build the Brand Your Audience Will Remember.</h2>

          <div className="footer-links-row">
            <a href="tel:+27671406632">+27 67 140 6632</a>
            <a href="tel:+27684957045">+27 68 495 7045</a>
          </div>

          <div className="social-links">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="footer-copy">© 2026 by Mbongwa Creatives. Powered and secured by Wix.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
