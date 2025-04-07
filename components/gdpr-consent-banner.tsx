"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function GDPRConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("gdpr-consent");

    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    // Set consent in localStorage
    localStorage.setItem("gdpr-consent", "all");
    setShowBanner(false);

    // If the CMP API from the script is available, use it
    if (typeof window !== "undefined" && window.CMP_GDPR) {
      window.CMP_GDPR.acceptAll();
    }
  };

  const acceptNecessary = () => {
    // Set consent in localStorage
    localStorage.setItem("gdpr-consent", "necessary");
    setShowBanner(false);

    // If the CMP API from the script is available, use it
    if (typeof window !== "undefined" && window.CMP_GDPR) {
      window.CMP_GDPR.acceptNecessary();
    }
  };

  const openSettings = () => {
    // If the CMP API from the script is available, use it
    if (typeof window !== "undefined" && window.CMP_GDPR) {
      window.CMP_GDPR.showSettings();
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t shadow-lg p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={openSettings}>
              Cookie Settings
            </Button>
            <Button variant="outline" size="sm" onClick={acceptNecessary}>
              Necessary Only
            </Button>
            <Button size="sm" onClick={acceptAll}>
              Accept All
            </Button>
          </div>
          <button
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowBanner(false)}
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
