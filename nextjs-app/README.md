# Primehood Supplies - Next.js Website

A fully optimized, modern Next.js 14+ website for Primehood Supplies, Kenya's premier sports consultancy and equipment supplier.

## 🚀 Features

### Performance Optimizations
- ✅ **Next.js 14+ with App Router** - Latest Next.js features for optimal performance
- ✅ **Image Optimization** - All images converted to Next/Image with WebP/AVIF support
- ✅ **Font Optimization** - Google Fonts (Inter, Outfit) with `font-display: swap`
- ✅ **Code Splitting** - Automatic code splitting and lazy loading
- ✅ **Bundle Optimization** - Optimized package imports for lucide-react and framer-motion

### Animations & Interactions
- ✅ **GSAP + ScrollTrigger** - Smooth scroll-based animations and reveals
- ✅ **Lenis Smooth Scrolling** - Buttery smooth scrolling experience
- ✅ **Framer Motion** - Micro-interactions and component animations
- ✅ **Scroll Animations** - Custom hooks for easy scroll-based animations

### SEO & Accessibility
- ✅ **Metadata API** - Comprehensive SEO with Open Graph and Twitter Cards
- ✅ **Semantic HTML** - Proper HTML5 semantic structure
- ✅ **ARIA Attributes** - Accessibility labels for interactive elements
- ✅ **Mobile-First Design** - Fully responsive across all devices

### Vercel Deployment Ready
- ✅ **Optimized Build** - Production-ready configuration
- ✅ **Security Headers** - X-Frame-Options, CSP, and more
- ✅ **Image Caching** - Aggressive caching for static assets
- ✅ **Environment Variables** - Structured for easy deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Lenis, Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Sharp (automatic via Next.js)
- **Fonts**: Google Fonts (Inter, Outfit)

## 📁 Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts & providers
│   ├── page.tsx           # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── equipment/        # Equipment page
│   ├── catalogue/        # Catalogue page
│   ├── consultancy/      # Consultancy page
│   └── contact/          # Contact page
├── components/            # React components
│   ├── navbar.tsx        # Navigation with scroll effects
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section with GSAP
│   ├── brands.tsx        # Infinite scroll brands
│   ├── services-preview.tsx
│   ├── about-preview.tsx
│   ├── testimonials.tsx
│   └── button.tsx        # Reusable button component
├── lib/                   # Utility libraries
│   ├── smooth-scroll.tsx # Lenis smooth scroll provider
│   ├── gsap-animations.ts # GSAP animation utilities
│   └── utils.ts          # Tailwind class merger
├── hooks/                 # Custom React hooks
│   └── use-scroll-animation.ts
├── public/                # Static assets
│   └── images/           # Optimized images
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Animation Triggers

### GSAP Scroll Animations
All scroll-based animations use GSAP ScrollTrigger with the following defaults:
- **Trigger Point**: `top 80%` (animates when element is 80% into viewport)
- **Toggle Actions**: `play none none reverse`
- **Easing**: `power3.out` for smooth, natural motion

### Lenis Smooth Scroll
- **Duration**: 1.2s
- **Easing**: Custom easing function for smooth deceleration
- **Wheel Multiplier**: 1x (natural scroll speed)
- **Touch Multiplier**: 2x (faster on mobile)

### Custom Hooks
Use `useScrollAnimation` hook for easy scroll-based animations:

```tsx
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ref = useScrollAnimation({
  animation: { opacity: 0, y: 50 },
  scrollTrigger: { start: "top 80%" }
});

return <div ref={ref}>Content</div>;
```

## 🖼️ Image Optimization

All images are optimized using Next/Image:
- **Formats**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Below-fold images load on demand
- **Priority Loading**: Hero images load immediately
- **Responsive**: Multiple sizes generated automatically
- **Quality**: 85% for standard images, 90% for hero images

## 📊 Performance Improvements

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations Applied
1. **Image Optimization**: WebP/AVIF with responsive sizes
2. **Font Optimization**: Preloaded with `font-display: swap`
3. **Code Splitting**: Automatic route-based splitting
4. **Tree Shaking**: Unused code removed in production
5. **Minification**: HTML, CSS, and JS minified
6. **Compression**: Gzip/Brotli compression on Vercel

## 🚀 Deployment to Vercel

### Quick Deploy
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel auto-detects Next.js configuration
4. Deploy with one click

### Environment Variables
Create `.env.local` for local development:

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://primehoodsupplies.com
```

### Build Command
```bash
npm run build
```

### Custom Domain
Configure custom domain in Vercel dashboard:
- Add domain: `primehoodsupplies.com`
- Add www redirect: `www.primehoodsupplies.com` → `primehoodsupplies.com`

## 📝 Development Notes

### Adding New Pages
1. Create new directory in `app/` folder
2. Add `page.tsx` with metadata export
3. Component will auto-route based on folder name

### Adding New Components
1. Create component in `components/` folder
2. Use `"use client"` directive if using hooks/interactivity
3. Import and use in pages

### Styling Guidelines
- Use Tailwind utility classes
- Custom colors: `primary`, `accent`, `secondary`
- Custom fonts: `font-heading` (Outfit), `font-sans` (Inter)
- Use `cn()` utility for conditional classes

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check`

### Image Issues
- Ensure images are in `public/images/` directory
- Check image paths start with `/images/`
- Verify image dimensions are specified

### Animation Issues
- Check GSAP is registered: `gsap.registerPlugin(ScrollTrigger)`
- Verify Lenis provider wraps app in layout
- Check for client component directive: `"use client"`

## 📄 License

© 2026 Prime Hood Supplies. All rights reserved.

## 👤 Contact

- **Email**: primehoodsupplies@gmail.com
- **Phone**: +254 722 801 926
- **Address**: Rehema Place, Block F Suite 49, Ngong Road, Nairobi

---

Built with ❤️ using Next.js 14+
