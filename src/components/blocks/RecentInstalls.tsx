import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { recentInstalls } from "@/data/portfolio";
import { config } from "@/config";
import Image from "next/image";

export default function RecentInstalls() {
  return (
    <Section id="recent-installs" className="bg-white">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{config.recentWork.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            {config.recentWork.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentInstalls.map((install, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={install.image} 
                  alt={install.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-semibold text-sm">{install.title}</h3>
                <p className="text-xs text-white/80">{install.location}</p>
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
                {config.industry.type === 'retail-branding' ? 'Mall Install' : 
                 config.industry.type === 'restaurant' ? 'Restaurant Setup' : 
                 'Project'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href={`mailto:${config.brand.email}?subject=${encodeURIComponent(config.industry.name)}%20Portfolio&body=Please%20send%20detailed%20portfolio%20of%20recent%20projects.`} 
            className="inline-flex items-center rounded-2xl border bg-white px-6 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md"
          >
            View Complete Portfolio
          </a>
        </div>
      </Container>
    </Section>
  );
}