import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative isolate flex min-h-[340px] items-center justify-center overflow-hidden bg-neutral-900">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        <h2 className="font-heading text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#destinations"
          className="group mt-8 inline-flex h-12 items-center gap-2 bg-white px-8 text-xs font-semibold tracking-[0.16em] text-neutral-900 uppercase transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
        >
          Book Your Trip Today
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
