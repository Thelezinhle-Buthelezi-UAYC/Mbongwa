/**
 * Mbongwa Creatives — Portfolio Page
 * Renders the masonry grid with gradient placeholders and a lightbox.
 * Depends on: data.js
 */

(function () {
  'use strict'

  let currentItem = null

  // ── Build a single portfolio card ────────────────────────────────────────
  function buildCard(item, index) {
    const gradient = portfolioGradients[index % portfolioGradients.length]
    const title = item.title || `Campaign ${index + 1}`
    const category = item.category || 'Campaign'

    const mediaHtml = item.embedUrl
      ? `<iframe
           src="${item.embedUrl}"
           title="${title}"
           class="portfolio-video"
           allow="autoplay; encrypted-media; picture-in-picture"
           allowfullscreen
           aria-label="Embedded campaign video: ${title}"
         ></iframe>`
      : `<div class="portfolio-media-placeholder" style="background:${gradient};" aria-hidden="true">
           <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
             <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
             <path d="M20 16l14 8-14 8V16z" fill="rgba(255,255,255,0.35)"/>
           </svg>
         </div>`

    return `
      <article class="portfolio-card" data-index="${index}" role="button" tabindex="0"
        aria-label="Open ${title}" title="Open ${title}">
        <div class="portfolio-media">${mediaHtml}</div>
        <div class="portfolio-meta">
          <span>${category}</span>
          <h3>${title}</h3>
        </div>
      </article>`
  }

  // ── Open lightbox ─────────────────────────────────────────────────────────
  function openLightbox(item, index) {
    currentItem = item
    const gradient = portfolioGradients[index % portfolioGradients.length]
    const title = item.title || `Campaign ${index + 1}`
    const category = item.category || 'Campaign'

    const mediaHtml = item.embedUrl
      ? `<iframe
           src="${item.embedUrl}"
           title="${title}"
           class="portfolio-video"
           allow="autoplay; encrypted-media; picture-in-picture"
           allowfullscreen
         ></iframe>`
      : `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${gradient};gap:16px;">
           <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
             <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
             <path d="M26 20l20 12-20 12V20z" fill="rgba(255,255,255,0.4)"/>
           </svg>
           <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;margin:0;">Video coming soon</p>
         </div>`

    const backdrop = document.createElement('div')
    backdrop.className = 'lightbox-backdrop'
    backdrop.id = 'lightbox-backdrop'
    backdrop.setAttribute('role', 'dialog')
    backdrop.setAttribute('aria-modal', 'true')
    backdrop.setAttribute('aria-label', title)

    backdrop.innerHTML = `
      <div class="lightbox-panel" id="lightbox-panel">
        <button type="button" class="lightbox-close" id="lightbox-close" aria-label="Close portfolio item" title="Close">&#10005;</button>
        <div class="lightbox-media">${mediaHtml}</div>
        <div class="lightbox-meta">
          <span>${category}</span>
          <h3>${title}</h3>
        </div>
      </div>`

    document.body.appendChild(backdrop)
    document.body.style.overflow = 'hidden'

    // Trap focus on close button
    const closeBtn = document.getElementById('lightbox-close')
    if (closeBtn) closeBtn.focus()

    // Close on backdrop click
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeLightbox()
    })

    // Close button
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox)
  }

  // ── Close lightbox ────────────────────────────────────────────────────────
  function closeLightbox() {
    const backdrop = document.getElementById('lightbox-backdrop')
    if (backdrop) backdrop.remove()
    document.body.style.overflow = ''
    currentItem = null
  }

  // ── Keyboard handler ──────────────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentItem) closeLightbox()
  })

  // ── Render portfolio grid ─────────────────────────────────────────────────
  function renderPortfolio() {
    const mount = document.getElementById('portfolio-grid-mount')
    if (!mount) return

    mount.innerHTML = portfolioItems.map((item, i) => buildCard(item, i)).join('')

    // Attach click + keyboard events to cards
    mount.querySelectorAll('.portfolio-card').forEach((card) => {
      const index = parseInt(card.dataset.index, 10)
      const item = portfolioItems[index]

      card.addEventListener('click', () => openLightbox(item, index))
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openLightbox(item, index)
        }
      })
    })
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', renderPortfolio)
})()
