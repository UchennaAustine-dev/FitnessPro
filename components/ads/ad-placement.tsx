"use client";

import { AdScript } from "./ad-script";

interface AdPlacementProps {
  adId: string;
  className?: string;
}

export function AdPlacement({ adId, className = "" }: AdPlacementProps) {
  return (
    <div className={`ad-container ${className}`}>
      <div id={`foremediaads-${adId}`}></div>
      <AdScript adId={adId} type="placement" />
    </div>
  );
}
