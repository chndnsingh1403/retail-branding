"use client";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import GradientBg from "@/components/layout/GradientBg";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, MessagesSquare, MapPin } from "lucide-react";
import { brand } from "@/data/brand";
import { config } from "@/config";
import Image from "next/image";

export default function Hero() {
  return (
    <Section id="home" className="relative">
      <GradientBg />
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <MapPin className="mr-1 h-3 w-3" /> {brand.cities.join(" • ")}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {config.hero.title.line1} <span className={`bg-gradient-to-r ${config.theme.gradients.primary} bg-clip-text`}>{config.hero.title.highlighted1}</span> &
              <br />
              {config.hero.title.line2} <span className={`bg-gradient-to-r ${config.theme.gradients.secondary} bg-clip-text`}>{config.hero.title.highlighted2}</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {config.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" href={`https://wa.me/${brand.whatsapp}?text=Hi%20${encodeURIComponent(brand.name)}%2C%20I%20need%20${encodeURIComponent(config.industry.tagline.toLowerCase())}.`} className="rounded-2xl shadow">
                <span className="inline-flex items-center"><MessagesSquare className="mr-2 h-4 w-4" /> {config.hero.ctaText.primary}</span>
              </Button>
              <Button asChild variant="outline" size="lg" href={`tel:${brand.phone}`} className="rounded-2xl">
                <span className="inline-flex items-center"><Phone className="mr-2 h-4 w-4" /> {config.hero.ctaText.secondary} {brand.phone}</span>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {config.hero.benefits.map((benefit, index) => (
                <span key={index} className="inline-flex items-center"><CheckCircle2 className="mr-1 h-4 w-4"/>{benefit}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-white shadow-xl">
              <Image
                src={config.hero.heroImage.src}
                alt={config.hero.heroImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />

              <div className="absolute bottom-3 left-3 rounded-full bg-glass px-3 py-1 text-xs font-medium">{config.hero.recentWork}</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
