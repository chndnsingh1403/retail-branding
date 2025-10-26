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
    recentWork: "Recent installs • CP, Ambience, DLF, GIP",
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
        title: "Mall Store Window Branding",
        tag: "Window Graphics",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        alt: "Mall store window branding installation"
      },
      {
        title: "Retail Store Facade Signage",
        tag: "Facade Branding",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
        alt: "Retail store facade signage"
      },
      {
        title: "Shopping Mall Directory",
        tag: "Wayfinding",
        image: "https://images.unsplash.com/photo-1555529902-4904937b749d?q=80&w=1200&auto=format&fit=crop",
        alt: "Shopping mall directory system"
      },
      {
        title: "Retail Interior Branding",
        tag: "Interior Graphics",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        alt: "Retail interior branding graphics"
      },
      {
        title: "Fashion Store Display",
        tag: "Display Graphics",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        alt: "Fashion store display graphics"
      },
      {
        title: "Mall Kiosk Branding",
        tag: "Kiosk Design",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
        alt: "Mall kiosk branding design"
      }
    ]
  },

  recentWork: {
    title: "Recent Mall Installations",
    subtitle: "Featured projects across CP, Ambience Mall, DLF, GIP and other premium locations",
    items: [
      {
        title: "CP Store Branding",
        location: "Connaught Place",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
        alt: "CP store branding installation"
      },
      {
        title: "Ambience Mall Signage",
        location: "Ambience Mall, Gurgaon",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        alt: "Ambience Mall signage installation"
      },
      {
        title: "DLF Mall Graphics",
        location: "DLF Malls",
        image: "https://images.unsplash.com/photo-1555529902-4904937b749d?q=80&w=800&auto=format&fit=crop",
        alt: "DLF Mall graphics installation"
      },
      {
        title: "GIP Store Installation",
        location: "Great India Place",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        alt: "GIP store installation"
      },
      {
        title: "Fashion Outlet Branding",
        location: "Delhi NCR",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
        alt: "Fashion outlet branding"
      },
      {
        title: "Electronics Store Display",
        location: "Mall Installation",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=800&auto=format&fit=crop",
        alt: "Electronics store display"
      },
      {
        title: "Food Court Branding",
        location: "Multiple Malls",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        alt: "Food court branding"
      },
      {
        title: "Jewelry Store Graphics",
        location: "Premium Mall",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
        alt: "Jewelry store graphics"
      },
      {
        title: "Sports Store Installation",
        location: "Metro Mall",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
        alt: "Sports store installation"
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