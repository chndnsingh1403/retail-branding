import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { config } from "@/config";

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{config.services.title}</h2>
          <p className="mt-2 text-muted-foreground">{config.services.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5" />
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
