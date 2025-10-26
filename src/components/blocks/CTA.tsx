import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import GradientBg from "@/components/layout/GradientBg";
import { brand } from "@/data/brand";
import { config } from "@/config";
import Image from "next/image";

export default function CTA() {
  return (
    <Section id="contact" className="relative">
      <GradientBg />
      <Container>
        <div className="rounded-3xl border bg-white/80 p-8 backdrop-blur md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{config.cta.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {config.cta.subtitle}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                <li>📍 {brand.cities.join(" • ")}</li>
                <li>📞 {brand.contactPerson ? `${brand.contactPerson}: ${brand.phone}` : brand.phone}</li>
                <li>✉️ {brand.email}</li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-white font-semibold shadow" href={`https://wa.me/${brand.whatsapp}?text=Hi%2C%20I%20have%20an%20inquiry%20about%20${encodeURIComponent(config.industry.tagline.toLowerCase())}.`}>WhatsApp</a>
                <a className="inline-flex items-center rounded-2xl border px-5 py-3 font-semibold" href={`mailto:${brand.email}?subject=${encodeURIComponent(config.industry.name)}%20Inquiry`}>Email Us</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white">
              <Image src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop" alt="Collage of retail print installs" fill className="object-cover" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur">Add your real project photos here</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
