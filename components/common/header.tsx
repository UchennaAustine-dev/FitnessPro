"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: "All Articles", href: "/blog" },
      { label: "Strength Training", href: "/blog/category/strength-training" },
      { label: "Cardio", href: "/blog/category/cardio" },
      { label: "HIIT", href: "/blog/category/hiit" },
      { label: "Nutrition", href: "/blog/category/nutrition" },
      { label: "Recovery", href: "/blog/category/recovery" },
    ],
  },
  {
    label: "Workouts",
    href: "/workouts",
    dropdown: [
      { label: "All Workouts", href: "/workouts" },
      { label: "Strength", href: "/workouts?category=strength" },
      { label: "HIIT", href: "/workouts?category=hiit" },
      { label: "Cardio", href: "/workouts?category=cardio" },
      { label: "Yoga", href: "/workouts?category=yoga" },
      { label: "Mobility", href: "/workouts?category=mobility" },
    ],
  },
  { label: "Nutrition", href: "/nutrition" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Ad Showcase", href: "/ad-showcase" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-2xl font-bold text-primary"
          >
            FitnessPro
          </Link>

          <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                        pathname === item.href ||
                          pathname.startsWith(`${item.href}/`)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href} asChild>
                        <Link
                          href={dropdownItem.href}
                          className={cn(
                            "w-full",
                            pathname === dropdownItem.href &&
                              "font-medium text-primary"
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/subscribe">Subscribe</Link>
            </Button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Improved Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-16 animate-in slide-in-from-top duration-300">
          <div className="container py-6 flex flex-col gap-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-border pb-4">
                {item.dropdown ? (
                  <div className="space-y-3">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary block",
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-2 border-l-2 border-border">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={cn(
                            "text-base transition-colors hover:text-primary block",
                            pathname === dropdownItem.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary block",
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild size="lg" className="mt-4">
              <Link href="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                Subscribe
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
