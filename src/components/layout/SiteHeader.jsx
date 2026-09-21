import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../data/siteData'

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const menuLinks = navRef.current ? Array.from(navRef.current.querySelectorAll('a')) : []
    const focusableItems = [...menuLinks, toggleRef.current].filter(Boolean)

    if (focusableItems.length) {
      focusableItems[0].focus()
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusableItems.length === 0) return

      const first = focusableItems[0]
      const last = focusableItems[focusableItems.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/site" className="brand-link" aria-label="Mbongwa Creatives home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-wordmark">MBONGWA CREATIVES</span>
        </Link>

        <div className="nav-cluster">
          <nav id="primary-navigation" ref={navRef} className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Link to="/site/contact" className="header-cta">
          Let’s Connect
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          title="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
