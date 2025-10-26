export default function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>;
}
