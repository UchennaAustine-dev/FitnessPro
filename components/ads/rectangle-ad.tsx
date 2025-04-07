import { AdUnit } from "./ad-unit";

interface RectangleAdProps {
  className?: string;
}

export function RectangleAd({ className }: RectangleAdProps) {
  return (
    <AdUnit
      className={className}
      slot={1}
      sizesDesktop="200x200,250x250,300x250,336x280"
      sizesMobile="200x200,250x250,300x250,336x280"
    />
  );
}
