import { AdUnit } from "./ad-unit";

interface ParallaxAdProps {
  className?: string;
}

export function ParallaxAd({ className }: ParallaxAdProps) {
  return (
    <AdUnit
      className={className}
      parallax={1}
      sizesDesktop="200x200,250x250,300x250,336x280,700x300,728x90"
      sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,336x280,360x100,360x50"
    />
  );
}
