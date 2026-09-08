/**
 * 🛠 Utility Helper Functions
 * Reusable functions for common tasks across the application
 */

/**
 * Format a date string to readable format
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @returns {string} Formatted date (e.g., "29 Aug 2026")
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

/**
 * Convert Google Drive folder URL to embed-friendly format
 * @param {string} driveUrl - Google Drive URL
 * @returns {string} Embeddable URL or original if conversion not possible
 */
export const convertDriveUrlToEmbedUrl = (driveUrl) => {
  if (!driveUrl) return ''
  // Extract file ID from various Google Drive URL formats
  const fileIdMatch = driveUrl.match(/\/d\/([\w-]+)/)
  if (fileIdMatch) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
  }
  return driveUrl
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return `${text.substring(0, maxLength)}...`
}

/**
 * Generate responsive image srcset for optimization
 * @param {string} imagePath - Path to image
 * @returns {object} Responsive image data
 */
export const getResponsiveImage = (imagePath) => {
  return {
    src: imagePath,
    alt: 'Mbongwa Creatives media',
    loading: 'lazy',
  }
}

/**
 * Check if device is mobile
 * @returns {boolean} True if device width is less than 768px
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Scroll to element smoothly
 * @param {string} elementId - ID of element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<void>}
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Copied to clipboard:', text)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

/**
 * Send email using mailto link
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @param {string} body - Email body
 * @returns {string} mailto link
 */
export const generateMailtoLink = (email, subject = '', body = '') => {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
}

export default {
  formatDate,
  convertDriveUrlToEmbedUrl,
  truncateText,
  getResponsiveImage,
  isMobile,
  scrollToElement,
  copyToClipboard,
  generateMailtoLink,
}
