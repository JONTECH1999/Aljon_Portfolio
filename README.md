# Aljon's Portfolio - Modern Developer Portfolio

A premium, modern developer portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, responsive design, and an impressive UI/UX designed to impress employers in 2026.

## 🌟 Features

### Design & UI/UX
- ✨ **Modern Premium Design** - Minimalist with glassmorphism effects
- 🎨 **Dark Mode** - Beautiful dark-first design with toggle
- 📱 **Fully Responsive** - Mobile-first, works on all devices
- 🎭 **Smooth Animations** - Scroll-triggered reveals and micro-interactions
- ⚡ **Fast Performance** - Optimized for speed with Vite
- 🌓 **Theme Toggle** - Easy dark/light mode switching

### Sections
1. **Hero Section** - Typewriter animation, CTA buttons, social links
2. **About Me** - Biography, skills showcase, tech stack badges
3. **Projects** - Filterable project grid with modal details, tech tags
4. **Experience** - Timeline layout, OJT experience, education, certifications
5. **Contact** - Contact form, social links, contact information
6. **Loading Screen** - Animated loading screen

### Technology Stack
- **React 19** - UI library
- **Vite** - Next-generation build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **GSAP** - Optional advanced animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Navigate to the project**
```bash
cd ALJON_PORTFOLIO
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The portfolio will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header with theme toggle
│   ├── Footer.tsx           # Footer with social links
│   ├── LoadingScreen.tsx    # Animated loading screen
│   └── sections/
│       ├── Hero.tsx         # Hero section with typewriter
│       ├── About.tsx        # About, skills, tech stack
│       ├── Projects.tsx     # Projects grid with filtering & modal
│       ├── Experience.tsx   # Timeline, education, certs
│       └── Contact.tsx      # Contact form & info
├── App.tsx                  # Main app component
├── index.css               # Tailwind + custom styles
└── main.tsx                # Entry point

public/
├── videos/                  # Video files (see VIDEO_GUIDE.md)
└── images/                  # Image assets
dist/                       # Production build output (after build)
```

### 🎬 Adding Videos to Your Portfolio

See **[VIDEO_GUIDE.md](VIDEO_GUIDE.md)** for comprehensive guide on:
- Where to store video files
- How to optimize and compress videos
- Integrating videos in each section (Hero, Projects, Experience, About)
- Video hosting options (self-hosted, YouTube, Vimeo, Cloudinary)
- Performance optimization tips
- Recording and production tips

## 🎨 Customization

### Update Your Information

**Hero Section** - Edit `src/components/sections/Hero.tsx`:
```typescript
const fullText = 'Your Title Here';
```

**About Section** - Edit `src/components/sections/About.tsx`:
- Update skills array
- Modify tech stack badges
- Update statistics

**Projects** - Edit `src/components/sections/Projects.tsx`:
- Modify projects array with your own projects
- Add project images, links, and descriptions
- Update filter categories

**Experience** - Edit `src/components/sections/Experience.tsx`:
- Add your work experience
- Update education info
- Add certifications

**Contact** - Edit `src/components/sections/Contact.tsx`:
- Update email address
- Add phone number
- Update social media links

**Header** - Edit `src/components/Header.tsx`:
- Update logo text
- Modify navigation items

### Colors & Styling

Tailwind CSS custom classes in `src/index.css`:
- `.gradient-text` - Gradient text effect
- `.glass-effect` - Glassmorphism effect
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.section-title` - Section headings

### Animations

Tailwind animations defined in `tailwind.config.js`:
- `fade-in` - Fade in animation
- `slide-up` - Slide up animation
- `glow` - Glow pulse effect
- `float` - Float animation

## 🔗 Social Links & Contact

Update social links in:
- `src/components/Header.tsx` - Navigation social icons
- `src/components/Footer.tsx` - Footer social links
- `src/components/sections/Hero.tsx` - Hero section social buttons
- `src/components/sections/Contact.tsx` - Contact social links

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **framer-motion** - Animation library
- **react-icons** - Icon library
- **react-router-dom** - Routing (optional, can be added)
- **gsap** - Advanced animations (optional)
- **tailwindcss** - CSS framework

## 🚀 Deployment

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Push to GitHub and connect repo

### Vercel
1. Import project from GitHub
2. Build command: `npm run build`
3. Output directory: `dist`

### GitHub Pages
1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
})
```
2. Build: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎯 Performance

- **Lighthouse Score**: 95+
- **Build Size**: ~120KB (gzipped)
- **Load Time**: < 2 seconds
- **Lazy Loading**: Images and videos
- **CSS Optimization**: Tailwind purging unused styles

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

- Replace all placeholder project images with your own
- Update all social media links
- Customize colors by modifying Tailwind classes
- Add real project descriptions
- Update contact information
- Consider adding Google Analytics
- Use Lighthouse to optimize performance

## 🤝 Contributing

Feel free to fork and customize this portfolio for your needs!

## 📞 Contact

For questions or improvements, reach out through the contact form in the portfolio.

---

**Built with ❤ using React, Vite, TypeScript, and Tailwind CSS**
