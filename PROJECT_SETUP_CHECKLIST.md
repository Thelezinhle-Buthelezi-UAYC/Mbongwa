# 🎨 Mbongwa Creatives — Project Setup Checklist
**Date**: 26 August 2026  
**Client**: Mbongwa Creatives  
**Project Lead**: Thelezinhle Buthelezi  
**Status**: Frontend Development In Progress

---

## 📋 PROJECT OVERVIEW
Custom website rebuild for Mbongwa Creatives with emphasis on:
- **Animation & Movement**: Professional transitions and dynamic elements
- **Easy Ad Management**: Simple workflow to add new campaigns/ads
- **Brand Colors**: Lighter version of client's palette
- **Emoji Integration**: Throughout UI/copy for brand personality

---

## 🎨 DESIGN & BRANDING

### Color Palette (Lighter Version)
**Status**: ⏳ AWAITING CLIENT CONFIRMATION
- [ ] Primary Brand Color: `#______` (lighter shade)
- [ ] Secondary Color: `#______`
- [ ] Accent Color: `#______`
- [ ] Neutral/Text: `#______`
- [ ] Background: `#______`

**Action**: Confirm lighter version from client's palette image  
**File Location**: `src/constants/colorPalette.js`

### Brand Assets Received
- [x] Business Logo
- [x] Partner Images (multiple)
- [x] Contact Email: `info@mbongwacreatives.co.za`
- [x] Social Media Links:
  - Instagram: https://www.instagram.com/mbongwacreatives/
  - X: https://x.com/MbongwaCreate
  - LinkedIn: https://www.linkedin.com/company/mbongwa-creatives/
  - TikTok: https://www.tiktok.com/@mbongwacreatives

### Animation Guidelines
**Client Preference**: Movement throughout site (professional, not excessive)

- [ ] **Landing Page**: Hero video with fade-in animation
- [ ] **Gallery Page**: Smooth image/video transitions, hover effects
- [ ] **Navigation**: Smooth page transitions between routes
- [ ] **Buttons**: Interactive hover states with subtle motion
- [ ] **Scroll Effects**: Light parallax or fade-in on scroll (optional)
- [ ] **Loading States**: Brief spinner for Google Drive video embeds

**Tool**: Framer Motion (already installed ✅)

---

## 📁 FOLDER STRUCTURE

### Current Structure Status
```
✅ src/pages/ (5 pages - waiting for implementation)
✅ src/components/ (Header, Footer - partial)
⏳ src/constants/ (NOT YET CREATED)
⏳ src/utils/ (NOT YET CREATED)
⏳ src/assets/images/ (NOT YET CREATED)
⏳ src/assets/logos/ (NOT YET CREATED)
⏳ src/assets/partner-images/ (NOT YET CREATED)
```

### Folders to Create
- [ ] `src/constants/` - Brand config, colors, constants
  - [ ] `colorPalette.js` - All brand colors
  - [ ] `config.js` - Contact info, API endpoints, links
  - [ ] `animations.js` - Framer Motion presets
  
- [ ] `src/utils/` - Helper functions
  - [ ] `helpers.js` - Utility functions

- [ ] `src/assets/images/` - Stock/client images
- [ ] `src/assets/logos/` - Logo files
- [ ] `src/assets/partner-images/` - Partner company images/logos

- [ ] `.env.example` - Template for environment variables
- [ ] `CODE_OF_CONDUCT.md` - How to add new ads (client-facing)

---

## 📄 PAGE STRUCTURE & CONTENT

### Reference Website
**URL**: https://mbongwacreatives.wixsite.com/site  
**Purpose**: Content & flow reference ONLY (not a template to copy)

### Pages to Build

#### 1. **Landing Page** 🏠
- [ ] Hero Section: Featured ad video (front and center)
- [ ] Call-to-Action: Link to Gallery or Services
- [ ] Brief intro text with emojis
- [ ] Animation: Fade-in on load, smooth scroll
- **Video Source**: Google Drive folder
- **Status**: ⏳ Needs implementation

