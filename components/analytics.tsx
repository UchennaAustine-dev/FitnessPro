"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This would be replaced with actual analytics code
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    console.log(`Page view: ${url}`);

    // Track page view
    const trackPageView = () => {
      console.log("Tracking page view:", url);
      // In a real app, this would call your analytics service
      // Example: vercelAnalytics.track('page_view', { path: url })
    };

    trackPageView();
  }, [pathname, searchParams]);

  return null;
}
