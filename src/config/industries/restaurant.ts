import { IndustryConfig } from "@/types/config";

export const restaurantConfig: IndustryConfig = {
  industry: {
    type: "restaurant-branding",
    name: "Restaurant Branding & Setup",
    tagline: "Complete Restaurant Branding Solutions",
    description: "Professional restaurant branding, interior design, and setup services for cafes, restaurants, and food courts",
    keywords: ["restaurant branding", "cafe setup", "food court design", "restaurant signage", "menu boards"]
  },

  brand: {
    name: "FoodSpace Branding Co.",
    phone: "+91-98765-43210",
    whatsapp: "919876543210",
    email: "hello@foodspacebranding.in",
    cities: ["Delhi", "Mumbai", "Bangalore", "Pune"],
    website: "https://foodspacebranding.in"
  },

  theme: {
    primaryColor: "#ea580c", // Orange
    secondaryColor: "#dc2626", // Red
    accentColor: "#f59e0b", // Amber
    backgroundColor: "#ffffff",
    textColor: "#0f172a",
    gradients: {
      primary: "from-orange-600 to-red-500",
      secondary: "from-red-600 to-pink-500"
    }
  },

  hero: {
    title: {
      line1: "Restaurant",
      highlighted1: "Branding",
      line2: "Complete",
      highlighted2: "Setup"
    },
    subtitle: "From concept to launch — complete restaurant branding and interior setup services across major cities.",
    ctaText: {
      primary: "WhatsApp Us",
      secondary: "Call Now"
    },
    benefits: [
      "24/7 Setup Support",
      "Certified Teams",
      "Budget-Friendly"
    ],
    recentWork: "Recent setups • Food Courts, Cafes, Fine Dining",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      alt: "Modern restaurant interior with professional branding"
    }
  },

  services: {
    title: "Our Services",
    subtitle: "Complete restaurant branding from concept to execution",
    items: [
      {
        icon: "Utensils",
        title: "Interior Branding",
        description: "Wall graphics, menu boards, ambient lighting and complete interior branding for restaurants."
      },
      {
        icon: "Store",
        title: "Storefront Design",
        description: "Eye-catching facade design, signage, and entrance branding that attracts customers."
      },
      {
        icon: "Palette",
        title: "Brand Identity",
        description: "Logo design, color schemes, typography, and complete brand identity development."
      },
      {
        icon: "Clock",
        title: "Quick Launch",
        description: "Fast-track restaurant setup services for urgent openings and franchise launches."
      }
    ]
  },

  portfolio: {
    title: "Our Restaurant Projects",
    subtitle: "Successful restaurant brandings and setups we've completed.",
    items: [
      {
        title: "Modern Cafe Setup",
        tag: "Cafe Branding",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
        alt: "Modern cafe interior setup"
      },
      {
        title: "Fine Dining Restaurant",
        tag: "Premium Setup",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Fine dining restaurant interior"
      },
      {
        title: "Food Court Stall",
        tag: "Quick Service",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop",
        alt: "Food court stall setup"
      },
      {
        title: "Pizza Restaurant",
        tag: "Casual Dining",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
        alt: "Pizza restaurant interior"
      },
      {
        title: "Coffee Shop Chain",
        tag: "Franchise Setup",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop",
        alt: "Coffee shop chain setup"
      },
      {
        title: "Fast Food Outlet",
        tag: "QSR Setup",
        image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1200&auto=format&fit=crop",
        alt: "Fast food outlet branding"
      }
    ]
  },

  recentWork: {
    title: "Recent Restaurant Setups",
    subtitle: "Latest projects across cafes, restaurants, and food courts",
    items: [
      {
        title: "Premium Cafe Launch",
        location: "Connaught Place",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Mall Food Court",
        location: "DLF Mall",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Fine Dining Setup",
        location: "Golf Course Road",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },

  pricing: {
    title: "Package Pricing",
    subtitle: "Affordable restaurant branding packages for every budget",
    items: [
      {
        name: "Startup Package",
        price: "₹1,50,000",
        unit: "complete setup",
        description: "Basic branding package for small cafes and startups",
        features: ["Logo design", "Basic signage", "Menu boards", "Interior graphics"]
      },
      {
        name: "Premium Package",
        price: "₹3,50,000",
        unit: "complete setup",
        description: "Complete branding solution for established restaurants",
        features: ["Complete brand identity", "Interior design", "Exterior signage", "Staff uniforms", "Marketing materials"],
        popular: true
      },
      {
        name: "Enterprise Package",
        price: "₹6,00,000",
        unit: "complete setup",
        description: "Full-scale branding for fine dining and chains",
        features: ["Complete brand strategy", "Premium materials", "Custom furniture", "Lighting design", "Digital menus"]
      }
    ]
  },

  process: {
    title: "Our Process",
    subtitle: "From concept to grand opening",
    steps: [
      {
        number: "01",
        title: "Concept Development",
        description: "Understanding your vision and creating a comprehensive branding strategy."
      },
      {
        number: "02",
        title: "Design & Planning",
        description: "Detailed design work including layouts, color schemes, and material selection."
      },
      {
        number: "03",
        title: "Production & Setup",
        description: "Manufacturing and professional installation of all branding elements."
      },
      {
        number: "04",
        title: "Grand Opening Support",
        description: "Final touches and support for your restaurant's successful launch."
      }
    ]
  },

  cta: {
    title: "Ready to Launch Your Restaurant?",
    subtitle: "Get a complete branding package tailored to your concept",
    buttonText: "Get Free Consultation"
  },

  footer: {
    description: "Professional restaurant branding and setup services. Helping food businesses create memorable dining experiences.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#work" },
      { label: "Packages", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ]
  },

  seo: {
    title: "FoodSpace Branding Co. — Restaurant Branding & Setup Services",
    description: "Complete restaurant branding and setup services for cafes, restaurants, and food courts. Professional interior design and brand identity development.",
    keywords: ["restaurant branding", "cafe setup", "food court design", "restaurant interior", "brand identity", "restaurant launch"]
  }
};