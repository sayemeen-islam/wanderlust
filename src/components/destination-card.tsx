import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type Destination = {
  _id: string;
  name: string;
  country: string;
  price: number;
  duration: string;
  rating: number;
  imageUrl: string;
};

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const { name, country, price, duration, rating, imageUrl } = destination;
  console.log("Image props:", { name, imageUrl });
  return (
    <Card className="group rounded-none py-0 shadow-none  ring-0">
      <CardContent className="p-0">
        <div className="relative aspect-[2/1] overflow-hidden ">
          <img
        
            src={imageUrl}
            alt={`${name} | 'Destination Image'`}
            // fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          
          />
       
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
            {rating}
            <Star className="size-3 fill-neutral-900 text-neutral-900" />
          </span>
        </div>

        <div className="pt-3">
          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            <MapPin className="size-3.5 shrink-0" />
            {country}
          </p>

          <div className="mt-1.5 flex items-baseline justify-between gap-2">
            <h3 className="truncate font-heading text-lg font-medium text-neutral-900">
              {name}
            </h3>
            <p className="shrink-0 text-sm whitespace-nowrap text-neutral-900">
              <span className="font-semibold">
                ${price.toLocaleString("en-US")}
              </span>
              <span className="text-[10px] text-neutral-500">/Person</span>
            </p>
          </div>

          <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500">
            <CalendarDays className="size-3.5 shrink-0" />
            {duration}
          </p>

          <Link
            href="#book"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-brand uppercase transition-colors hover:text-brand-dark hover:underline"
          >
            Book Now
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
