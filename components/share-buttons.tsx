"use client";

import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const fullUrl = `https://fitnesspro.com${url}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl);
    toast.success("Link copied to clipboard");
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        fullUrl
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        fullUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        fullUrl
      )}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col gap-2 my-6">
      <h4 className="text-sm font-medium mb-2">Share</h4>
      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={shareOnTwitter}
        >
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={shareOnFacebook}
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={shareOnLinkedin}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start"
          onClick={handleCopyLink}
        >
          <Link2 className="mr-2 h-4 w-4" />
          Copy Link
        </Button>
      </div>
    </div>
  );
}
