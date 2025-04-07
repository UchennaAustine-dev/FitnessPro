import { AdUnit } from "./ad-unit";

interface StickyAdProps {
  className?: string;
}

export function StickyAd({ className }: StickyAdProps) {
  return (
    <AdUnit
      className={className}
      sticky={1}
      sizesDesktop="200x200,250x250,300x250,336x280,468x60,678x60,728x90,870x200,970x250,970x90"
      sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
    />
  );
}
