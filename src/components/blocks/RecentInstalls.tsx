import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { config } from "@/config";
import Image from "next/image";

export default function RecentInstalls() {
  return (
    <Section id="recent-installs" className="bg-white">
      <Container>
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{config.recentWork.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {config.recentWork.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {config.recentWork.items.map((install, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md sm:rounded-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={install.image} 
                  alt={install.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                <h3 className="font-semibold text-xs sm:text-sm">{install.title}</h3>
                <p className="text-xs text-white/80">{install.location}</p>
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 sm:top-3 sm:right-3">
                {config.industry.type === 'retail-branding' ? 'Mall Install' : 
                 config.industry.type === 'restaurant' ? 'Restaurant Setup' : 
                 'Project'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center sm:mt-8">
          <a 
            href={`mailto:${config.brand.email}?subject=${encodeURIComponent(config.industry.name)}%20Portfolio&body=Please%20send%20detailed%20portfolio%20of%20recent%20projects.`} 
            className="inline-flex items-center rounded-2xl border bg-white px-4 py-2 text-xs font-medium shadow-sm transition-all hover:shadow-md sm:px-6 sm:py-3 sm:text-sm"
          >
            View Complete Portfolio
          </a>
        </div>
      </Container>
    </Section>
  );
}