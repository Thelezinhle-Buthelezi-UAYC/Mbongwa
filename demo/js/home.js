/**
 * Mbongwa Creatives — Home Page
 * Renders all dynamic sections: hero, services, framework, testimonials, narrative.
 * Depends on: data.js
 */

(function () {
  'use strict'

  // ── Hero video toggle ────────────────────────────────────────────────────
  function initHeroVideo() {
    const video = document.getElementById('hero-video')
    const toggle = document.getElementById('hero-video-toggle')
    if (!video || !toggle) return

    // Respect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      if (mediaQuery.matches) {
        video.pause()
        toggle.textContent = 'Play'
        return
      }
      video.play().catch(() => {})
      toggle.textContent = 'Pause'
    }

    updatePlayback()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePlayback)
    }

    toggle.addEventListener('click', () => {
      if (video.paused) {
        video.play().catch(() => {})
        toggle.textContent = 'Pause'
        toggle.setAttribute('aria-label', 'Pause background video')
      } else {
        video.pause()
        toggle.textContent = 'Play'
        toggle.setAttribute('aria-label', 'Play background video')
      }
    })
  }

  // ── Render Services Featured Panels ─────────────────────────────────────
  function renderServicePanels() {
    const mount = document.getElementById('services-panels-mount')
    if (!mount) return

    // First panel — services 0-3, image on left
    const firstCopy = serviceRows
      .slice(0, 4)
      .map(
        (s) => `
        <div class="services-featured-copy__item">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>`
      )
      .join('')

    // Second panel — services 4-7, image on right (reversed)
    const secondCopy = serviceRows
      .slice(4, 8)
      .map(
        (s) => `
        <div class="services-featured-copy__item">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>`
      )
      .join('')

    mount.innerHTML = `
      <article class="services-featured-panel">
        <figure class="services-featured-image">
          <div style="min-height:360px;background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);display:flex;align-items:center;justify-content:center;border-radius:18px;">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="38" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
              <path d="M32 28l20 12-20 12V28z" fill="rgba(255,255,255,0.3)"/>
            </svg>
          </div>
          <figcaption>Motion, image, and story working as one.</figcaption>
        </figure>
        <div class="services-featured-copy">${firstCopy}</div>
      </article>

      <article class="services-featured-panel services-featured-panel--reverse">
        <figure class="services-featured-image">
          <div style="min-height:360px;background:linear-gradient(135deg,#0f3460 0%,#533483 100%);display:flex;align-items:center;justify-content:center;border-radius:18px;">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
              <rect x="12" y="20" width="56" height="40" rx="6" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
              <path d="M12 32h56" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
              <circle cx="26" cy="26" r="3" fill="rgba(255,255,255,0.3)"/>
              <circle cx="38" cy="26" r="3" fill="rgba(255,255,255,0.3)"/>
            </svg>
          </div>
          <figcaption>Brand ideas designed to move people.</figcaption>
        </figure>
        <div class="services-featured-copy">${secondCopy}</div>
      </article>
    `
  }

  // ── Render Brand Framework ───────────────────────────────────────────────
  function renderFramework() {
    const mount = document.getElementById('framework-mount')
    if (!mount) return

    mount.innerHTML = frameworkSteps
      .map(
        (step) => `
        <article class="brand-framework__stage">
          <span class="brand-framework__index">0${step.step}</span>
          <h3>${step.name}</h3>
          <p>${step.description}</p>
        </article>`
      )
      .join('')
  }

  // ── Render Testimonials ──────────────────────────────────────────────────
  function renderTestimonials() {
    const mount = document.getElementById('testimonials-mount')
    if (!mount) return

    mount.innerHTML = testimonialItems
      .map(
        (item) => `
        <article class="testimonial-item">
          <blockquote class="testimonial-quote">&ldquo;${item.quote}&rdquo;</blockquote>
          <div class="testimonial-meta">
            <strong>${item.name}</strong>
            <span>${item.company}</span>
          </div>
        </article>`
      )
      .join('')
  }

  // ── Render Narrative Items ───────────────────────────────────────────────
  function renderNarratives() {
    const mount = document.getElementById('narrative-mount')
    if (!mount) return

    mount.innerHTML = narrativeItems
      .map(
        (item, i) => `
        <article class="narrative-row">
          <div class="narrative-index">0${i + 1}</div>
          <div class="narrative-text">
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
          </div>
        </article>`
      )
      .join('')
  }

  // ── Render Agency Intro List ──────────────────────────────────────────────
  function renderIntroList() {
    const mount = document.getElementById('intro-list-mount')
    if (!mount) return

    const items = [
      'Video Advert Curation for television and digital platforms',
      'Motion Graphics & Animated Content',
      'Product Launch Campaigns',
      'Brand Activations & Experiential Marketing',
      'Advertising Campaign Strategy & Creative Execution',
      'Public Relations Campaign Support',
      'Corporate & Event Productions',
      'Product Photography & Campaign Visuals',
      'Creative Direction & Brand Storytelling',
    ]

    mount.innerHTML = items.map((item) => `<li>${item}</li>`).join('')
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    renderServicePanels()
    renderFramework()
    renderTestimonials()
    renderNarratives()
    renderIntroList()
    initHeroVideo()
  })
})()
