/**
 * Mbongwa Creatives — Site Configuration
 * Centralized config for contact info, links, services, and constants
 * Reference: https://mbongwacreatives.wixsite.com/site
 */

export const config = {
  // Site Information
  site: {
    title: 'Mbongwa Creatives',
    tagline: 'Creating Experiences. Building Brands. Inspiring Growth.',
    description: 'Creative advertising agency specializing in commercial production, motion graphics, product launches, and integrated campaigns.',
    year: new Date().getFullYear(),
  },

  // Contact Information
  contact: {
    email: 'info@mbongwacreatives.co.za',
    phone: '+27 67 140 6632', // From website
    phone2: '+27 68 495 7045', // From website
    location: 'South Africa',
  },

  // Google Drive Folder (All Assets)
  googleDrive: {
    folderId: '1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J',
    folderUrl: 'https://drive.google.com/drive/folders/1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J?usp=drive_link',
    description: 'Client assets: videos, images, campaigns, and related media',
  },

  // Core Services
  services: [
    {
      id: 1,
      name: 'Commercial Video Production',
      description: 'High-quality advert production for television, digital, and social platforms from concept to final delivery.',
      icon: 'video',
    },
    {
      id: 2,
      name: 'Motion Graphics and Animation',
      description: 'Purpose-driven animation and motion design that simplifies ideas and increases campaign engagement.',
      icon: 'animation',
    },
    {
      id: 3,
      name: 'Product Launch Campaigns',
      description: 'Strategic launch campaigns that position products clearly and create measurable market excitement.',
      icon: 'rocket',
    },
    {
      id: 4,
      name: 'Brand Activations',
      description: 'Experiential brand moments designed to connect with audiences and drive real-world participation.',
      icon: 'target',
    },
    {
      id: 5,
      name: 'Corporate Event Production',
      description: 'Professional event filming and post-production for conferences, launches, and executive communications.',
      icon: 'camera',
    },
    {
      id: 6,
      name: 'Creative Direction and Strategy',
      description: 'Creative leadership that aligns storytelling, visual identity, and campaign execution across every touchpoint.',
      icon: 'palette',
    },
  ],

  // Social Media Links
  social: {
    instagram: {
      name: 'Instagram',
      url: 'https://www.instagram.com/mbongwacreatives/',
      priority: 1, // Most active
    },
    tiktok: {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mbongwacreatives',
      priority: 2,
    },
    twitter: {
      name: 'X',
      url: 'https://x.com/MbongwaCreate',
      priority: 3,
    },
    linkedin: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mbongwa-creatives/',
      priority: 4,
    },
  },

  // Navigation Menu
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ],

  // Client Testimonials (from website)
  testimonials: [
    {
      id: 1,
      name: 'Jabu Selby',
      company: 'City of Africa',
      role: 'Founder',
      quote: 'Mbongwa Creatives brought City of Africa\'s vision to life through a video that was visually striking and deeply compelling. Their creativity, professionalism, and attention to detail exceeded our expectations.',
    },
    {
      id: 2,
      name: 'Fika Mchunu',
      company: 'Home & Tech Box',
      role: 'Brand Representative',
      quote: 'We have worked with Mbongwa Creatives over an extended period, and they consistently translate our briefs into clean, creative, and on-brand design work. Their responsiveness, reliability, and attention to detail are exceptional.',
    },
    {
      id: 3,
      name: 'Zethe Zimela',
      company: 'iSupport',
      role: 'Social Media Strategist',
      quote: 'Teboho is a genuinely talented creative strategist with a sharp understanding of how each part of a campaign comes together to deliver impact.',
    },
  ],

  // Creative Process Framework
  framework: [
    {
      step: 1,
      name: 'Discover & Define',
      description: 'Uncover brand purpose, audience, and objectives while defining positioning and visual direction',
    },
    {
      step: 2,
      name: 'Design & Develop',
      description: 'Develop compelling campaigns and creative assets that bring your brand to life',
    },
    {
      step: 3,
      name: 'Deliver & Deploy',
      description: 'Deliver polished assets optimized for all platforms ready for publication',
    },
  ],

  // References
  references: {
    existingWebsite: 'https://mbongwacreatives.wixsite.com/site',
    websiteNote: 'Reference for content and flow only - not a design template',
  },
}

export default config
