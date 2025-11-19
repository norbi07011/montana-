# 🔧 Montana ST - Premium Loodgieter Website

<div align="center">
  <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1200&h=400&fit=crop&grayscale" alt="Montana ST Banner" width="100%" />
</div>

## 📋 Overzicht

Moderne, high-performance website voor Montana ST - Premium loodgieter en installatietechniek specialist in Rotterdam. Built with React, TypeScript, Vite, Tailwind CSS, en Framer Motion.

### ✨ Key Features

- 🎨 **Modern Dark Design** - Luxe zwart-goud kleurenschema
- 🌍 **9 Talen** - NL, EN, TR, PL, BG, AR, DE, HU, FR
- ⚡ **Blazing Fast** - Vite + Code Splitting + Lazy Loading
- 📱 **PWA Ready** - Installeerbaar op mobiel & desktop
- 🎭 **Smooth Animations** - Framer Motion powered
- 🔒 **Form Validation** - Zod schema validation
- 🍪 **GDPR Compliant** - Cookie consent banner
- 📊 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 💬 **WhatsApp Integration** - Direct contact via WhatsApp
- 📬 **Newsletter Signup** - Email collection component

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repo-url>
cd montana-st---premium-loodgieter

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- Local: http://localhost:3000
- Network: Available on your local IP

---

## 📁 Project Structure

```
montana-st---premium-loodgieter/
├── public/
│   ├── sw.js              # Service Worker voor PWA
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── components/
│   ├── Layout.tsx         # Main layout met header/footer
│   ├── ErrorBoundary.tsx  # Error handling component
│   ├── FloatingWhatsApp.tsx  # Floating action buttons
│   ├── CookieConsent.tsx  # GDPR cookie banner
│   ├── PWAInstallPrompt.tsx  # PWA install prompt
│   ├── Newsletter.tsx     # Newsletter signup
│   └── LoadingSpinner.tsx # Loading states
├── pages/
│   ├── Home.tsx           # Homepage met hero
│   ├── Services.tsx       # Services overzicht + modal forms
│   ├── Projects.tsx       # Portfolio/projecten
│   ├── About.tsx          # Over ons pagina
│   └── Contact.tsx        # Contact formulier
├── context/
│   └── LanguageContext.tsx # Multi-language state
├── constants/
│   └── translations.ts    # All translations (9 languages)
├── utils/
│   ├── validationSchemas.ts  # Zod validation schemas
│   └── pwa.ts             # PWA helper functions
├── App.tsx                # Main app component
├── index.css              # Global Tailwind styles
├── tailwind.config.js     # Tailwind configuration
└── vite.config.ts         # Vite configuration
```

---

## 🛠️ Tech Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 6** - Build tool & dev server
- **React Router 7** - Client-side routing

### Styling
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Animations
- **Custom Design System** - Montana brand colors

### State & Forms
- **React Context** - Language state
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TanStack Query** - Data fetching (ready for backend)

### UX Enhancements
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library
- **PWA** - Progressive Web App support

---

## 🎨 Design System

### Colors
```javascript
montana: {
  black: '#050505',    // Main background
  dark: '#0a0a0f',     // Secondary background
  gold: '#d4af37',     // Primary accent
  goldHover: '#f9d76e', // Hover state
  copper: '#b87333',   // Tertiary accent
}
```

### Typography
- **Headings**: Cinzel (Serif) - Elegant & Professional
- **Body**: Inter (Sans-serif) - Modern & Readable

### Animations
- Fade In Up - Hero sections
- Scale In - Cards & features
- Slide In - Navigation
- Hover Effects - Interactive elements

---

## 🌍 Multi-Language Support

Supported languages with full RTL support for Arabic:
- 🇳🇱 Nederlands (NL)
- 🇬🇧 English (EN)
- 🇹🇷 Türkçe (TR)
- 🇵🇱 Polski (PL)
- 🇧🇬 Български (BG)
- 🇸🇦 العربية (AR) - RTL
- 🇩🇪 Deutsch (DE)
- 🇭🇺 Magyar (HU)
- 🇫🇷 Français (FR)

Language persisted in `localStorage`.

---

## 📱 PWA Features

- ✅ Installable on mobile & desktop
- ✅ Offline support via Service Worker
- ✅ App manifest with shortcuts
- ✅ Custom install prompt
- ✅ Cache-first strategy for assets
- ⏳ Background sync (ready for implementation)
- ⏳ Push notifications (ready for implementation)

---

## 🔐 Security & Privacy

- ✅ GDPR compliant cookie consent
- ✅ Form validation (client-side)
- ✅ No external tracking (yet)
- ✅ Sanitized user inputs (Zod)
- ⏳ HTTPS enforcement (production)
- ⏳ CSP headers (production)

---

## 📊 SEO Optimizations

- ✅ Comprehensive meta tags
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ Structured data ready
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt tags on images
- ⏳ Schema.org markup (LocalBusiness)

---

## 🎯 Performance Optimizations

- ⚡ Lazy loading pages (React.lazy)
- ⚡ Code splitting per route
- ⚡ Image optimization (external CDN)
- ⚡ Minimal bundle size
- ⚡ Tree shaking
- ⚡ Production build minification
- ⏳ Image preloading
- ⏳ Critical CSS inlining

---

## 📞 Contact Integration

### WhatsApp
Direct messaging via WhatsApp with pre-filled forms:
- Contact form → WhatsApp message
- Service requests → Structured WhatsApp message
- Emergency button → Direct call/WhatsApp

### Email (Future)
Ready for integration with:
- Nodemailer
- SendGrid
- AWS SES

---

## 🚧 Roadmap

### Phase 1 ✅ (COMPLETED)
- [x] Modern design system
- [x] Multi-language support
- [x] Responsive layout
- [x] Basic animations
- [x] WhatsApp integration

### Phase 2 ✅ (COMPLETED)
- [x] Tailwind CSS setup (local)
- [x] SEO optimization
- [x] Error boundaries
- [x] Form validation
- [x] PWA support
- [x] Cookie consent
- [x] Newsletter component
- [x] Social media links

### Phase 3 🔄 (IN PROGRESS)
- [ ] Backend API (Node.js + Express)
- [ ] Database (PostgreSQL/MongoDB)
- [ ] Admin panel
- [ ] Blog/CMS integration
- [ ] Image optimization (local)
- [ ] Email service integration

### Phase 4 📋 (PLANNED)
- [ ] Booking system
- [ ] Payment integration (Stripe/Mollie)
- [ ] Live chat (Socket.io)
- [ ] Google Analytics 4
- [ ] Testing (Vitest + Playwright)
- [ ] CI/CD pipeline

---

## 🧪 Testing

```bash
# Unit tests (future)
npm run test

# E2E tests (future)
npm run test:e2e

# Type checking
npm run type-check
```

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Custom Server
```bash
npm run build
# Serve the dist/ folder with any static server
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is proprietary and confidential.
© 2025 Montana ST. All rights reserved.

---

## 📞 Contact

**Montana ST**
- 📱 Phone: +31 6 47 02 62 40
- 📧 Email: info@montanast.nl
- 🌐 Website: https://montana-st.nl
- 📍 Location: Zuid-Holland, Nederland

---

## 🎉 Acknowledgments

- Design inspiration: Modern luxury brands
- Icons: Lucide React
- Fonts: Google Fonts (Cinzel, Inter)
- Images: Unsplash

---

Made with ❤️ by Montana ST Team
