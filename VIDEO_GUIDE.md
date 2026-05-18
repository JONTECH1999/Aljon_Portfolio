# Video Integration Guide - Aljon's Portfolio

Complete guide on how to add videos to showcase your work throughout the portfolio.

## 📁 Video File Organization

### 1. Create Video Folders
```
public/
├── videos/
│   ├── hero/
│   │   └── intro.mp4          # Hero section background or intro video
│   ├── projects/
│   │   ├── elearning-demo.mp4
│   │   ├── iot-demo.mp4
│   │   ├── api-demo.mp4
│   │   └── dashboard-demo.mp4
│   ├── experience/
│   │   └── work-highlight.mp4
│   └── testimonials/
│       └── client-testimonial.mp4
```

### 2. Video File Formats & Optimization

**Recommended Formats:**
- `.mp4` - Best browser compatibility (H.264 codec)
- `.webm` - Better compression, use as fallback
- `.mov` - Mac compatibility

**Optimization Commands** (using FFmpeg):

```bash
# Convert to MP4 (best for web)
ffmpeg -i input.mov -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output.mp4

# Compress for web (smaller file size)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k output-compressed.mp4

# Create thumbnail
ffmpeg -i input.mp4 -ss 00:00:05 -vf scale=640:360 -q:v 2 thumbnail.jpg
```

**Size Guidelines:**
- Hero video: 5-15 MB (short, max 10 seconds)
- Project demo: 10-30 MB (30-60 seconds)
- Testimonial: 3-8 MB (15-30 seconds)

## 🎬 Hero Section - Background/Intro Video

### Option 1: Background Video

**Edit `src/components/sections/Hero.tsx`:**

```tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/hero/intro.mp4" type="video/mp4" />
        <source src="/videos/hero/intro.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90"></div>

      {/* Content on top */}
      <div className="relative z-10">
        {/* Your existing hero content */}
      </div>
    </section>
  );
}
```

### Option 2: Embed Video Player

```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <video
          controls
          poster="/videos/hero/thumbnail.jpg"
          className="w-full rounded-2xl shadow-2xl"
        >
          <source src="/videos/hero/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
```

## 📊 Projects Section - Demo Videos

**Edit `src/components/sections/Projects.tsx`:**

Add video to your project data:

```tsx
const projects = [
  {
    id: 1,
    title: 'E-Learning Platform',
    description: 'Interactive learning management system with course management...',
    image: '/images/elearning.jpg',
    video: '/videos/projects/elearning-demo.mp4', // ADD THIS
    technologies: ['Laravel', 'React', 'MySQL'],
    category: 'Laravel',
    link: 'https://github.com/your-repo',
    liveDemo: 'https://your-demo.com',
  },
  // ... more projects
];
```

**Display Video in Modal:**

```tsx
const [selectedProject, setSelectedProject] = useState<Project | null>(null);

// In your JSX, update the modal:
{selectedProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedProject(null)}
  >
    <motion.div
      className="bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Video or Image */}
      {selectedProject.video ? (
        <video
          controls
          poster={selectedProject.image}
          className="w-full h-auto max-h-96 object-cover rounded-t-2xl"
        >
          <source src={selectedProject.video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-auto max-h-96 object-cover rounded-t-2xl"
        />
      )}

      {/* Rest of modal content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
        <p className="text-gray-300 mb-4">{selectedProject.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="btn-primary w-full"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
)}
```

## 👔 Experience Section - Work Highlight Video

**Edit `src/components/sections/Experience.tsx`:**

```tsx
const experiences = [
  {
    title: 'Backend Developer OJT',
    company: 'Company Name',
    period: 'Jan - Jun 2024',
    description: 'Developed RESTful APIs and database optimization...',
    video: '/videos/experience/work-highlight.mp4', // ADD THIS
  },
  // ... more experiences
];

// In your JSX:
{experience.video && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mt-4 rounded-lg overflow-hidden"
  >
    <video
      controls
      className="w-full max-h-96 object-cover rounded-lg"
    >
      <source src={experience.video} type="video/mp4" />
    </video>
  </motion.div>
)}
```

## 👤 About Section - Introduction Video

**Edit `src/components/sections/About.tsx`:**

