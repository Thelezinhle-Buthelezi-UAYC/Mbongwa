/**
 * Mbongwa Creatives — About Page
 * Renders values, team profiles, and capabilities.
 * Depends on: data.js
 */

(function () {
  'use strict'

  // ── Render Values / Pillars ──────────────────────────────────────────────
  function renderValues() {
    const mount = document.getElementById('values-mount')
    if (!mount) return

    mount.innerHTML = values
      .map(
        (pillar) => `
        <article class="pillar-card">
          <span class="step-label">${pillar.title}</span>
          <p>${pillar.copy}</p>
        </article>`
      )
      .join('')
  }

  // ── Render Team Profiles ─────────────────────────────────────────────────
  function renderTeam() {
    const mount = document.getElementById('team-mount')
    if (!mount) return

    mount.innerHTML = teamProfiles
      .map(
        (profile) => `
        <article class="team-card">
          <span class="team-badge">${profile.role}</span>
          <h3>${profile.name}</h3>
          <p class="team-summary">${profile.summary}</p>
          <p class="team-quote">&ldquo;${profile.quote}&rdquo;</p>
        </article>`
      )
      .join('')
  }

  // ── Render Capabilities List ─────────────────────────────────────────────
  function renderCapabilities() {
    const mount = document.getElementById('capabilities-mount')
    if (!mount) return

    mount.innerHTML = capabilityList
      .map((item) => `<li>${item}</li>`)
      .join('')
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    renderValues()
    renderTeam()
    renderCapabilities()
  })
})()
