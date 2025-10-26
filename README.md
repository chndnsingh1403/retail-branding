# Multi-Industry Business Website Template

A **completely configurable** Next.js website that can be adapted for **any industry** by simply changing configuration files. Perfect for selling customized websites to different businesses.

## 🚀 **Currently Configured For:** Retail Branding & Installation

- Next.js App Router + TypeScript
- Tailwind CSS with dynamic theming
- **Industry-agnostic configuration system**
- **One-click industry switching**
- Framer Motion & lucide-react ready
- Data-driven sections via `/src/config`
- API stub for lead capture at `/api/lead`

## ⚡ Quick Industry Switch

```bash
# Switch to different industries instantly
npm run retail      # Retail Branding & Installation  
npm run restaurant  # Restaurant Branding & Setup
npm run digital     # Digital Marketing Agency

# Then restart dev server
npm run dev
```

## 🏭 Available Industry Templates

### 1. **Retail Branding** (Active)
- Mall store branding and installation
- Window graphics, facade signage, interior displays  
- Featured: CP, Ambience, DLF, GIP installations

### 2. **Restaurant Branding**
- Complete restaurant setup services
- Interior design, brand identity, storefront design
- Featured: Cafes, fine dining, food courts

### 3. **Digital Marketing**
- SEO, PPC, social media marketing
- Analytics, lead generation, growth strategies
- Featured: ROI tracking, campaign management

## 🛠️ Configuration System

All content, colors, images, and text are controlled by configuration files:

```
src/config/
├── index.ts                    # Industry selector (change 1 line!)
└── industries/
    ├── retail-branding.ts      # Retail config
    ├── restaurant.ts           # Restaurant config  
    └── digital-marketing.ts    # Digital marketing config
```

### To Switch Industries:
1. **Option A**: Use npm scripts: `npm run restaurant`
2. **Option B**: Edit `src/config/index.ts` and change:
   ```typescript
   const ACTIVE_INDUSTRY = "restaurant"; // or "digital-marketing"
   ```

## 🎨 Complete Customization

Each industry configuration includes:
- ✅ **Brand Information** (name, contact, cities)
- ✅ **Theme Colors** (primary, secondary, gradients)
- ✅ **Hero Section** (title, subtitle, images, CTAs)
- ✅ **Services** (4 customizable services with icons)
- ✅ **Portfolio** (6 project showcases)
- ✅ **Recent Work** (9-tile grid of client projects)
- ✅ **Pricing** (3-tier pricing structure)
- ✅ **Process Steps** (4-step process explanation)
- ✅ **SEO Settings** (title, description, keywords)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server  
npm run dev
# open http://localhost:3000

# Switch to restaurant industry
npm run restaurant

# Switch to digital marketing
npm run digital
```

## 💼 Create New Industry

1. **Copy** existing config: `src/config/industries/retail-branding.ts`
2. **Customize** all content for your target industry
3. **Add** to `src/config/index.ts`
4. **Switch** active industry

See [CONFIGURATION.md](./CONFIGURATION.md) for detailed setup guide.

## 📁 Project Structure

```
src/
├── config/                     # Industry configurations
│   ├── index.ts               # Industry selector  
│   └── industries/            # Industry templates
├── components/
│   ├── blocks/                # Page sections (read from config)
│   ├── common/                # Nav, Logo, ImageTile
│   ├── layout/                # Section, Container, GradientBg
│   └── ui/                    # Button & Card components
├── data/                      # Legacy (now uses config)
└── types/
    └── config.ts              # Configuration type definitions
```

## 💡 Perfect For

- **Web Agencies**: Sell customized websites to different industries
- **Freelancers**: Quick industry-specific websites  
- **Business Owners**: Easily rebrand for different verticals
- **Consultants**: Multiple industry-focused landing pages

## 🎯 Business Model

1. **Create** industry configurations for your target markets
2. **Customize** branding, content, and images per client
3. **Deploy** multiple industry-specific websites
4. **Scale** your web development business efficiently

## 🔧 Salesforce Integration (Planned)

1. **Web-to-Lead**: Direct form submission to Salesforce
2. **REST API**: Server-side lead creation with authentication
3. **Field Service**: Auto-create appointments and quotes

## 📱 Features

- ✅ **Fully Responsive** (mobile-first design)
- ✅ **SEO Optimized** (dynamic meta tags)
- ✅ **Performance Optimized** (Next.js Image optimization)
- ✅ **SSL Issue Resolution** (for development)
- ✅ **Professional Design** (clean, modern UI)
- ✅ **Contact Integration** (WhatsApp, phone, email)

---

## 🌟 **Transform any business website in under 5 minutes!**

Perfect for web agencies looking to scale their business across multiple industries.
