// Industry Configuration Types
export interface IndustryConfig {
  // Industry Identity
  industry: {
    type: string;
    name: string;
    tagline: string;
    description: string;
    keywords: string[];
  };

  // Brand Information
  brand: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    cities: string[];
    website?: string;
  };

  // Theme Configuration
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    gradients: {
      primary: string;
      secondary: string;
    };
  };

  // Hero Section
  hero: {
    title: {
      line1: string;
      highlighted1: string;
      line2: string;
      highlighted2: string;
    };
    subtitle: string;
    ctaText: {
      primary: string;
      secondary: string;
    };
    benefits: string[];
    recentWork: string;
    heroImage: {
      src: string;
      alt: string;
    };
  };

  // Services Configuration
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Portfolio Configuration
  portfolio: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      tag: string;
      image: string;
      alt?: string;
    }>;
  };

  // Recent Work Section
  recentWork: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      location: string;
      image: string;
      alt?: string;
    }>;
  };

  // Pricing Configuration
  pricing: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      price: string;
      unit: string;
      description: string;
      features: string[];
      popular?: boolean;
    }>;
  };

  // Process Configuration
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: Array<{
      label: string;
      href: string;
    }>;
    socialLinks?: Array<{
      platform: string;
      url: string;
    }>;
  };

  // SEO Configuration
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}