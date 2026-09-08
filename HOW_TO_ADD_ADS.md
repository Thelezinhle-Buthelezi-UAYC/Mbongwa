# 🎬 How to Add New Campaigns to Mbongwa Creatives Gallery

This guide shows you how to add new ads/campaigns to your website **without touching code**. It's simple and takes 2 minutes!

---

## 📝 Step-by-Step: Adding a New Campaign

### **Step 1: Prepare Your Assets**

You need 2 things:
1. **Thumbnail image** (500x300px or similar) — Save to: `src/assets/images/`
   - Example: `campaign-name-thumb.png`
2. **Video URL** (from Google Drive or local video file)
   - Google Drive: Share link to video file
   - Local: Path to video file in assets folder

---

### **Step 2: Open the Ads Database**

Open this file in any text editor:
```
src/data/adsData.js
```

You'll see a list of campaigns that looks like this:

```javascript
export const adsData = [
  {
    id: 1,
    title: "City of Africa 🏛️ Brand Campaign",
    description: "Stunning visual narrative showcasing African heritage and culture ✨",
    videoUrl: "https://drive.google.com/drive/folders/...",
    thumbnail: "/src/assets/images/city-of-africa-thumb.png",
    client: "City of Africa",
    category: "Brand Storytelling",
    dateAdded: "2026-08-15",
    featured: true
  },
  
  // ... more campaigns ...
]
```

---

### **Step 3: Add Your New Campaign**

Copy and paste this template **before the closing bracket `]`**:

```javascript
  {
    id: 6,  // ⚠️ IMPORTANT: Use the next number (check the last campaign's id)
    title: "Your Campaign Title 🎯",  // Give it a catchy name with emoji
    description: "Brief description of what this campaign is about 🌟",  // 1-2 sentences
    videoUrl: "https://drive.google.com/...",  // Your video URL or local path
    thumbnail: "/src/assets/images/your-campaign-thumb.png",  // Your image file
    client: "Client Name",  // Who is this campaign for?
    category: "Brand Storytelling",  // Choose from: Brand Storytelling, Product Launch, Motion Graphics, Brand Activations, Event Production, Creative Direction
    dateAdded: "2026-09-03",  // Today's date
    featured: false  // Set to true if this should appear on the homepage
  },
```

---

### **Step 4: Fill In Your Details**

Replace the placeholder text with your campaign info:

| Field | What to Put | Example |
|-------|-----------|---------|
| `id` | Next number after last campaign | `6` |
| `title` | Campaign name + emoji | "Nike Launch 🚀" |
| `description` | What the campaign does + emoji | "Dynamic product showcase with motion 🎨" |
| `videoUrl` | Google Drive link OR local file path | `"https://drive.google.com/..."` |
| `thumbnail` | Image file path in assets/images/ | `"/src/assets/images/nike-thumb.png"` |
| `client` | Client company name | "Nike" |
| `category` | Choose one from the list | "Product Launch" |
| `dateAdded` | Date you added it (YYYY-MM-DD) | "2026-09-03" |
| `featured` | Homepage feature? (true/false) | `false` |

---

### **Step 5: Save & Refresh**

1. **Save the file** (Ctrl+S)
2. **Go to your website** (localhost:5173 or your domain)
3. **Refresh the page** (F5)
4. **Check the Gallery page** — Your new campaign should appear! ✨

---

## 📸 Example: Complete New Campaign Entry

Here's a real example you can copy-paste and modify:

```javascript
  {
    id: 6,
    title: "Samsung Z Fold Launch 📱",
    description: "Cutting-edge tech showcase with futuristic motion graphics and immersive storytelling 🚀",
    videoUrl: "https://drive.google.com/file/d/1ABC123XYZ/view",
    thumbnail: "/src/assets/images/samsung-z-fold-thumb.png",
    client: "Samsung South Africa",
    category: "Product Launch",
    dateAdded: "2026-09-03",
    featured: true
  },
```

---

## ❓ Frequently Asked Questions

### **Q: Do I need to know code?**
**A:** No! Just copy-paste and fill in your campaign details. Follow the format exactly.

### **Q: Where do I get the video URL?**
**A:** 
- **Google Drive:** Share the video → Copy share link → Paste here
- **Local video:** Upload to `src/assets/videos/` and use path like `/src/assets/videos/campaign-name.mp4`

### **Q: What's this "featured" thing?**
**A:** Set `featured: true` to make it appear on the homepage hero section. Only 1-2 campaigns should be featured.

### **Q: Can I reorder campaigns?**
**A:** Yes! Change the order in the file. Top campaigns appear first in the gallery.

### **Q: It's not showing up!**
**A:** 
1. Check the **thumbnail file exists** at the path you specified
2. Make sure the **video URL is correct**
3. **Refresh** your browser (F5 or Ctrl+Shift+R)
4. Check browser console for errors (F12)

### **Q: Can I delete a campaign?**
**A:** Yes! Delete the entire `{ ... }` block for that campaign (including the comma).

---

## 🎨 Campaign Categories (Use These Exact Names)

- `Brand Storytelling`
- `Product Launch`
- `Motion Graphics`
- `Brand Activations`
- `Event Production`
- `Creative Direction`

---

## 💾 What File to Edit

**File path:** `src/data/adsData.js`

