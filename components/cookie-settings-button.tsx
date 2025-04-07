"use client";

import { useEffect } from "react";

export function CookieSettingsButton() {
  useEffect(() => {
    const button = document.getElementById("open-cookie-settings");

    if (button) {
      button.addEventListener("click", () => {
        if (typeof window !== "undefined" && window.CMP_GDPR) {
          window.CMP_GDPR.showSettings();
        }
      });
    }

    return () => {
      if (button) {
        button.removeEventListener("click", () => {});
      }
    };
  }, []);

  return null;
}
