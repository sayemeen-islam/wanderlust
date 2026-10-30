import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const searchFields = [
  { label: "Location", value: "Address, City or Zip" },
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0–$3500" },
  { label: "People", value: "5–10" },
];

export default function Banner() {
  return (
    <section className="relative isolate flex min-h-[600px] flex-1 flex-col overflow-hidden bg-neutral-900 sm:min-h-[660px] lg:min-h-[740px]">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/25" />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="w-full font-heading text-4xl leading-[1.05] font-normal tracking-tight text-white sm:text-6xl lg:text-8xl">
          <span className="block">Discover Your</span>
          <span className="block">Next Adventure</span>
        </h1>

        <p className="mt-5 w-full max-w-xl text-sm leading-relaxed text-white/90 sm:text-base lg:mt-6 lg:text-xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/destinations"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-brand px-5 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-7 sm:text-sm"
          >
            Explore Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex h-12 w-full items-center justify-center bg-white/15 px-5 text-xs font-semibold tracking-[0.16em] text-white uppercase ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-7 sm:text-sm"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* otherlink-bar pinned to the end (bottom) of the banner */}
      <div className="relative z-10 mt-auto ">
        <div className="w-full bg-white/25 backdrop-blur-md">
          <div
            role="search"
            aria-label="Search trips"
            className="grid grid-cols-2 gap-px sm:grid-cols-4 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr_0.7fr]"
          >
            {searchFields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col justify-center border-l border-0.5 border-white/70 px-5 py-4 text-left sm:px-6 lg:py-8"
              >
                <span className="text-xs font-semibold text-white sm:text-sm">
                  {field.label}
                </span>
                <span className="mt-1 text-[11px] text-white/80 sm:text-xs">
                  {field.value}
                </span>
              </div>
            ))}
            <button
              type="button"
              className="col-span-2 flex min-h-16 items-center justify-center bg-brand px-8 text-base font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-white sm:col-span-4 lg:col-span-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
