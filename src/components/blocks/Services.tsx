import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/config";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{config.services.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{config.services.subtitle}</p>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {config.services.items.map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <Card key={service.title} className="rounded-2xl">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    <CardTitle className="text-sm sm:text-base">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground sm:text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
