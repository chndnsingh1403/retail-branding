import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pricing } from "@/data/pricing";
import { config } from "@/config";

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-white">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{config.pricing.title}</h2>
          <p className="mt-2 text-muted-foreground">{config.pricing.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((item, i) => (
            <Card key={i} className={`rounded-2xl ${item.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
              {item.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</span>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5">₹</div>
                  <CardTitle className="text-base">{item.name}</CardTitle>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{item.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