```tsx
export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Video Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <video
              controls
              poster="/videos/about/intro-thumb.jpg"
              className="w-full rounded-2xl shadow-2xl"
            >
              <source src="/videos/hero/intro.mp4" type="video/mp4" />
            </video>
            <p className="text-sm text-gray-400 mt-2">Quick intro about me</p>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Your existing content */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## 📹 Video Testimonials Section (Optional)

**Create `src/components/sections/Testimonials.tsx`:**

```tsx
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  video: string;
  thumbnail: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Project Manager',
    company: 'Company Inc',
    video: '/videos/testimonials/client-1.mp4',
    thumbnail: '/videos/testimonials/client-1-thumb.jpg',
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-6 cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => setSelectedVideo(testimonial.video)}
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-indigo-400 text-sm">{testimonial.role}</p>
              <p className="text-gray-400 text-sm">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                className="w-full rounded-lg"
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
```

## 🌐 Video Hosting Options

### Option 1: Self-Hosted (Recommended for small videos)
- Store in `public/videos/` folder
- Simple, no external dependencies
- Best for videos under 50MB
- Added to git (consider .gitignore for large files)

### Option 2: Vimeo (Professional)
```tsx
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  width="100%"
  height="400"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>
```

### Option 3: YouTube (Free, CDN)
```tsx
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

### Option 4: AWS S3 / Cloudinary (Scalable)
```tsx
// Cloudinary example
const videoUrl = `https://res.cloudinary.com/your-cloud/video/upload/v1234567890/portfolio/demo.mp4`;

<video controls className="w-full">
  <source src={videoUrl} type="video/mp4" />
</video>
```

## ⚙️ Performance Optimization

### 1. Lazy Load Videos
```tsx
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VideoComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      {isInView && (
        <video controls className="w-full rounded-lg">
          <source src="/videos/project-demo.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
```

### 2. Add Loading State
```tsx
const [isLoading, setIsLoading] = useState(true);

<video
  controls
  onLoadedData={() => setIsLoading(false)}
  className="w-full rounded-lg"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>

{isLoading && (
  <div className="animate-pulse bg-slate-700 h-96 rounded-lg"></div>
)}
```

### 3. Add Thumbnails
```tsx
<video
  controls
  poster="/videos/thumbnails/demo-thumb.jpg"
  className="w-full rounded-lg"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

## 📋 Video Content Ideas

### Hero Section
- 5-10 sec intro with your name and title
- Screen recording of your portfolio
- Quick demo of top project

### Projects Section
- 30-60 sec demo of each project
- Features walkthrough
- Problem-solution explanation

### About Section
- 30-60 sec personal introduction
- Why you love coding
- Your development journey

### Experience Section
- Key project highlights
- Team collaboration examples
- Technical achievements

### Testimonials
- 15-30 sec client/colleague feedback
- Project success stories
- Working style testimonials

## 🎥 Recording Tips

### Using Screen Recording
- **Windows**: Use built-in Xbox Game Bar (Win+G)
- **Mac**: Use QuickTime Player
- **Linux**: Use OBS Studio

### Using OBS Studio (Free)
1. Download [OBS Studio](https://obsproject.com/)
2. Add source: Display Capture or Window Capture
3. Click Start Recording
4. Export as MP4

### Recording Quality Settings
- Resolution: 1920x1080 (1080p)
- Frame rate: 30 fps
- Bitrate: 5000-8000 kbps
- Format: MP4 (H.264)

## 🚀 Deployment Considerations

### Before Deployment:
1. Compress all videos
2. Use multiple formats (.mp4 + .webm)
3. Add fallback content
4. Test on different browsers
5. Check file sizes (total portfolio < 50MB)

### .gitignore for Large Files
```
# Video files (if using git)
public/videos/*.mp4
public/videos/*.webm
!public/videos/sample.mp4  # Keep important ones
```

### Alternative: Git LFS
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
```

## 📊 Video Performance Checklist

- [ ] All videos under 30MB each
- [ ] Multiple format support (.mp4, .webm)
- [ ] Thumbnails for all videos
- [ ] Autoplay muted for background videos
- [ ] Controls visible for demo videos
- [ ] Mobile responsive
- [ ] Lazy loading implemented
- [ ] Fallback images for all videos
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Load time under 3 seconds

## 💡 Pro Tips

1. **Use aspect ratio container** to prevent layout shift
```tsx
<div className="aspect-video">
  <video className="w-full h-full object-cover">
    <source src="/videos/demo.mp4" type="video/mp4" />
  </video>
</div>
```

2. **Add captions for accessibility**
```tsx
<video controls>
  <source src="/videos/demo.mp4" type="video/mp4" />
  <track src="/videos/demo.vtt" kind="captions" srcLang="en" label="English" />
</video>
```

3. **Disable download** if needed
```tsx
<video controlsList="nodownload" controls>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

4. **Track video analytics**
```tsx
<video
  onPlay={() => console.log('Video started')}
  onEnded={() => console.log('Video ended')}
  onPause={() => console.log('Video paused')}
>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

---

**Happy video integrating! Your portfolio will stand out with professional video demonstrations! 🎬**
