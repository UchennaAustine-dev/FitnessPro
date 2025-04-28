"use client";

import { useEffect } from "react";

interface AdScriptProps {
  adId: string;
  type: "placement" | "custom";
}

export function AdScript({ adId, type }: AdScriptProps) {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    if (type === "placement") {
      script.src = `https://platform.foremedia.net/code/59490/${adId}`;
    } else if (type === "custom") {
      script.src = `https://platform.foremedia.net/code/59490/custom${adId}`;
    }

    // Append script to document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [adId, type]);

  return null;
}
