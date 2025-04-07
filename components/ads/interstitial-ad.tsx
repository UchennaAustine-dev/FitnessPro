import { AdUnit } from "./ad-unit";

interface InterstitialAdProps {
  className?: string;
  number?: 1 | 2;
}

export function InterstitialAd({ className, number = 1 }: InterstitialAdProps) {
  return (
    <AdUnit
      className={className}
      interstitial={number}
      sizesDesktop="1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,700x300,728x500,728x90,750x400,750x480,870x200,970x250,970x90"
      sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
    />
  );
}
