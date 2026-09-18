import { Link } from 'react-router-dom'
import { footerSocialLinks } from '../../data/siteData'
import homeTechImage from '../../assets/images/home-tech-box-thumb.png'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div
        className="footer-banner"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.35)), url('${homeTechImage}')`,
        }}
      >
        <div className="footer-banner-inner">
          <Link to="/site" className="footer-brand-block" aria-label="Mbongwa Creatives home">
            <span className="brand-mark footer-mark" aria-hidden="true">M</span>
            <span className="brand-wordmark footer-wordmark">MBONGWA CREATIVES</span>
          </Link>

          <h2>Let&apos;s Build the Brand Your Audience Will Remember.</h2>

          <div className="footer-links-row">
            <a href="tel:+27671406632">+27 67 140 6632</a>
            <a href="tel:+27684957045">+27 68 495 7045</a>
          </div>

          <div className="social-links">
            {footerSocialLinks.map((item) => (
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

          <p className="footer-copy">© 2026 by Mbongwa Creatives.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
