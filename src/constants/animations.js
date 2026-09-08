/**
 * ✨ Framer Motion Animation Presets
 * Reusable animation configurations for consistent motion across the site
 */

// Page Transition Animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeInOut' },
}

// Fade In Animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

// Fade In with Delay (useful for staggered animations)
export const fadeInWithDelay = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
})

// Scale Up Animation (for cards/buttons)
export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

// Slide In From Left
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

// Slide In From Right
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

// Stagger Container (for animating children in sequence)
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Stagger Item (child of staggerContainer)
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Hover Effects for Interactive Elements
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
}

// Button Hover
export const buttonHover = {
  whileHover: { scale: 1.02, backgroundColor: 'rgba(170, 59, 255, 0.1)' },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
}

// Card Hover (subtle lift effect)
export const cardHover = {
  whileHover: { y: -5, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)' },
  transition: { duration: 0.3 },
}

// Image Hover (zoom effect)
export const imageHover = {
  whileHover: { scale: 1.08 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

// Bounce Animation (for attention)
export const bounce = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatDelay: 2,
  },
}

export default {
  pageTransition,
  fadeIn,
  fadeInWithDelay,
  scaleUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  hoverScale,
  buttonHover,
  cardHover,
  imageHover,
  bounce,
}
