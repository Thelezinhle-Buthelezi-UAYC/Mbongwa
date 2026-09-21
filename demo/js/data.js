/**
 * Mbongwa Creatives — Demo Data
 * All site data consolidated from src/data/ into one vanilla JS file.
 * No imports/exports needed — loaded via <script> tag before page scripts.
 */

// ── Navigation ──────────────────────────────────────────────────────────────
const navItems = [
  { name: 'Home',      path: 'index.html' },
  { name: 'About',     path: 'about.html' },
  { name: 'Portfolio', path: 'portfolio.html' },
]

// ── Contact Details ──────────────────────────────────────────────────────────
const contactDetails = [
  { label: 'Teboho Mahlangu',  href: 'tel:+27671406632',                  value: '+27 67 140 6632' },
  { label: 'Lingelihle Ndesi', href: 'tel:+27684957045',                  value: '+27 68 495 7045' },
  { label: 'Email',            href: 'mailto:mbongwacreatives@gmail.com', value: 'mbongwacreatives@gmail.com' },
]

// ── Social Links ─────────────────────────────────────────────────────────────
const footerSocialLinks = [
  { label: 'Facebook',   url: 'https://web.facebook.com/people/Mbongwa-Creatives/61592170432178/' },
  { label: 'Instagram',  url: 'https://www.instagram.com/mbongwacreatives/' },
  { label: 'Twitter / X', url: 'https://x.com/MbongwaCreate' },
  { label: 'LinkedIn',   url: 'https://www.linkedin.com/company/mbongwa-creatives/' },
  { label: 'TikTok',     url: 'https://www.tiktok.com/@mbongwacreatives/' },
]

// ── Site Copy ────────────────────────────────────────────────────────────────
const siteCopy = {
  home: {
    eyebrow: 'Creative Advertising Agency',
    headline: ['creating experiences.', 'building brands.', 'inspiring growth.'],
    subheadline: 'We create powerful advertising, cinematic content, and brand campaigns that connect with audiences, elevate brands, and drive meaningful growth.',
  },
  about: {
    eyebrow: 'About',
    heading: 'About Mbongwa Creatives',
    lead: 'Mbongwa Creatives is a creative advertising studio focused on helping brands stand out with clarity, craft, and confidence.',
  },
  portfolio: {
    eyebrow: 'Portfolio',
    heading: 'Portfolio',
    lead: 'A curated look at our recent work across commercial production, product storytelling, branding moments, and editorial motion.',
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's Create Something Memorable",
    subheadline: 'Have a project in mind or just want to say hello? I would love to hear from you.',
  },
}

// ── Services (featured panels on home + about) ───────────────────────────────
const serviceRows = [
  {
    title: 'Motion Graphics & Animation',
    description: 'We produce engaging motion graphics and animated content that bring brands, products, and campaigns to life. Our animations simplify complex ideas while creating visually impactful experiences across digital and broadcast platforms.',
    layout: 'image-left',
  },
  {
    title: 'Brand Activations & Experiential Marketing',
    description: 'We design immersive brand experiences that encourage meaningful audience interaction and lasting engagement. Every activation is created to strengthen brand awareness and turn consumers into loyal advocates.',
    layout: 'image-right',
  },
  {
    title: 'Public Relations Support',
    description: 'We produce creative content and campaign assets that strengthen brand reputation and support effective public communication. Our work helps organizations communicate consistently across media, digital, and stakeholder channels.',
    layout: 'image-left',
  },
  {
    title: 'Corporate & Event Productions',
    description: 'We capture corporate events, conferences, launches, and special occasions with professional video and photography. Our productions extend the impact of every event through high-quality visual content.',
    layout: 'image-right',
  },
  {
    title: 'Creative Direction & Brand Storytelling',
    description: 'We provide creative direction that ensures every campaign reflects a clear and consistent brand identity. Through purposeful storytelling, we create meaningful brand experiences that connect with audiences.',
    layout: 'image-left',
  },
  {
    title: 'Video Advert Curation',
    description: 'We create compelling television and digital advertisements that capture attention and inspire action. From concept to final production, every commercial is strategically crafted to help brands connect with their audience.',
    layout: 'image-right',
  },
  {
    title: 'Product Launch Campaigns',
    description: 'We develop creative product launch campaigns that build anticipation and generate excitement around new products and services. Through strategic storytelling and high-quality visuals, we help brands make memorable first impressions.',
    layout: 'image-left',
  },
  {
    title: 'Advertising Campaigns',
    description: 'We create integrated advertising campaigns that combine strategy, creativity, and storytelling across multiple platforms. Our goal is to deliver campaigns that build brand recognition and drive real business growth.',
    layout: 'image-right',
  },
]

// ── Capabilities List ─────────────────────────────────────────────────────────
const capabilityList = [
  'Commercial production',
  'Creative direction',
  'Motion design and animation',
  'Brand campaigns',
  'Product launches',
  'Social storytelling',
]

// ── Narrative Items ──────────────────────────────────────────────────────────
const narrativeItems = [
  {
    title: 'Strategy that sharpens the message',
    copy: 'We build campaigns around real audience insight, positioning, and attention—so every creative choice creates meaning, not noise.',
  },
  {
    title: 'Production with editorial taste',
    copy: 'From concept to final frame, we craft polished visual stories that feel premium, contemporary, and unmistakably brand-led.',
  },
  {
    title: 'Launches designed to move people',
    copy: 'Whether it is a product reveal or a full-funnel campaign, we design the experience to generate recall, trust, and action.',
  },
]

