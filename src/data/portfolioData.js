import adsData from './adsData'

const portfolioEntries = [
  ['CC.mp4', 'landscape'],
  ['mbongwa.mp4', 'landscape'],
  ['ke ready linkedin.mp4', 'landscape'],
  ['REBOOST.mp4', 'portrait'],
  ['Inks & Mixes.mp4', 'landscape'],
  ['LIYANA-1.mp4', 'square'],
  ['Dunns.mp4', 'square'],
  ['ERA BY ZEE OFFICIAL AD.mp4', 'square'],
  ['lembe store final ad.mp4', 'square'],
  ['TOLOKAZI.mp4', 'portrait'],
  ['FASHION TDC.mp4', 'portrait'],
  ['rugani final official hd.mp4', 'portrait'],
  ['TDC.mp4', 'portrait'],
]

export const portfolioItems = portfolioEntries.map(([title, aspectRatio], index) => ({
  ...adsData[index % adsData.length],
  id: `portfolio-${index + 1}`,
  title,
  aspectRatio,
}))
