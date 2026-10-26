import { Headphones, Map, ShieldCheck, type LucideIcon } from "lucide-react";

const highlights: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-brand/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="font-heading text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-sm text-neutral-500 sm:text-base">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-10 grid gap-6 text-left sm:mt-12 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col bg-white p-6 transition-colors hover:bg-neutral-50 sm:p-8"
            >
              <Icon className="size-8 text-brand sm:size-9" strokeWidth={1.6} />
              <h3 className="mt-6 font-heading text-xl font-normal text-neutral-900 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
