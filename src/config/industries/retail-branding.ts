import { IndustryConfig } from "@/types/config";

export const retailBrandingConfig: IndustryConfig = {
  industry: {
    type: "retail-branding",
    name: "Retail Branding & Installation",
    tagline: "Professional Store Branding Solutions",
    description: "Complete retail branding, printing, and installation services for malls, stores, and commercial spaces",
    keywords: ["retail branding", "store signage", "mall installation", "commercial printing", "display graphics"]
  },

  brand: {
    name: "Delhi Print & Install Co.",
    phone: "+91-98765-43210",
    whatsapp: "919876543210",
    email: "hello@delhiprintinstall.in",
    cities: ["Delhi", "Gurgaon", "Noida", "Faridabad"],
    website: "https://delhiprintinstall.in"
  },

  theme: {
    primaryColor: "#2563eb", // Blue
    secondaryColor: "#7c3aed", // Purple
    accentColor: "#06b6d4", // Cyan
    backgroundColor: "#ffffff",
    textColor: "#0f172a",
    gradients: {
      primary: "from-blue-600 to-cyan-500",
      secondary: "from-purple-600 to-pink-500"
    }
  },

  hero: {
    title: {
      line1: "Retail",
      highlighted1: "Printing",
      line2: "On‑Site",
      highlighted2: "Installation"
    },
    subtitle: "We print, deliver, and install — fast. Trusted by franchise outlets and mall stores across Delhi NCR.",
    ctaText: {
      primary: "WhatsApp Us",
      secondary: "Call Now"
    },
    benefits: [
      "Same/Next‑Day Options",
      "Mall‑Approved Teams",
      "Competitive Pricing"
    ],
    recentWork: "Recent brand installs • CALIFORNIA BURRITO",
    heroImage: {
      src: "/images/installs/california2.jpg",
      alt: "Professional retail store branding installation in a modern mall"
    }
  },

  services: {
    title: "Our Services",
    subtitle: "Complete retail branding solutions from design to installation",
    items: [
      {
        icon: "Printer",
        title: "Store Branding Prints",
        description: "Window graphics, facade signage, interior displays — premium quality for retail spaces."
      },
      {
        icon: "Wrench",
        title: "Mall Installation Service",
        description: "Professional installation teams for shopping malls, retail stores, and premium outlets."
      },
      {
        icon: "Sparkles",
        title: "Complete Brand Solutions",
        description: "From storefront design to interior graphics, kiosks, directories, and promotional displays."
      },
      {
        icon: "Clock",
        title: "Rapid Project Delivery",
        description: "Fast-track services for store launches, seasonal campaigns, and urgent rebranding needs."
      }
    ]
  },

  portfolio: {
    title: "Our Branding Work",
    subtitle: "Premium retail store branding and mall installations we're proud of.",
    items: [
      {
        title: "Reebok Store Branding",
        tag: "Sports Brand",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
        alt: "Reebok store exterior branding and signage installation"
      },
      {
        title: "Puma Outlet Facade",
        tag: "Facade Branding",
        image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?q=80&w=1200&auto=format&fit=crop",
        alt: "Puma outlet storefront facade branding"
      },
      {
        title: "Reliance Digital Store",
        tag: "Electronics Retail",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
        alt: "Reliance Digital store branding and signage"
      },
      {
        title: "Tanishq Jewelry Store",
        tag: "Luxury Retail",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
        alt: "Tanishq jewelry store exterior branding"
      },
      {
        title: "Nike Store Installation",
        tag: "Brand Signage",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        alt: "Nike store brand signage installation"
      },
      {
        title: "Lifestyle Store Display",
        tag: "Mall Branding",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
        alt: "Lifestyle store display and branding"
      }
    ]
  },

  recentWork: {
    title: "Recent Mall Installations",
    subtitle: "Featured brand outlet projects across CP, Ambience Mall, DLF, GIP and other premium locations",
    items: [
      {
        title: "Reebok Store - CP",
        location: "Connaught Place",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
        alt: "Reebok store exterior branding at Connaught Place"
      },
      {
        title: "Puma Outlet - Ambience",
        location: "Ambience Mall, Gurgaon",
        image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?q=80&w=800&auto=format&fit=crop",
        alt: "Puma outlet storefront at Ambience Mall"
      },
      {
        title: "Reliance Digital - DLF",
        location: "DLF Malls",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
        alt: "Reliance Digital store branding at DLF"
      },
      {
        title: "Tanishq Showroom - GIP",
        location: "Great India Place",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
        alt: "Tanishq jewelry showroom branding at GIP"
      },
      {
        title: "Nike Store - Select City",
        location: "Select City Walk",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
        alt: "Nike store branding installation"
      },
      {
        title: "Lifestyle Store - DLF",
        location: "DLF Mall of India",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
        alt: "Lifestyle store facade branding"
      },
      {
        title: "Samsung Store - Ambience",
        location: "Ambience Mall",
        image: "https://images.unsplash.com/photo-1586901533048-0e856dff2c0d?q=80&w=800&auto=format&fit=crop",
        alt: "Samsung store display installation"
      },
      {
        title: "Adidas Outlet - Phoenix",
        location: "Phoenix MarketCity",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
        alt: "Adidas outlet branding graphics"
      },
      {
        title: "Westside Store - GIP",
        location: "Great India Place",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
        alt: "Westside store exterior branding"
      }
    ]
  },

  pricing: {
    title: "Transparent Pricing",
    subtitle: "Competitive rates for professional retail branding services",
    items: [
      {
        name: "Window Graphics",
        price: "150",
        unit: "per sq ft",
        description: "High-quality vinyl graphics for store windows",
        features: ["Premium vinyl material", "Weather resistant", "Professional installation", "1-year warranty"]
      },
      {
        name: "Facade Signage",
        price: "300",
        unit: "per sq ft",
        description: "Complete storefront branding solutions",
        features: ["Custom design", "Durable materials", "LED options available", "Mall compliance"],
        popular: true
      },
      {
        name: "Interior Displays",
        price: "200",
        unit: "per sq ft",
        description: "Interior branding and promotional displays",
        features: ["Multiple material options", "Quick turnaround", "Professional mounting", "Custom sizes"]
      }
    ]
  },

  process: {
    title: "Our Process",
    subtitle: "From concept to installation in simple steps",
    steps: [
      {
        number: "01",
        title: "Consultation & Design",
        description: "We discuss your requirements and create custom designs that align with your brand."
      },
      {
        number: "02",
        title: "Production & Quality Check",
        description: "High-quality printing with rigorous quality control to ensure perfect results."
      },
      {
        number: "03",
        title: "Professional Installation",
        description: "Expert installation by trained teams ensuring perfect positioning and finish."
      },
      {
        number: "04",
        title: "Final Inspection",
        description: "Complete quality check and handover with maintenance guidelines."
      }
    ]
  },

  cta: {
    title: "Ready to Transform Your Store?",
    subtitle: "Get a free consultation and quote for your retail branding project",
    buttonText: "Get Free Quote"
  },

  footer: {
    description: "Professional retail branding and installation services across Delhi NCR. Trusted by leading brands and mall stores.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ]
  },

  seo: {
    title: "Delhi Print & Install Co. — Retail Printing & Installation (Delhi NCR)",
    description: "Retail printing and on-site installation for malls and high-street stores across Delhi NCR. Vinyl, flex, sunboard, posters — fast turnarounds.",
    keywords: ["retail printing", "mall installation", "store branding", "Delhi NCR", "commercial signage", "display graphics"]
  }
};