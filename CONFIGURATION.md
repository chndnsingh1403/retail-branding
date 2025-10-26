# Multi-Industry Business Website Template

A completely configurable Next.js website template that can be adapted for any industry by simply changing configuration files.

## 🚀 Quick Industry Switch

To change the website for a different industry, simply update one line in `src/config/index.ts`:

```typescript
// Change this line to switch industries
const ACTIVE_INDUSTRY: IndustryType = "retail-branding"; // or "restaurant" or "digital-marketing"
```

## 📋 Available Industry Templates

### 1. **Retail Branding & Installation** (`retail-branding`)
- Mall store branding and installation services
- Window graphics, facade signage, interior displays
- Professional installation teams
- Features: CP, Ambience, DLF, GIP mall installations

### 2. **Restaurant Branding & Setup** (`restaurant`)
- Complete restaurant branding solutions
- Interior design and setup services
- Cafe, restaurant, and food court branding
- Features: Brand identity, interior graphics, storefront design

### 3. **Digital Marketing Agency** (`digital-marketing`)
- SEO, PPC, and social media marketing
- Performance analytics and reporting
- Lead generation and growth strategies
- Features: ROI tracking, campaign management

## 🛠️ How to Create a New Industry Configuration

### Step 1: Create Industry Configuration File

Create a new file in `src/config/industries/your-industry.ts`:

```typescript
import { IndustryConfig } from "@/types/config";

export const yourIndustryConfig: IndustryConfig = {
  industry: {
    type: "your-industry",
    name: "Your Industry Name",
    tagline: "Your tagline",
    description: "Description of your industry",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },

  brand: {
    name: "Your Business Name",
    phone: "+91-XXXXXXXXXX",
    whatsapp: "91XXXXXXXXXX",
    email: "contact@yourbusiness.com",
    cities: ["City1", "City2", "City3"],
    website: "https://yourbusiness.com"
  },

  theme: {
    primaryColor: "#your-color",
    secondaryColor: "#your-color",
    accentColor: "#your-color",
    backgroundColor: "#ffffff",
    textColor: "#0f172a",
    gradients: {
      primary: "from-blue-600 to-cyan-500",
      secondary: "from-purple-600 to-pink-500"
    }
  },

  hero: {
    title: {
      line1: "Your",
      highlighted1: "Business",
      line2: "Service",
      highlighted2: "Excellence"
    },
    subtitle: "Your compelling subtitle that explains your value proposition",
    ctaText: {
      primary: "Get Started",
      secondary: "Call Now"
    },
    benefits: [
      "Benefit 1",
      "Benefit 2", 
      "Benefit 3"
    ],
    recentWork: "Recent projects • Client1, Client2, Client3",
    heroImage: {
      src: "https://your-image-url.com/hero.jpg",
      alt: "Description of your hero image"
    }
  },

  // ... continue with services, portfolio, pricing, etc.
  // See existing configurations for complete structure
};
```

### Step 2: Add to Configuration Index

Update `src/config/index.ts`:

```typescript
import { yourIndustryConfig } from "./industries/your-industry";

export const industryConfigs = {
  "retail-branding": retailBrandingConfig,
  "restaurant": restaurantConfig,
  "digital-marketing": digitalMarketingConfig,
  "your-industry": yourIndustryConfig, // Add your configuration
} as const;
```

### Step 3: Switch Active Industry

```typescript
const ACTIVE_INDUSTRY: IndustryType = "your-industry";
```

## 🎨 Customization Options

### Colors & Theme
```typescript
theme: {
  primaryColor: "#2563eb",     // Main brand color
  secondaryColor: "#7c3aed",   // Secondary brand color  
  accentColor: "#06b6d4",      // Accent color for highlights
  backgroundColor: "#ffffff",   // Background color
  textColor: "#0f172a",        // Main text color
  gradients: {
    primary: "from-blue-600 to-cyan-500",    // Hero title gradient
    secondary: "from-purple-600 to-pink-500" // Secondary gradient
  }
}
```

### Services Configuration
```typescript
services: {
  title: "Our Services",
  subtitle: "What we offer",
  items: [
    {
      icon: "Printer",        // Lucide icon name
      title: "Service Name",
      description: "Service description"
    }
    // Add up to 4 services
  ]
}
```

### Portfolio Items
```typescript
portfolio: {
  title: "Our Work",
  subtitle: "Projects we're proud of",
  items: [
    {
      title: "Project Name",
      tag: "Category",
      image: "https://image-url.com/project.jpg",
      alt: "Project description"
    }
    // Add 6 portfolio items
  ]
}
```

## 📁 File Structure

```
src/
├── config/
│   ├── index.ts                    # Main configuration selector
│   └── industries/
│       ├── retail-branding.ts      # Retail branding config
│       ├── restaurant.ts           # Restaurant config
│       ├── digital-marketing.ts    # Digital marketing config
│       └── your-industry.ts        # Your custom config
├── types/
│   └── config.ts                   # Configuration type definitions
├── components/
│   └── blocks/                     # All components read from config
├── data/                          # Legacy data files (now use config)
└── styles/
    └── theme.ts                   # Dynamic theme generation
```

## 🔧 Advanced Customization

### Adding New Icons
Available Lucide icons that can be used in services:
- `Printer`, `Wrench`, `Sparkles`, `Clock`
- `Utensils`, `Store`, `Palette` 
- `Search`, `Target`, `Share2`, `BarChart3`

### Custom Images
Replace image URLs in configuration with:
- Unsplash URLs (already configured)
- Local images in `/public/images/`
- Your own hosted images

### SEO Configuration
```typescript
seo: {
  title: "Your Business — Tagline",
  description: "Meta description for search engines",
  keywords: ["seo", "keywords", "for", "search"]
}
```

## 🚀 Deployment

1. **Configure your industry** in `src/config/index.ts`
2. **Update all content** in your industry configuration file
3. **Replace images** with your own
4. **Test locally**: `npm run dev`
5. **Deploy** to Vercel, Netlify, or your preferred platform

## 💡 Use Cases

- **Service Businesses**: Retail, restaurants, digital marketing, consulting
- **Local Businesses**: Salons, gyms, repair services, cleaning services
- **Professional Services**: Law firms, accounting, real estate, healthcare
- **Creative Agencies**: Design, photography, video production, events

## 🆘 Support

Each industry configuration is completely self-contained. Simply:
1. Copy an existing configuration
2. Modify the content for your industry
3. Update the active industry in `config/index.ts`
4. Your entire website transforms automatically!

## 📝 Notes

- All components automatically adapt to configuration changes
- Images, colors, text, and structure all update dynamically
- Maintains responsive design and mobile optimization
- SEO settings update automatically
- Contact forms and CTAs use configured contact information

---

**Ready to launch your industry-specific website in minutes!** 🚀