**How to find it:**
1. Open your project folder
2. Navigate to: `src/` → `data/` → `adsData.js`
3. Right-click → Open with text editor
4. Add your campaign following steps above
5. Save (Ctrl+S)

---

## ✅ Checklist Before Adding New Campaign

- [ ] Thumbnail image saved to `src/assets/images/` with good filename
- [ ] Video URL is correct and accessible
- [ ] Campaign id is unique (doesn't match any existing id)
- [ ] Title has emoji
- [ ] Description has emoji
- [ ] Category matches one of the 6 options
- [ ] Date is in YYYY-MM-DD format
- [ ] Syntax is correct (no missing commas or brackets)
- [ ] File saved
- [ ] Browser refreshed

---

## 🚀 Quick Reference

**Add new campaign = Edit `src/data/adsData.js` + Copy this template:**

```javascript
  {
    id: X,
    title: "Title 🎯",
    description: "Description 🌟",
    videoUrl: "URL",
    thumbnail: "/src/assets/images/thumb.png",
    client: "Client Name",
    category: "Category",
    dateAdded: "YYYY-MM-DD",
    featured: false
  },
```

That's it! Save, refresh, done. ✨

---

**Questions?** Check the FAQ above or review the existing campaigns in `adsData.js` for more examples!
| `videoUrl` | Google Drive video link | `"https://drive.google.com/file/d/..."` |
| `thumbnail` | Preview image path | `"/src/assets/hero.png"` |
| `dateAdded` | Today's date | `"2026-08-29"` |

### Example: Your First New Ad

**Before:**
```javascript
export const adsData = [
  {
    id: 1,
    title: "Sample Ad 1",
    description: "This is a sample ad description",
    videoUrl: "https://drive.google.com/your-video-link",
    thumbnail: "/src/assets/hero.png",
    dateAdded: "2026-08-29"
  },
]
```

**After (New Ad Added):**
```javascript
export const adsData = [
  {
    id: 1,
    title: "Sample Ad 1",
    description: "This is a sample ad description",
    videoUrl: "https://drive.google.com/your-video-link",
    thumbnail: "/src/assets/hero.png",
    dateAdded: "2026-08-29"
  },
  {
    id: 2,
    title: "Beautiful Sunset Campaign",
    description: "Capturing golden moments 🌅✨",
    videoUrl: "https://drive.google.com/file/d/YOUR-VIDEO-ID/view",
    thumbnail: "/src/assets/images/sunset-thumb.png",
    dateAdded: "2026-08-29"
  },
]
```

### Step 4️⃣ **Save & Watch It Appear!**
1. Save the file (`Ctrl+S` or `Cmd+S`)
2. Go to your website → Gallery page
3. Your new ad appears instantly! 🎉

---

## 🎬 Getting Your Video URL from Google Drive

### How to Get a Shareable Drive Link:

1. Open your video in Google Drive
2. Right-click → **Share**
3. Change permission to **"Anyone with the link can view"**
4. Copy the shareable link
5. Paste it as your `videoUrl`

**Example Drive Link:**
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/view
```

---

## 🖼️ Adding a Thumbnail Image

### Where to Put Images:
1. Add your thumbnail image to: `src/assets/images/`
2. Name it clearly (e.g., `summer-campaign-thumb.png`)
3. In `adsData.js`, reference it:

```javascript
thumbnail: "/src/assets/images/summer-campaign-thumb.png"
```

---

## ✅ Checklist Before Saving

Before you save your ad, double-check:

- [ ] `id` is unique and incremented (no duplicates)
- [ ] `title` is descriptive and includes emoji if desired
- [ ] `description` is catchy and has emoji personality
- [ ] `videoUrl` is a valid Google Drive or embed link
- [ ] `thumbnail` path is correct (file exists in that folder)
- [ ] `dateAdded` is today's date in format `YYYY-MM-DD`

---

## 🚨 Troubleshooting

### "My Ad Doesn't Appear!"
1. ✅ Check the `id` number—is it unique?
2. ✅ Save the file after editing
3. ✅ Refresh your browser
4. ✅ Check console for any error messages (F12 → Console tab)

### "Video Won't Play"
1. ✅ Is your Google Drive link publicly shareable?
2. ✅ Try copying the URL format exactly

### "Image Won't Load"
1. ✅ Does the file exist in `src/assets/images/`?
2. ✅ Is the path spelled correctly? (Check capitalization!)

---

## 🎨 Want to Add More Details?

The current system includes:
- `id`, `title`, `description`, `videoUrl`, `thumbnail`, `dateAdded`

Want to add more? (e.g., category, duration, views count)
→ Contact your developer—it's an easy one-line addition!

---

## 🎓 Pro Tips

- **Emojis Everywhere**: Use emojis in titles and descriptions for personality! 🎨✨
- **Keep Descriptions Short**: Max 150 characters for better readability
- **Update Dates**: Change `dateAdded` to today's date so it shows as "newest"
- **Organize Files**: Group similar campaign images in the `images/` folder

---

## 📞 Need Help?

If something goes wrong:
1. Check this guide again—most issues are in the checklist above
2. Don't delete anything; just edit what needs changing
3. Save backups if you're not sure
4. Contact your developer with a screenshot of the error

---

**Happy Adding! 🚀**

Your gallery is one `save` away from a fresh new ad.

---

*Last Updated: 29 August 2026*  
*For Mbongwa Creatives Web Team*
