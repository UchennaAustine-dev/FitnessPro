"use client";

import { useEffect, useId } from "react";

interface AdUnitProps {
  className?: string;
  slot?: number;
  sticky?: number;
  interstitial?: number;
  notification?: number;
  parallax?: number;
  sizesDesktop: string;
  sizesMobile: string;
}

export function AdUnit({
  className,
  slot,
  sticky,
  interstitial,
  notification,
  parallax,
  sizesDesktop,
  sizesMobile,
}: AdUnitProps) {
  const id = useId();
  const scriptId = "f1211152a08486d9becaf7f54ba7f4be";

  useEffect(() => {
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://fstatic.netpub.media/static/${scriptId}.min.js?${Date.now()}`;
      document.head.appendChild(script);
    }
  }, []);

  const dataAttributes: Record<string, string> = {
    "data-sizes-desktop": sizesDesktop,
    "data-sizes-mobile": sizesMobile,
  };

  if (slot) dataAttributes["data-slot"] = slot.toString();
  if (sticky) dataAttributes["data-sticky"] = sticky.toString();
  if (interstitial)
    dataAttributes["data-interstitial"] = interstitial.toString();
  if (notification)
    dataAttributes["data-notification"] = notification.toString();
  if (parallax) dataAttributes["data-parallax"] = parallax.toString();

  return (
    <div className={className}>
      <ins className={`adv-${scriptId}`} {...dataAttributes} />
    </div>
  );
}
