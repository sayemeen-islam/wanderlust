import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical. Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
  {
    quote:
      '"Santorini Was A Dream Come True. The Sunset Cruises, Cave Hotels And Local Cuisine Were Flawlessly Arranged From Start To Finish."',
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "/images/traveler-elena.jpg",
  },
  {
    quote:
      '"Kyoto In Cherry Blossom Season Was Breathtaking. Our Guide Knew Every Hidden Temple And Garden Away From The Crowds."',
    name: "David Okafor",
    location: "London, UK",
    image: "/images/traveler-david.jpg",
  },
  {
    quote:
      '"Marrakech Was Sensory Overload In The Best Way. The Riads, The Markets And The Desert Camp Were All Seamlessly Organized."',
    name: "Priya Sharma",
    location: "Toronto, Canada",
    image: "/images/traveler-priya.jpg",
  },
  {
    quote:
      '"Patagonia Trekking Was The Adventure Of A Lifetime. Every Trail, Lodge And Transfer Was Handled With Incredible Care And Precision."',
    name: "Lucas Meyer",
    location: "Berlin, Germany",
    image: "/images/traveler-lucas.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Carousel
          opts={{ align: "start", slidesToScroll: 1 }}
          className="w-full"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="text-left">
              <h2 className="font-heading text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-neutral-500 sm:text-base">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <CarouselPrevious className="static size-10 border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand" />
              <CarouselNext className="static size-10 border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand" />
            </div>
          </div>

          <CarouselContent className="mt-10 sm:mt-12">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="basis-full md:basis-1/2">
                <figure className="flex h-full overflow-hidden border border-neutral-200 bg-white">
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <blockquote className="text-sm leading-relaxed font-medium text-neutral-800 lg:text-base">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 pt-2">
                      <span className="text-brand text-sm font-medium">
                        — {t.name}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-400">
                        {t.location}
                      </span>
                    </figcaption>
                  </div>
                  <div className="relative w-32 shrink-0 sm:w-40 lg:w-44">
                    <Image
                      src={t.image}
                      alt={`Portrait of ${t.name}`}
                      fill
                      sizes="(min-width: 768px) 176px, 128px"
                      className="object-cover object-top"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
