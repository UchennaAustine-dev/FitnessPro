import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">FitnessPro</h3>
            <p className="text-slate-300 mb-4">
              Expert fitness advice, workout plans, and nutrition tips for all
              levels.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-slate-300 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-slate-300 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-slate-300 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="text-slate-300 hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts"
                  className="text-slate-300 hover:text-primary"
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/nutrition"
                  className="text-slate-300 hover:text-primary"
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/category/strength-training"
                  className="text-slate-300 hover:text-primary"
                >
                  Strength Training
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/cardio"
                  className="text-slate-300 hover:text-primary"
                >
                  Cardio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/hiit"
                  className="text-slate-300 hover:text-primary"
                >
                  HIIT
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/nutrition"
                  className="text-slate-300 hover:text-primary"
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/recovery"
                  className="text-slate-300 hover:text-primary"
                >
                  Recovery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-slate-300 mb-4">
              Get 3 free workouts weekly and stay updated with our latest
              fitness tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white"
                required
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="gdpr" className="rounded" required />
                <label htmlFor="gdpr" className="text-sm text-slate-300">
                  I agree to receive fitness tips
                </label>
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} FitnessPro. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
