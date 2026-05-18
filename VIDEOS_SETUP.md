# 🎬 Project Video Setup Guide

## Quick Start - Add Your Videos in 5 Steps

### Step 1: Create Video Folders

Navigate to your project root and create this folder structure:

```
public/
└── videos/
    └── projects/
```

**On Windows (PowerShell):**
```powershell
mkdir public/videos/projects
```

**On Mac/Linux:**
```bash
mkdir -p public/videos/projects
```

---

### Step 2: Prepare Your Videos

Videos should be **MP4 format** (best browser compatibility).

**Quick Optimization (if your videos are large):**

Using FFmpeg (download from https://ffmpeg.org):

```bash
# Compress your video (reduce file size)
ffmpeg -i your-video.mov -c:v libx264 -crf 28 -c:a aac -b:a 128k output.mp4

# Create a thumbnail image (at 5 seconds into video)
ffmpeg -i your-video.mp4 -ss 00:00:05 -vf scale=640:360 -q:v 2 thumbnail.jpg
```

**File Size Guidelines:**
- Each demo video: **10-30 MB** (30-60 seconds)
- Thumbnail image: **100-300 KB** (640x360 resolution)

---

### Step 3: Name and Place Your Files

Use these exact filenames for each project. Place them in `public/videos/projects/`:

| Project | Video File | Thumbnail File |
|---------|-----------|-----------------|
| E-Learning Platform | `elearning-demo.mp4` | `elearning-thumb.jpg` |
| IoT Smart Home | `iot-demo.mp4` | `iot-thumb.jpg` |
| Analytics Dashboard | `dashboard-demo.mp4` | `dashboard-thumb.jpg` |
| RESTful API Service | `api-demo.mp4` | `api-thumb.jpg` |
| Weather Station | `weather-demo.mp4` | `weather-thumb.jpg` |
| E-Commerce Platform | `ecommerce-demo.mp4` | `ecommerce-thumb.jpg` |

**Example folder structure:**
```
public/videos/projects/
├── elearning-demo.mp4
├── elearning-thumb.jpg
├── iot-demo.mp4
├── iot-thumb.jpg
├── dashboard-demo.mp4
├── dashboard-thumb.jpg
├── api-demo.mp4
├── api-thumb.jpg
├── weather-demo.mp4
├── weather-thumb.jpg
├── ecommerce-demo.mp4
└── ecommerce-thumb.jpg
```

---

### Step 4: Verify Video Paths in Code

The code is **already configured** to look for these files. Check [src/components/sections/Projects.tsx](../src/components/sections/Projects.tsx):

```tsx
video: '/videos/projects/elearning-demo.mp4',
videoThumbnail: '/videos/projects/elearning-thumb.jpg',
```

The paths are already set correctly! ✅

---

### Step 5: Test Locally

Run your development server:

```bash
npm run dev
```

Then:
1. Open `http://localhost:5173`
2. Scroll to **Projects** section
3. Hover over each project card
4. You should see a **Play button** appear in the center
5. Click to open the modal with video player
6. Click the video to play

---

## 🎥 How It Works

### Play Button (On Hover)
- Appears on project cards when you hover over them
- Click to open the detailed project modal

### Video Player (In Modal)
- Shows video with professional controls (play, pause, fullscreen, volume)
- Displays thumbnail as preview before playing
- "Demo Video" badge in top-right corner
- Responsive - works on mobile and desktop
- Prevents video download (security)

### Responsive Design
- Desktop: Large video player
- Tablet: Optimized for touch
- Mobile: Full-width responsive video

---

## 📱 Video Recording Tips

### Quick Screen Recording

**Windows (Built-in):**
1. Press `Win + G`
2. Click "Yes, this is a game"
3. Click "Start recording"
4. Record your project demo
5. Stop recording (saved to Videos folder)

**Mac (Built-in):**
1. Press `Cmd + Shift + 5`
2. Select "Record Selection"
3. Click record button
4. Demo your project
5. Stop recording

**Windows/Mac/Linux (OBS Studio - Free):**
1. Download [OBS Studio](https://obsproject.com/)
2. Click "+" to add source
3. Select "Display Capture" or "Window Capture"
4. Click "Start Recording"
5. Demo your project
6. Stop recording

### Best Practices
✅ **DO:**
- Record at 1920x1080 (1080p) resolution
- Keep videos **30-60 seconds** max
- Show the key features clearly
- Use consistent background
- Add captions if possible

❌ **DON'T:**
- Make videos too long (boring)
- Use poor lighting or blurry recordings
- Include sensitive information
- Have background noise

---

## 🚀 After Adding Videos

### Build & Deploy

```bash
# Build for production
npm run build

# Files are ready in the 'dist' folder
```

### Upload to Hosting

**Netlify (Recommended):**
1. Drag & drop `dist` folder to Netlify
2. Done! 🎉

**Vercel:**
1. Connect GitHub repo
2. Videos upload automatically with deployment

**GitHub Pages:**
1. Run `npm run build`
2. Push `dist` folder to `gh-pages` branch

---

## 🎬 Video Content Ideas

### What to show for each project:
1. **E-Learning Platform**: Student dashboard, course browsing, video playback
2. **IoT Smart Home**: Mobile app controlling lights/temperature, real-time updates
3. **Analytics Dashboard**: Live charts updating, filtering data, insights
4. **RESTful API**: API response examples, documentation, testing tools
5. **Weather Station**: Sensor data visualization, forecast updates, map view
6. **E-Commerce**: Product browsing, cart checkout, payment process

---

## 🐛 Troubleshooting

### Videos Not Showing?

**Problem:** Videos don't appear when clicking project
**Solution:** Check these:
1. ✅ Files exist in `public/videos/projects/`
2. ✅ Filenames match exactly (case-sensitive on Mac/Linux)
3. ✅ Video format is MP4
4. ✅ Browser console has no errors (`F12` → Console tab)

**Check browser console:**
```
npm run dev
# Open http://localhost:5173
# Press F12
# Check Console tab for errors
```

### Video Won't Play?

**Problem:** Black screen when clicking play
**Solution:**
1. Make sure video is valid MP4 format
2. Try converting with FFmpeg:
```bash
ffmpeg -i input.mov -c:v libx264 -preset medium -crf 23 -c:a aac output.mp4
```

### Thumbnail Not Showing?

**Problem:** Default image appears instead of thumbnail
**Solution:**
1. Check thumbnail file exists: `public/videos/projects/elearning-thumb.jpg`
2. Make sure it's a `.jpg` file (not `.png`)
3. Dimensions should be ~640x360px

---

## 📊 Production Checklist

Before deploying:

- [ ] All videos are MP4 format
- [ ] Each video is under 30MB
- [ ] Thumbnail images exist for all videos
- [ ] All files named correctly (lowercase, no spaces)
- [ ] Videos play locally (`npm run dev`)
- [ ] Play button shows on hover
- [ ] Modal opens when clicking project
- [ ] Video controls visible (play, pause, fullscreen)
- [ ] Responsive on mobile (test with phone)
- [ ] No console errors (`F12` → Console)

---

## 💡 Pro Tips

### Tip 1: Batch Compress Videos
```bash
# Compress all .mov files in a folder
for file in *.mov; do
  ffmpeg -i "$file" -c:v libx264 -crf 28 -c:a aac output_"${file%.mov}".mp4
done
```

### Tip 2: Create Thumbnails Batch
```bash
# Extract thumbnails from all mp4 files
for file in *.mp4; do
  ffmpeg -i "$file" -ss 00:00:05 -vf scale=640:360 -q:v 2 "${file%.mp4}-thumb.jpg"
done
```

### Tip 3: Upload to Cloud (Optional)
If videos are large, use cloud storage:
- **Cloudinary** (easy API)
- **AWS S3** (most popular)
- **Vimeo** (video hosting)

Then update video URLs in `Projects.tsx`

### Tip 4: Add Video Analytics
Track which videos users watch:
```tsx
<video
  onPlay={() => console.log('Watched:', selectedProject.title)}
  onEnded={() => console.log('Completed:', selectedProject.title)}
>
```

---

## 🎉 Done!

Your portfolio is ready for professional videos! The UI automatically:
- ✅ Shows play button on hover
- ✅ Opens video in beautiful modal
- ✅ Provides professional playback controls
- ✅ Works on mobile and desktop
- ✅ Prevents video download (security)

**Next:** Add your actual videos following the steps above!

Questions? Check [VIDEO_GUIDE.md](VIDEO_GUIDE.md) for more detailed information.
