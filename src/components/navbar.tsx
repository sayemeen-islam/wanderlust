import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "Admin", href: "#admin" },
];

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-current={link.active ? "page" : undefined}
          className={
            mobile
              ? `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  link.active
                    ? "bg-brand/10 font-medium text-brand"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-brand"
                }`
              : `whitespace-nowrap text-sm transition-colors ${
                  link.active
                    ? "font-medium text-brand"
                    : "text-neutral-700 hover:text-brand"
                }`
          }
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export default function Navbar() {
  return (
    <header className="z-20 bg-white absolute top-3  right-3 left-3" >
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-10">
        <div className="flex items-center">
          <details className="group relative lg:hidden">
            <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand [&::-webkit-details-marker]:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute left-0 top-11 z-50 w-56 rounded-xl border border-neutral-200 bg-white p-2 shadow-xl"
            >
              <NavLinks mobile />
              <div className="my-2 h-px bg-neutral-200" />
              <a
                href="#profile"
                className="block rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand"
              >
                Profile
              </a>
              <a
                href="#login"
                className="block rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand"
              >
                Login
              </a>
              <a
                href="#signup"
                className="block rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand"
              >
                Sign Up
              </a>
            </nav>
          </details>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex lg:gap-8"
          >
            <NavLinks />
          </nav>
        </div>

        <Link href="/" aria-label="Wanderlast home" className="justify-self-center">
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            className="h-auto w-[124px] sm:w-[140px] lg:w-[150px]"
          />
        </Link>

        <div className="hidden items-center justify-end gap-3 text-sm sm:flex sm:gap-5 lg:gap-7">
          <a
            href="#profile"
            className="hidden items-center gap-1.5 text-neutral-700 transition-colors hover:text-brand md:flex"
          >
            <User className="size-4" />
            <span>Profile</span>
          </a>
          <a
            href="#login"
            className="text-neutral-700 transition-colors hover:text-brand"
          >
            Login
          </a>
          <a
            href="#signup"
            className="text-neutral-700 transition-colors hover:text-brand"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