#### 2. **Gallery Page** 🎥
- [ ] Grid/showcase layout of all ads/creative work
- [ ] Video thumbnails + play button overlay
- [ ] Filter/sort options (optional but useful)
- [ ] Animation: Hover effects on thumbnails, smooth transitions
- [ ] Responsive: Mobile (1 col), Tablet (2 cols), Desktop (3+ cols)
- **Data Source**: `adsData.js` (easy to update)
- **Status**: ⏳ Needs implementation

#### 3. **About Page** 📖
- [ ] Company story/mission statement
- [ ] Team/partner section with images
- [ ] Emojis throughout copy
- [ ] Animation: Staggered fade-in for content blocks
- **Content Source**: Reference website + client refinement
- **Status**: ⏳ Needs implementation

#### 4. **Services Page** 💼
- [ ] Service offerings/packages
- [ ] Pricing (if available)
- [ ] Process/workflow explanation
- [ ] Call-to-action to Contact page
- **Content Source**: Reference website
- **Status**: ⏳ Needs implementation

#### 5. **Contact Page** 📧
- [ ] Contact form (email, name, message)
- [ ] Contact email: `info@mbongwacreatives.co.za`
- [ ] Social media links embedded
- [ ] Business location/hours (if applicable)
- **Functionality**: Form submission setup
- **Status**: ⏳ Needs implementation

---

## 🎬 MEDIA MANAGEMENT

### Google Drive Assets
**Link**: https://drive.google.com/drive/folders/1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J?usp=drive_link

### Media Guidelines
- [x] Stock media: **ALLOWED** ✅
- [x] AI-generated media: **NOT ALLOWED** ❌
- [x] All imagery/video: **Stock or Client-Supplied Only**

### Video Embedding Strategy
**Current Plan**:
- [ ] Embed via Google Drive shareable links
- [ ] Fallback: YouTube/Vimeo embedding if Drive links don't work
- [ ] Video player: HTML5 + custom controls OR YouTube embed
- [ ] Lazy loading for gallery videos

---

## 🔄 KEY FEATURE: Easy Ad Management

### How to Add New Ads
**User Story**: Client should be able to add new ad campaigns quickly

#### Current Implementation
`src/data/adsData.js` - Simple array of ad objects

#### Ad Object Structure
```javascript
{
  id: number,           // Unique identifier
  title: string,        // Ad campaign name
  description: string,  // Short description with emojis
  videoUrl: string,     // Google Drive or embedding link
  thumbnail: string,    // Image preview (auto-generated or manual)
  dateAdded: string,    // ISO date "YYYY-MM-DD"
}
```

#### Step-by-Step: How to Add a New Ad
1. [ ] Open `src/data/adsData.js`
2. [ ] Copy existing ad object
3. [ ] Update: id, title, description, videoUrl, thumbnail
4. [ ] Save file
5. [ ] Gallery auto-updates! (React re-renders)

#### Client Handoff Documentation
- [ ] Create `HOW_TO_ADD_ADS.md` - Visual guide for client
- [ ] Include: Screenshots, exact file path, example code block
- [ ] Video tutorial (optional): Screen recording of 60 seconds

---

## 🛠 TECHNICAL SETUP

### Environment Variables
**File**: `.env` (create from `.env.example`)
- [ ] `VITE_CONTACT_EMAIL=info@mbongwacreatives.co.za`
- [ ] `VITE_GOOGLE_DRIVE_FOLDER_ID=1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J`
- [ ] `VITE_SITE_TITLE=Mbongwa Creatives`

### Routing Setup
**Router**: React Router v7 (installed ✅)
- [ ] `App.jsx`: Replace boilerplate with BrowserRouter
- [ ] Routes: `/`, `/gallery`, `/about`, `/services`, `/contact`
- [ ] Not Found: 404 page (optional)
- [ ] Layout: Header + Page Content + Footer persistent

