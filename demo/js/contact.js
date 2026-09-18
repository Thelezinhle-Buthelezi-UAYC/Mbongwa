/**
 * Mbongwa Creatives — Contact Page
 * Handles background video playback toggle.
 * Depends on: data.js
 */

(function () {
  'use strict'

  function initContactVideo() {
    const video = document.getElementById('contact-video')
    const toggle = document.getElementById('contact-video-toggle')
    if (!video || !toggle) return

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePlayback = () => {
      if (mediaQuery.matches) {
        video.pause()
        toggle.textContent = 'Play Video'
        toggle.setAttribute('aria-label', 'Play background video')
        return
      }
      video.play().catch(() => {})
      toggle.textContent = 'Pause Video'
      toggle.setAttribute('aria-label', 'Pause background video')
    }

    updatePlayback()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePlayback)
    }

    toggle.addEventListener('click', () => {
      if (video.paused) {
        video.play().catch(() => {})
        toggle.textContent = 'Pause Video'
        toggle.setAttribute('aria-label', 'Pause background video')
      } else {
        video.pause()
        toggle.textContent = 'Play Video'
        toggle.setAttribute('aria-label', 'Play background video')
      }
    })
  }

  // ── Render contact details list ───────────────────────────────────────────
  function renderContactList() {
    const mount = document.getElementById('contact-list-mount')
    if (!mount) return

    mount.innerHTML = contactDetails
      .map((item) => {
        const labelHtml =
          item.label !== 'Email' ? `<span>${item.label}: </span>` : ''
        return `<p>${labelHtml}<a href="${item.href}">${item.value}</a></p>`
      })
      .join('')
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    renderContactList()
    initContactVideo()
  })
})()
