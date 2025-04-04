"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!consent) {
      setError("Please agree to receive fitness tips");
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setEmail("");
      setConsent(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Get 3 Free Workouts Weekly
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join 10,000+ fitness enthusiasts receiving personalized workout plans,
          nutrition tips, and exclusive content.
        </p>

        {success ? (
          <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg">
            <p className="font-medium">Thanks for subscribing!</p>
            <p className="text-sm mt-1">
              Check your inbox for a confirmation email and your first free
              workout.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
              />
              <label htmlFor="consent" className="text-sm">
                I agree to receive fitness tips and updates via email
              </label>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy and will never share your information. You
              can unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
