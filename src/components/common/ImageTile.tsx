import Image from "next/image";

export default function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
