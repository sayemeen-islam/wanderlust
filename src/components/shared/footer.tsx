"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "My Profile", href: "#profile" },
];

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-2.063-2.065 2.064 2.064 0 0 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

const socials = [
  { label: "X (Twitter)", href: "https://x.com", icon: XLogo },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInLogo },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramLogo },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-8 sm:pt-16">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Wanderlust
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-xs text-neutral-400">
              Subscribe for exclusive travel deals and inspiration
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-brand">
                Thanks for subscribing! Check your inbox soon.
              </p>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
                className="relative mt-4"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                  className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 pr-11 pl-3 text-sm text-white transition-colors outline-none placeholder:text-neutral-500 focus:border-brand"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-sm p-1 text-neutral-400 transition-colors hover:text-brand"
                >
                  <Send className="size-4" />
                </button>
              </form>
            )}
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Support" links={supportLinks} />

          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-neutral-400">
                <a href="tel:+17988901622" className="transition-colors hover:text-white">
                  798 890 1622
                </a>
              </li>
              <li className="text-sm text-neutral-400">
                <a
                  href="mailto:info@wanderlust.com"
                  className="transition-colors hover:text-white"
                >
                  info@wanderlust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
