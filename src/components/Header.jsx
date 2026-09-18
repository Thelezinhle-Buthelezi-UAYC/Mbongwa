import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/site' },
  { name: 'About', path: '/site/about' },
  { name: 'Portfolio', path: '/site/portfolio' },
  { name: 'Contact', path: '/site/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const navLinks = navRef.current ? Array.from(navRef.current.querySelectorAll('a')) : []
    const focusableItems = [...navLinks, menuButtonRef.current].filter(Boolean)

    if (focusableItems.length > 0) {
      focusableItems[0].focus()
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
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
          <span className="nav-tag" aria-hidden="true">Built on WIX Harmony</span>
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
          ref={menuButtonRef}
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

export default Header
