"use client";

import { useEffect } from "react";

interface CustomScriptProps {
  scriptId: string;
}

export function CustomScript({ scriptId }: CustomScriptProps) {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://platform.foremedia.net/code/59490/custom${scriptId}`;

    // Append script to document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [scriptId]);

  return null;
}
