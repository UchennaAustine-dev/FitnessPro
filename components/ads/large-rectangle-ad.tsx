import { AdUnit } from "./ad-unit";

interface LargeRectangleAdProps {
  className?: string;
}

export function LargeRectangleAd({ className }: LargeRectangleAdProps) {
  return (
    <AdUnit
      className={className}
      slot={2}
      sizesDesktop="120x600,160x600,200x200,250x250,300x250,300x600,336x280"
      sizesMobile="160x600,200x200,250x250,300x250,300x600,336x280"
    />
  );
}
