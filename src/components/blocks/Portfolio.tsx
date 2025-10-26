import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { portfolio } from "@/data/portfolio";
import { config } from "@/config";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Section id="work" className="bg-slate-50">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{config.portfolio.title}</h2>
            <p className="mt-2 text-muted-foreground">{config.portfolio.subtitle}</p>
          </div>
          <a href={`mailto:${config.brand.email}?subject=Share%20Portfolio&body=Please%20send%20your%20latest%20portfolio.`} className="self-start rounded-2xl border px-4 py-2 text-sm font-medium sm:self-auto">Request Full Portfolio</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border bg-white">
              <div className="relative aspect-video w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-glass px-3 py-1 text-xs font-medium">
                <span>{p.tag}</span>
              </div>
              <div className="absolute bottom-3 right-3 text-xs font-semibold text-white drop-shadow">{p.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