// ── Framework Steps ──────────────────────────────────────────────────────────
const frameworkSteps = [
  {
    step: 1,
    name: 'Discover & Define',
    description: "We uncover your brand's purpose, audience, and objectives while defining a clear positioning, messaging, and visual direction that forms the foundation of your brand.",
  },
  {
    step: 2,
    name: 'Design & Develop',
    description: 'We develop compelling campaigns, visual content, and creative assets that bring your brand to life and connect with your audience.',
  },
  {
    step: 3,
    name: 'Deliver & Deploy',
    description: 'We deliver polished, campaign-ready creative assets optimized for television, digital, social media, and events; ready for your team or media partners to publish.',
  },
]

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonialItems = [
  {
    name: 'Jabu Selby',
    company: 'Founder of City of Africa',
    quote: "Mbongwa Creatives brought City of Africa's vision to life with a video that was both visually stunning and deeply compelling. Their creativity, professionalism, and attention to detail exceeded our expectations — a true testament to their craft.",
  },
  {
    name: 'Fika Mchunu',
    company: 'CEO of Home & Tech Box',
    quote: "We've been working with Mbongwa Creatives for a while now. They take whatever we brief them on and turn it into designs that are clean, creative and perfectly on-brand. Very responsive, they meet deadlines and their attention to detail is incredible.",
  },
  {
    name: 'Zethe Zimela',
    company: 'Social Media Strategist, @iSupport Creative Business',
    quote: "Teboho is a genuinely talented creative and strategist, with a sharp eye for how different parts of a campaign or brand come together to serve a bigger vision. He brings both insight and execution to the table, and takes feedback with real maturity and openness.",
  },
]

// ── Team Profiles ────────────────────────────────────────────────────────────
const teamProfiles = [
  {
    name: 'Lingelihle Ndesi',
    role: 'Creative Strategist',
    summary: 'Lingelihle brings brand thinking, campaign direction, and sharp audience insight into every creative decision.',
    quote: 'Strategy should make the work feel clear, confident, and unmistakably human.',
  },
  {
    name: 'Teboho Mahlangu',
    role: 'Creative Director',
    summary: "Teboho leads the visual language, campaign storytelling, and production direction behind the studio's most memorable work.",
    quote: 'The strongest creative work is built with clarity, craft, and intention from the first idea to the final frame.',
  },
]

// ── Values ───────────────────────────────────────────────────────────────────
const values = [
  { title: 'Purpose', copy: 'To help brands connect with the people who matter most through meaningful, memorable creative.' },
  { title: 'Vision',  copy: 'To be the creative partner of choice for ambitious businesses seeking clarity, identity, and traction.' },
  { title: 'Mission', copy: 'To craft strategy-led campaigns and visual storytelling that convert attention into trust and action.' },
  { title: 'Promise', copy: 'To deliver premium work with thoughtful execution, strong communication, and lasting brand value.' },
]

// ── Portfolio Demo Items ──────────────────────────────────────────────────────
// Demo items since real video files are in the Vite asset pipeline
const portfolioItems = [
  { id: 1,  title: 'Home & Tech Box Product Launch',    category: 'Product Launch',    aspectRatio: 'portrait',   videoUrl: null, embedUrl: null },
  { id: 2,  title: 'Motion Graphics Reel 2026',         category: 'Motion Graphics',   aspectRatio: 'landscape',  videoUrl: null, embedUrl: null },
  { id: 3,  title: 'City of Africa Brand Film',         category: 'Brand Film',        aspectRatio: 'square',     videoUrl: null, embedUrl: null },
  { id: 4,  title: 'iSupport Campaign Visuals',         category: 'Brand Campaign',    aspectRatio: 'portrait',   videoUrl: null, embedUrl: null },
  { id: 5,  title: 'Corporate Event Highlights',        category: 'Event Production',  aspectRatio: 'landscape',  videoUrl: null, embedUrl: null },
  { id: 6,  title: 'Product Photography Series',        category: 'Photography',       aspectRatio: 'square',     videoUrl: null, embedUrl: null },
  { id: 7,  title: 'Social Media Reel Package',         category: 'Social Content',    aspectRatio: 'portrait',   videoUrl: null, embedUrl: null },
  { id: 8,  title: 'Brand Activation Recap',            category: 'Experiential',      aspectRatio: 'landscape',  videoUrl: null, embedUrl: null },
  { id: 9,  title: 'Creative Direction Showcase',       category: 'Creative Direction', aspectRatio: 'square',    videoUrl: null, embedUrl: null },
  { id: 10, title: 'TV Commercial — 30 Second Spot',    category: 'TV Commercial',     aspectRatio: 'portrait',   videoUrl: null, embedUrl: null },
  { id: 11, title: 'Digital Campaign — Platform Series', category: 'Digital Campaign', aspectRatio: 'landscape',  videoUrl: null, embedUrl: null },
  { id: 12, title: 'Product Launch Teaser',             category: 'Product Launch',    aspectRatio: 'square',     videoUrl: null, embedUrl: null },
  { id: 13, title: 'End-of-Year Brand Wrap',            category: 'Brand Film',        aspectRatio: 'portrait',   videoUrl: null, embedUrl: null },
]

// Gradient colours for portfolio card placeholders
const portfolioGradients = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
  'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #1d2671 0%, #c33764 100%)',
  'linear-gradient(135deg, #232526 0%, #414345 100%)',
  'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
  'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #533483 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)',
  'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  'linear-gradient(135deg, #16222a 0%, #3a6073 100%)',
]
