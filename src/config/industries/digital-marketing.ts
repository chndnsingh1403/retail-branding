import { IndustryConfig } from "@/types/config";

export const digitalMarketingConfig: IndustryConfig = {
  industry: {
    type: "digital-marketing",
    name: "Digital Marketing Agency",
    tagline: "Growth-Driven Digital Solutions",
    description: "Complete digital marketing services including SEO, PPC, social media marketing, and web development",
    keywords: ["digital marketing", "SEO services", "PPC advertising", "social media marketing", "web development"]
  },

  brand: {
    name: "GrowthBoost Digital",
    phone: "+91-98765-43210",
    whatsapp: "919876543210",
    email: "hello@growthboost.in",
    cities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    website: "https://growthboost.in"
  },

  theme: {
    primaryColor: "#3b82f6", // Blue
    secondaryColor: "#8b5cf6", // Violet
    accentColor: "#10b981", // Emerald
    backgroundColor: "#ffffff",
    textColor: "#0f172a",
    gradients: {
      primary: "from-blue-600 to-violet-500",
      secondary: "from-violet-600 to-purple-500"
    }
  },

  hero: {
    title: {
      line1: "Digital",
      highlighted1: "Marketing",
      line2: "That Drives",
      highlighted2: "Results"
    },
    subtitle: "Data-driven digital marketing strategies that grow your business. From SEO to PPC, we deliver measurable results.",
    ctaText: {
      primary: "Get Free Audit",
      secondary: "Call Now"
    },
    benefits: [
      "Guaranteed ROI",
      "Certified Experts",
      "24/7 Support"
    ],
    recentWork: "Recent success • 300% ROI, 150% Traffic Growth",
    heroImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      alt: "Digital marketing analytics dashboard showing growth metrics"
    }
  },

  services: {
    title: "Our Services",
    subtitle: "Comprehensive digital marketing solutions for business growth",
    items: [
      {
        icon: "Search",
        title: "SEO & Content Marketing",
        description: "Boost your organic visibility with proven SEO strategies and engaging content marketing."
      },
      {
        icon: "Target",
        title: "PPC & Paid Advertising",
        description: "Maximize your ad spend with optimized Google Ads, Facebook Ads, and multi-platform campaigns."
      },
      {
        icon: "Share2",
        title: "Social Media Marketing",
        description: "Build your brand presence and engage customers across all major social media platforms."
      },
      {
        icon: "BarChart3",
        title: "Analytics & Reporting",
        description: "Track performance with detailed analytics and actionable insights for continuous improvement."
      }
    ]
  },

  portfolio: {
    title: "Success Stories",
    subtitle: "Real results for real businesses across various industries.",
    items: [
      {
        title: "E-commerce Growth",
        tag: "SEO + PPC",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
        alt: "E-commerce analytics showing growth"
      },
      {
        title: "Local Business Success",
        tag: "Local SEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
        alt: "Local business digital marketing success"
      },
      {
        title: "SaaS Lead Generation",
        tag: "Content Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        alt: "SaaS marketing analytics dashboard"
      },
      {
        title: "Social Media Campaign",
        tag: "Social Media",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
        alt: "Social media marketing campaign results"
      },
      {
        title: "Mobile App Promotion",
        tag: "App Marketing",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
        alt: "Mobile app marketing analytics"
      },
      {
        title: "B2B Lead Generation",
        tag: "LinkedIn Marketing",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
        alt: "B2B marketing analytics dashboard"
      }
    ]
  },

  recentWork: {
    title: "Recent Campaign Results",
    subtitle: "Latest achievements across different industries and platforms",
    items: [
      {
        title: "E-commerce Store",
        location: "300% Revenue Growth",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "SaaS Platform",
        location: "150% Lead Increase",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Local Restaurant Chain",
        location: "200% Footfall Growth",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Tech Startup",
        location: "400% App Downloads",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Fashion Brand",
        location: "250% Social Engagement",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "B2B Software",
        location: "180% Qualified Leads",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },

  pricing: {
    title: "Transparent Pricing",
    subtitle: "Choose the perfect plan for your business growth",
    items: [
      {
        name: "Starter",
        price: "₹25,000",
        unit: "per month",
        description: "Perfect for small businesses starting their digital journey",
        features: ["SEO audit & optimization", "Google My Business setup", "Basic social media", "Monthly reporting"]
      },
      {
        name: "Growth",
        price: "₹50,000",
        unit: "per month",
        description: "Comprehensive marketing for growing businesses",
        features: ["Complete SEO package", "PPC campaign management", "Social media marketing", "Content creation", "Advanced analytics"],
        popular: true
      },
      {
        name: "Scale",
        price: "₹1,00,000",
        unit: "per month",
        description: "Enterprise-level marketing for established businesses",
        features: ["Multi-channel campaigns", "Advanced automation", "Dedicated account manager", "Custom reporting", "A/B testing"]
      }
    ]
  },

  process: {
    title: "Our Process",
    subtitle: "How we drive results for your business",
    steps: [
      {
        number: "01",
        title: "Strategy & Audit",
        description: "Comprehensive analysis of your current digital presence and competitive landscape."
      },
      {
        number: "02",
        title: "Campaign Setup",
        description: "Launch targeted campaigns across chosen channels with proper tracking and optimization."
      },
      {
        number: "03",
        title: "Monitor & Optimize",
        description: "Continuous monitoring and optimization to maximize ROI and campaign performance."
      },
      {
        number: "04",
        title: "Report & Scale",
        description: "Detailed reporting with insights and recommendations for scaling successful campaigns."
      }
    ]
  },

  cta: {
    title: "Ready to Grow Your Business?",
    subtitle: "Get a free digital marketing audit and growth strategy",
    buttonText: "Get Free Audit"
  },

  footer: {
    description: "Data-driven digital marketing agency helping businesses achieve measurable growth through SEO, PPC, and social media marketing.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ]
  },

  seo: {
    title: "GrowthBoost Digital — Digital Marketing Agency for Business Growth",
    description: "Professional digital marketing services including SEO, PPC, social media marketing, and analytics. Proven results for businesses across India.",
    keywords: ["digital marketing agency", "SEO services", "PPC management", "social media marketing", "business growth", "online marketing"]
  }
};