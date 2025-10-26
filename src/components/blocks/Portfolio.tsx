import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { config } from "@/config";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Section id="work" className="bg-slate-50">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{config.portfolio.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">{config.portfolio.subtitle}</p>
          </div>
          <a href={`mailto:${config.brand.email}?subject=Share%20Portfolio&body=Please%20send%20your%20latest%20portfolio.`} className="self-start rounded-2xl border px-3 py-2 text-xs font-medium sm:self-auto sm:px-4 sm:text-sm">Request Full Portfolio</a>
        </div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {config.portfolio.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border bg-white sm:rounded-2xl">
              <div className="relative aspect-video w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
              <div className="absolute top-2 left-2 flex items-center gap-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur sm:top-3 sm:left-3 sm:px-3">
                <span className="text-slate-700">{item.tag}</span>
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow-lg sm:bottom-3 sm:left-3 sm:right-3 sm:text-sm" style={{textShadow: '0 1px 3px rgba(0,0,0,0.8)'}}>{item.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
