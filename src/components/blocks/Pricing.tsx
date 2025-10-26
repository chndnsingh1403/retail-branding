import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/config";

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-white">
      <Container>
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{config.pricing.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{config.pricing.subtitle}</p>
        </div>
        
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:overflow-visible md:pb-0">
          {config.pricing.items.map((item, i) => (
            <Card key={i} className={`flex-shrink-0 w-72 rounded-xl sm:w-auto sm:rounded-2xl ${item.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
              {item.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 sm:-top-3">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium sm:px-3 sm:text-sm">Popular</span>
                </div>
              )}
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 sm:h-5 sm:w-5">₹</div>
                  <CardTitle className="text-sm sm:text-base">{item.name}</CardTitle>
                </div>
                <div className="mt-2">
                  <span className="text-xl font-bold sm:text-2xl">{item.price}</span>
                  <span className="text-xs text-muted-foreground ml-1 sm:text-sm">{item.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">{item.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground sm:text-sm">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green-500">✓</span>
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
