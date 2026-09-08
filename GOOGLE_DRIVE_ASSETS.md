# 📁 Google Drive Assets — Organization Guide

**Google Drive Folder**: https://drive.google.com/drive/folders/1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J?usp=drive_link

---

## 📊 Asset Organization

All assets provided by Mbongwa Creatives are stored in their Google Drive folder. This guide shows how they're organized and how to use them in the website.

### Expected Folder Structure (from client)

```
📁 Mbongwa Creatives - Assets/
├── 📁 Campaign Videos/
│   ├── City of Africa/
│   │   ├── main-video.mp4
│   │   ├── thumbnail.png
│   │   └── metadata.txt
│   ├── Home & Tech Box/
│   ├── Motion Graphics/
│   ├── Brand Activations/
│   └── Corporate Events/
│
├── 📁 Thumbnails/
│   ├── campaign-1.png
│   ├── campaign-2.png
│   └── ... (preview images for gallery grid)
│
├── 📁 Logos & Branding/
│   ├── logo-main.svg
│   ├── logo-white.svg
│   ├── logo-alternate.svg
│   └── brand-guidelines.pdf
│
├── 📁 Partner Logos/
│   ├── client-1-logo.png
│   ├── client-2-logo.png
│   └── ... (client/partner logos)
│
└── 📁 Stock Images/
    ├── hero-image.jpg
    ├── team-photos/
    └── lifestyle-images/
```

---

## 🎬 How Videos Are Currently Set Up

### In `src/data/adsData.js`

Each campaign entry includes:

```javascript
{
  id: 1,
  title: "Campaign Name 🎬",
  description: "Description with emoji ✨",
  videoUrl: "https://drive.google.com/drive/folders/...",  // Direct to Google Drive
  thumbnail: "/src/assets/images/thumb.png",                // Local copy
  client: "Client Name",
  category: "Category Type",
  dateAdded: "2026-08-15",
  featured: true/false
}
```

---

## 🔗 Converting Google Drive URLs

### For Video Embedding:

**Google Drive Folder Link** (current):
```
https://drive.google.com/drive/folders/1dVhPLN8KqBBYDatg7S0spvKcU7b-ng5J
```

**To Embed Individual Video** (share the file):
1. Right-click video in Google Drive
2. Click "Share"
3. Set to "Anyone with link can view"
4. Get share link: `https://drive.google.com/file/d/FILE_ID/view`
5. Convert to embed format: `https://drive.google.com/file/d/FILE_ID/preview`

---

## 🖼️ Thumbnail Images

### Adding Campaign Thumbnails:

1. **Download from Google Drive**: Each campaign folder should have a thumbnail
2. **Save to**: `src/assets/images/`
3. **Name clearly**: `city-of-africa-thumb.png`, `home-tech-box-thumb.png`, etc.
4. **Reference in adsData.js**: 
   ```javascript
   thumbnail: "/src/assets/images/city-of-africa-thumb.png"
   ```

### Recommended Thumbnail Specs:
- **Format**: PNG or JPG
- **Dimensions**: 1200 x 675px (16:9 aspect ratio)
- **File Size**: < 500 KB
- **Quality**: High resolution, professional looking

---

## 🎨 Logo & Branding Assets

### Logo Files:
**Location to download**: `Logos & Branding/` folder in Google Drive

**Place them in**: `src/assets/logos/`

**Common files needed**:
- `logo-main.svg` — Primary logo (color)
- `logo-white.svg` — White version (for dark backgrounds)
- `logo-mark.svg` — Icon version (just the symbol)

### Using Logo in React:

```jsx
import logo from '@/assets/logos/logo-main.svg'

<img src={logo} alt="Mbongwa Creatives" className="logo" />
```

---

## 👥 Partner/Client Logos

### Location**: `Partner Logos/` folder in Google Drive

### Use Cases**:
1. **Footer Credits**: Show clients worked with
2. **Testimonials Section**: Partner logo + testimonial
3. **Portfolio Section**: Client work showcase

### Place them in**: `src/assets/partner-images/`

---

## 🏞️ Stock & Hero Images

### Location**: `Stock Images/` folder in Google Drive

### Use Cases**:
1. **Landing page hero** — Hero image
2. **About page** — Team photos, atmosphere
3. **General brand imagery** — Professional shots

### Place them in**: `src/assets/images/`

---

## ✅ Current Setup (What We've Done)

- [x] `adsData.js` — 5 campaigns configured with Google Drive links
- [x] `config.js` — Services, testimonials, framework from their website
- [x] `colorPalette.js` — Professional color scheme
- [ ] Thumbnail images — Need to download and save
- [ ] Logo files — Need to download and save
- [ ] Gallery page component — Ready to build
- [ ] Landing page hero — Ready to integrate

---

## 🎯 Next Steps

### Phase 2 Tasks:

1. **Download Assets from Google Drive**
   - [ ] Thumbnails → `src/assets/images/`
   - [ ] Logos → `src/assets/logos/`
   - [ ] Partner logos → `src/assets/partner-images/`
   - [ ] Hero/stock images → `src/assets/images/`

2. **Get Video URLs**
   - [ ] Get shareable links for each video
   - [ ] Convert to embed format
   - [ ] Update `adsData.js` videoUrl fields

3. **Build Pages** (with assets in place)
   - [ ] Landing page (hero + featured video)
   - [ ] Gallery page (grid + thumbnails)
   - [ ] About page (team photos)
   - [ ] Services page (service cards)
   - [ ] Contact page (form)

---

## 📞 Quick Reference

| Asset Type | Storage Location | Local Destination |
|------------|------------------|-------------------|
| Campaign Videos | Google Drive Folder (per category) | Not downloaded (embedded) |
| Thumbnails | Google Drive `Thumbnails/` | `src/assets/images/` |
| Main Logo | Google Drive `Logos & Branding/` | `src/assets/logos/` |
| Partner Logos | Google Drive `Partner Logos/` | `src/assets/partner-images/` |
| Hero/Stock Images | Google Drive `Stock Images/` | `src/assets/images/` |

---

## 💡 Pro Tips

1. **Video Embedding**: Keep full folder link (easier for future) or individual file embeds (better control)
2. **Caching**: Browser caches images. Use `?v=1` to force refresh if needed
3. **Optimization**: Consider compressing images before saving to reduce load time
4. **Backup**: Keep a copy of brand assets locally if possible
5. **Updates**: When client adds new videos, just update `adsData.js` with new URL

---

**Status**: Setup Complete ✅ | Ready to download assets and build pages  
**Last Updated**: 29 August 2026
