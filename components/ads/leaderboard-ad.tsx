import { AdUnit } from "./ad-unit";

interface LeaderboardAdProps {
  className?: string;
}

export function LeaderboardAd({ className }: LeaderboardAdProps) {
  return (
    <AdUnit
      className={className}
      slot={3}
      sizesDesktop="728x90,970x90"
      sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
    />
  );
}
