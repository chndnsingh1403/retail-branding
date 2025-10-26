import Container from "@/components/layout/Container";
import { brand } from "@/data/brand";
import { config } from "@/config";

export default function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <div className="text-lg font-semibold">{brand.name}</div>
            <div className="text-sm text-muted-foreground">{config.footer.description}</div>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
