"use client";

import { useEffect } from "react";

export function NetpubScriptLoader() {
  useEffect(() => {
    const scriptId = "f1211152a08486d9becaf7f54ba7f4be";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://fstatic.netpub.media/static/${scriptId}.min.js?${Date.now()}`;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