### Styling Architecture
**Current**: CSS variables in `index.css`
- [ ] Create `src/styles/` folder
- [ ] Organize: `globals.css`, `layout.css`, `components.css`
- [ ] All brand colors from `colorPalette.js`
- [ ] Mobile-first responsive approach

### Performance Checklist
- [ ] Image optimization: Lazy loading for gallery
- [ ] Code splitting: Route-based splitting (React.lazy)
- [ ] Build: `npm run build` produces production bundle
- [ ] Preview: `npm run preview` tests production build

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
- [ ] **Mobile**: 375px - 640px
- [ ] **Tablet**: 641px - 1024px
- [ ] **Desktop**: 1025px+

### Mobile-First Approach
- [ ] Base styles for mobile
- [ ] `@media (min-width: 768px)` for tablet
- [ ] `@media (min-width: 1024px)` for desktop

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Setup & Config ⚙️
- [ ] Create all folder structure
- [ ] Define color palette + config files
- [ ] Set up routing in App.jsx
- [ ] Connect all pages to router
- [ ] Test navigation works (all links clickable)

### Phase 2: Core Pages 📄
- [ ] **Landing Page**: Hero + featured video
- [ ] **Gallery Page**: Grid + video embeds + data-driven
- [ ] **About Page**: Content + team section
- [ ] **Services Page**: Service listings
- [ ] **Contact Page**: Form + links

### Phase 3: Animations & Polish ✨
- [ ] Page transitions (Framer Motion)
- [ ] Button hover effects
- [ ] Scroll animations (gallery, content blocks)
- [ ] Loading states for videos

### Phase 4: Testing & Handoff 🚀
- [ ] Test all pages on mobile/tablet/desktop
- [ ] Test all social links
- [ ] Create `HOW_TO_ADD_ADS.md` guide
- [ ] Test adding a new ad (dry run)
- [ ] Final review with client

---

## 📚 REFERENCE MATERIALS

### Website Reference
- Existing Site: https://mbongwacreatives.wixsite.com/site
- **Use for**: Content structure, messaging tone, page flow
- **DO NOT**: Copy design or exact layouts

### Social Media (for branding consistency)
- Instagram: https://www.instagram.com/mbongwacreatives/ (most active)
- TikTok: https://www.tiktok.com/@mbongwacreatives
- X: https://x.com/MbongwaCreate
- LinkedIn: https://www.linkedin.com/company/mbongwa-creatives/

### Dependencies
- React 19.2.8 ✅
- React Router DOM 7.18.3 ✅
- Framer Motion 13.1.1 ✅
- Vite 8.2.2 ✅

---

## 📞 STAKEHOLDER INFO

| Role | Name | Email | Phone |
|------|------|-------|-------|
| Client/Point of Contact | Mbongwa Creatives | info@mbongwacreatives.co.za | — |
| Project Manager (UAYC) | Nqobile | — | 084 955 4227 |
| Designer/Developer | Thelezinhle Buthelezi | — | — |

---

## 🎯 SUCCESS CRITERIA

- [x] All pages implemented and routable
- [ ] Navbar & footer visible on all pages
- [ ] Gallery populated from `adsData.js`
- [ ] Brand colors applied consistently
- [ ] Animations smooth and professional (not excessive)
- [ ] Mobile responsive across all breakpoints
- [ ] Social links functional
- [ ] Contact email configured
- [ ] Client can add new ads without developer help
- [ ] No AI-generated media used
- [ ] 100% custom design (not based on reference template)

---

## 📝 NOTES

- **Emojis**: Use throughout for personality (matches brand style)
- **Brand Control**: Thelezinhle has full creative control within guidelines
- **Stock Media**: Use reputable sources (Unsplash, Pexels, etc.) where needed
- **Animation Budget**: Keep it smooth; avoid animation fatigue
- **Future-Proof**: adsData.js structure allows easy import from CMS later

---

**Last Updated**: 29 August 2026  
**Next Step**: Confirm color palette, then begin Phase 1 setup ⚡
