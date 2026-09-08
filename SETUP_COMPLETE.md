# 🎨 Mbongwa Creatives — Frontend Setup Guide

## Project Overview
Custom website rebuild for Mbongwa Creatives using React + Vite + Framer Motion.

**Status**: ✅ Phase 1 (Setup & Config) Complete | ⏳ Phase 2 (Pages) Ready to Start

---

## 📦 What's Been Set Up

### ✅ Completed
- [x] Project structure reorganized
- [x] React Router configured with all 5 page routes
- [x] Configuration files created (`colorPalette.js`, `config.js`, `animations.js`)
- [x] Utility functions library (`helpers.js`)
- [x] Asset folders organized
- [x] Client handoff guide created (`HOW_TO_ADD_ADS.md`)
- [x] Environment variables template (`.env.example`)
- [x] `.gitignore` set up
- [x] HTML title and metadata updated

### 📁 Folder Structure
```
src/
├── assets/
│   ├── images/           ← Stock/client images
│   ├── logos/            ← Logo files
│   └── partner-images/   ← Partner company images
├── components/
│   ├── Header.jsx        ✅ (with navigation)
│   └── Footer.jsx        ✅ (with social links)
├── constants/
│   ├── colorPalette.js   ✅ (brand colors)
│   ├── config.js         ✅ (site config)
│   └── animations.js     ✅ (Framer Motion presets)
├── data/
│   └── adsData.js        ✅ (ads management)
├── pages/
│   ├── Landing.jsx       ⏳ (needs implementation)
│   ├── Gallery.jsx       ⏳ (needs implementation)
│   ├── About.jsx         ⏳ (needs implementation)
│   ├── Services.jsx      ⏳ (needs implementation)
│   └── Contact.jsx       ⏳ (needs implementation)
├── utils/
│   └── helpers.js        ✅ (utility functions)
├── App.jsx               ✅ (routing complete)
├── main.jsx              ✅ (entry point)
├── index.css             ⏳ (needs brand styling)
└── App.css               ⏳ (needs layout styling)
```

---

## 🚀 Next Steps (Phase 2: Pages Implementation)

### Phase 2 Order:
1. **Landing Page** — Featured ad video + CTA
2. **Gallery Page** — Grid of ads from `adsData.js`
3. **About Page** — Company story + team
4. **Services Page** — Service offerings
5. **Contact Page** — Form + contact info

### Phase 3 (After Pages):
- Add animations using `src/constants/animations.js`
- Responsive design (mobile-first)
- Test on all devices
- Client handoff demo

---

## 📋 Configuration Files Explained

### `src/constants/colorPalette.js`
Contains all brand colors. Update the hex codes when client confirms lighter shade.

```javascript
import { colors } from './constants/colorPalette'
// Use: colors.primary.main, colors.accent.light, etc.
```

### `src/constants/config.js`
Centralized site configuration: contact info, social links, navigation menu.

```javascript
import { config } from './constants/config'
// Use: config.contact.email, config.social.instagram.url, etc.
```

### `src/constants/animations.js`
Reusable Framer Motion animation presets.

```javascript
import { pageTransition, fadeIn, hoverScale } from './constants/animations'
// Use: <motion.div {...fadeIn}>content</motion.div>
```

### `src/utils/helpers.js`
Utility functions: date formatting, Google Drive URL conversion, text truncation, etc.

---

## 🎬 Data Management: Adding Ads

The `src/data/adsData.js` file is structured for easy client updates.

### Current Ad Structure
```javascript
{
  id: number,           // Unique ID
  title: string,        // Campaign name
  description: string,  // Short description with emojis
  videoUrl: string,     // Google Drive or embed link
  thumbnail: string,    // Image path
  dateAdded: string,    // ISO date "YYYY-MM-DD"
}
```

### Client Guide
→ See `HOW_TO_ADD_ADS.md` for step-by-step instructions (client-ready!)

---

## 🛠 Development Workflow

### Start Development
```bash
npm run dev
```
Runs Vite dev server at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized build in `/dist`

### Preview Production Build
```bash
npm run preview
```
Test production build locally

### Linting
```bash
npm run lint
```
Runs oxlint for code quality

---

## 🎨 Styling Architecture

**Current**: CSS variables in `src/index.css`

**Plan**:
- Use color variables from `colorPalette.js`
- Mobile-first responsive design
- Breakpoints:
  - Mobile: 375px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+

---

## 🔤 Social Media & Contact

All configured in `src/constants/config.js`:
- Email: `info@mbongwacreatives.co.za`
- Instagram: `https://www.instagram.com/mbongwacreatives/`
- X: `https://x.com/MbongwaCreate`
- LinkedIn: `https://www.linkedin.com/company/mbongwa-creatives/`
- TikTok: `https://www.tiktok.com/@mbongwacreatives`
- Google Drive: `https://drive.google.com/drive/folders/1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J`

---

## ⚡ Tech Stack

- **React** 19.2.8 — UI library
- **Vite** 8.2.2 — Build tool & dev server
- **React Router** 7.18.3 — Client-side routing
- **Framer Motion** 13.1.1 — Animations
- **Oxlint** 1.79.0 — Code linting

---

## 📝 Environment Variables

Copy `.env.example` to `.env` and fill in values:

```bash
VITE_CONTACT_EMAIL=info@mbongwacreatives.co.za
VITE_GOOGLE_DRIVE_FOLDER_ID=1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J
VITE_SITE_TITLE=Mbongwa Creatives
VITE_SITE_DESCRIPTION=Creative Agency Building Brands
```

---

## ✅ Quality Checklist

- [x] Routing configured
- [x] All pages created (skeleton)
- [x] Configuration centralized
- [x] Animations library ready
- [x] Utility functions available
- [x] Client guide ready
- [x] Asset folders organized
- [ ] Pages fully implemented
- [ ] Responsive design complete
- [ ] Animation integration complete
- [ ] Client testing & feedback
- [ ] Production deployment

---

## 📚 Reference

- **Existing Website**: https://mbongwacreatives.wixsite.com/site (reference only)
- **Project Brief**: See `PROJECT_SETUP_CHECKLIST.md`
- **Client Instructions**: See `HOW_TO_ADD_ADS.md`

---

## 🎯 Key Design Principles

1. **Custom Build**: Unique design (not copied from reference site)
2. **Motion**: Smooth animations for professional feel
3. **Emoji**: Brand personality throughout copy/UI
4. **Easy Updates**: Client can add ads without developer help
5. **Responsive**: Works on mobile, tablet, desktop
6. **No AI Media**: Only stock + client-supplied imagery

---

**Last Updated**: 29 August 2026  
**Lead**: Thelezinhle Buthelezi  
**Next Focus**: Phase 2 — Implement page content + styling

---

## 🚀 Ready to Build?

All setup complete! Ready to move to Phase 2:
1. Implement Landing page with hero video
2. Implement Gallery with ad grid
3. Continue through remaining pages
4. Add animations & responsiveness

Let's go! 💪
