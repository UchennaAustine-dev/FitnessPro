import { AdUnit } from "./ad-unit";

interface BillboardAdProps {
  className?: string;
}

export function BillboardAd({ className }: BillboardAdProps) {
  return (
    <AdUnit
      className={className}
      slot={4}
      sizesDesktop="200x200,250x250,300x250,336x280,400x350,700x300,728x90,750x400"
      sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,336x280,360x100,360x50"
    />
  );
}
