import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { config } from "@/config";

export default function Process() {
  return (
    <Section id="process" className="bg-slate-50">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{config.process.title}</h2>
          <p className="mt-2 text-muted-foreground">{config.process.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {config.process.steps.map((step, i) => (
            <div key={i} className="rounded-2xl border bg-white p-5">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{step.number}</div>
              <div className="font-medium text-sm mb-2">{step.title}</div>
              <div className="text-xs text-muted-foreground">{step.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
