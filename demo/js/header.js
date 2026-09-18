/**
 * Mbongwa Creatives — Header / Navigation
 * Shared across all pages. Renders the sticky header and handles mobile menu.
 * Depends on: data.js (navItems)
 */

(function () {
  'use strict'

  // ── Detect current page for active nav link ─────────────────────────────
  const currentFile = window.location.pathname.split('/').pop() || 'index.html'

  // ── Build header HTML ────────────────────────────────────────────────────
  function buildHeader() {
    const navLinksHtml = navItems
      .map((item) => {
        const isActive = currentFile === item.path || (currentFile === '' && item.path === 'index.html')
        return `<a href="${item.path}" class="${isActive ? 'active' : ''}">${item.name}</a>`
      })
      .join('')

    return `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <header class="site-header" id="site-header">
        <div class="header-inner">
          <a href="index.html" class="brand-link" aria-label="Mbongwa Creatives home">
            <span class="brand-mark" aria-hidden="true">M</span>
            <span class="brand-wordmark">MBONGWA CREATIVES</span>
          </a>

          <div class="nav-cluster">
            <span class="nav-tag" aria-hidden="true">Creative Agency</span>
            <nav
              id="primary-navigation"
              class="nav-links"
              aria-label="Main navigation"
            >
              ${navLinksHtml}
            </nav>
          </div>

          <a href="contact.html" class="header-cta">Let&rsquo;s Connect</a>

          <button
            type="button"
            class="mobile-menu-toggle"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-controls="primary-navigation"
            aria-expanded="false"
            title="Toggle navigation menu"
          >
            Menu
          </button>
        </div>
      </header>
    `
  }

  // ── Build footer HTML ────────────────────────────────────────────────────
  function buildFooter() {
    const socialLinksHtml = footerSocialLinks
      .map(
        (item) =>
          `<a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}" title="${item.label}">${item.label}</a>`
      )
      .join('')

    return `
      <footer class="site-footer">
        <div class="footer-banner">
          <div class="footer-banner-inner">
            <a href="index.html" class="footer-brand-block" aria-label="Mbongwa Creatives home">
              <span class="brand-mark footer-mark" aria-hidden="true">M</span>
              <span class="brand-wordmark footer-wordmark">MBONGWA CREATIVES</span>
            </a>

            <h2>Let&rsquo;s Build the Brand Your Audience Will Remember.</h2>

            <div class="footer-links-row">
              <a href="tel:+27671406632">+27 67 140 6632</a>
              <a href="tel:+27684957045">+27 68 495 7045</a>
            </div>

            <div class="social-links">${socialLinksHtml}</div>

            <p class="footer-copy">&copy; ${new Date().getFullYear()} by Mbongwa Creatives.</p>
          </div>
        </div>
      </footer>
    `
  }

  // ── Mobile menu toggle logic ─────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle')
    const nav = document.getElementById('primary-navigation')
    if (!toggle || !nav) return

    toggle.addEventListener('click', (e) => {
      e.stopPropagation()
      const isOpen = nav.classList.toggle('nav-links-open')
      toggle.setAttribute('aria-expanded', String(isOpen))
    })

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('nav-links-open')) {
        nav.classList.remove('nav-links-open')
        toggle.setAttribute('aria-expanded', 'false')
        toggle.focus()
      }
    })

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('nav-links-open')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }

  // ── Inject into page ─────────────────────────────────────────────────────
  function initHeader() {
    const headerMount = document.getElementById('header-mount')
    const footerMount = document.getElementById('footer-mount')

    if (headerMount && (!headerMount.children || headerMount.children.length === 0)) {
      headerMount.innerHTML = buildHeader()
    }
    if (footerMount && (!footerMount.children || footerMount.children.length === 0)) {
      footerMount.innerHTML = buildFooter()
    }

    initMobileMenu()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader)
  } else {
    initHeader()
  }
})()
