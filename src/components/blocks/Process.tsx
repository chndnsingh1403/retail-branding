import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { config } from "@/config";

export default function Process() {
  return (
    <Section id="process" className="bg-slate-50">
      <Container>
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{config.process.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{config.process.subtitle}</p>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-4">
          {config.process.steps.map((step, i) => (
            <div key={i} className="rounded-xl border bg-white p-3 sm:rounded-2xl sm:p-5">
              <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white sm:h-8 sm:w-8 sm:text-sm">{step.number}</div>
              <div className="font-medium text-xs mb-1 sm:text-sm sm:mb-2">{step.title}</div>
              <div className="text-xs text-muted-foreground">{step.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
