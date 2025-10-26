import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/brand";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold">{brand.name}</a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#work" className="hover:opacity-80">Work</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#process" className="hover:opacity-80">Process</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm" href={`https://wa.me/${brand.whatsapp}`} className="rounded-xl">Get Quote</Button>
        </div>
      </Container>
    </header>
  );
}
