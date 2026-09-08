/**
 * Mbongwa Creatives — Ad Campaigns Database
 *
 * This file auto-loads every local mp4 in ../assets/videos.
 * Add a video file there and it will appear in the gallery automatically.
 */

import cityThumb from '../assets/images/city-of-africa-thumb.png'
import homeThumb from '../assets/images/home-tech-box-thumb.png'
import motionThumb from '../assets/images/motion-graphics-thumb.png'

const videoModules = import.meta.glob('../assets/videos/*.mp4', {
  eager: true,
  import: 'default',
})

const today = new Date().toISOString().split('T')[0]

const metadataOverrides = {
  'city-of-africa': {
    title: 'City of Africa Brand Campaign',
    description: 'Stunning visual narrative showcasing African heritage and culture.',
    client: 'City of Africa',
    category: 'Brand Storytelling',
    thumbnail: cityThumb,
    featured: false,
  },
  'home-tech-box': {
    title: 'Home & Tech Box Product Launch',
    description: 'Dynamic product showcase with motion graphics and innovation.',
    client: 'Home & Tech Box',
    category: 'Product Launch',
    thumbnail: homeThumb,
    featured: false,
  },
  'motion-graphics': {
    title: 'Motion Graphics Reel 2026',
    description: 'Curated collection of motion design and animation work.',
    client: 'Mbongwa Creatives',
    category: 'Motion Graphics',
    thumbnail: motionThumb,
    featured: false,
  },
  '8 use also on landing page': {
    title: 'Featured Landing Campaign',
    description: 'Featured campaign selected for the landing page hero placement.',
    client: 'Mbongwa Creatives',
    category: 'Featured Campaign',
    thumbnail: motionThumb,
    featured: false,
  },
  '40': {
    title: 'Premium Brand Film Showcase',
    description: 'A high-impact showcase selected for the homepage to attract attention quickly and keep viewers engaged.',
    client: 'Mbongwa Creatives',
    category: 'Featured Campaign',
    thumbnail: motionThumb,
    featured: false,
  },
  '38': {
    featured: true,
  },
}

const defaultMeta = {
  description: '',
  client: '',
  category: '',
  thumbnail: motionThumb,
  featured: false,
}

const toBaseName = (filePath) => filePath.split('/').pop().replace('.mp4', '')

const sortByName = ([pathA], [pathB]) => {
  const nameA = toBaseName(pathA)
  const nameB = toBaseName(pathB)
  return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' })
}

export const adsData = Object.entries(videoModules)
  .sort(sortByName)
  .map(([filePath, fileUrl], index) => {
    const baseName = toBaseName(filePath)
    const override = metadataOverrides[baseName] || {}

    return {
      id: index + 1,
      title: override.title || '',
      description: override.description || defaultMeta.description,
      videoUrl: fileUrl,
      thumbnail: override.thumbnail || defaultMeta.thumbnail,
      client: override.client || defaultMeta.client,
      category: override.category || defaultMeta.category,
      dateAdded: today,
      featured: Boolean(override.featured),
    }
  })

/**
 * Helper function to get featured ads
 */
export const getFeaturedAds = () => adsData.filter(ad => ad.featured)

/**
 * Helper function to get ads by category
 */
export const getAdsByCategory = (category) => adsData.filter(ad => ad.category === category)

/**
 * Helper function to get ad by id
 */
export const getAdById = (id) => adsData.find(ad => ad.id === id)

export default adsData
