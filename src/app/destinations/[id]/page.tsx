import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const benefits = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const defaultHighlights = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
];


export default function DestinationDetailsPage({ params }: {params:Promise<{id:string}>}) {

  return (
    <main className="flex-1 bg-white py-10 sm:py-12 mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="size-4" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-9 border-neutral-300 px-4"
            >
              <Pencil data-icon="inline-start" />
              Edit
            </Button>
            <Button
              variant="outline"
              className="h-9 border-destructive/40 px-4 text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 data-icon="inline-start" />
              Cancel
            </Button>
          </div>
        </div>

        <Suspense fallback={<DetailsFallback />}>
          <DestinationDetails params={params} />
        </Suspense>
      </div>
    </main>
  );
}

type DestinationData = {
  _id?: string;
  name?: string;
  country?: string;
  category?: string;
  price?: number | string;
  duration?: string;
  departureDate?: string;
  rating?: number;
  reviews?: number;
  imageUrl?: string;
  description?: string;
  highlights?: unknown;
};

async function DestinationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const destination = (await fetchDestination(id)) as DestinationData | null;
  if (!destination) {
    notFound();
  }

  const name = destination.name ?? "Untitled Destination";
  const country = destination.country ?? "";
  const category = destination.category ?? "";
  const price = parsePrice(destination.price);
  const duration = destination.duration ?? "";
  const departureDate = destination.departureDate ?? "";
  const rating =
    typeof destination.rating === "number" ? destination.rating : null;
  const reviews = typeof destination.reviews === "number" ? destination.reviews : null;
  const imageUrl = destination.imageUrl ?? "";
  const description = destination.description ?? "";
  const highlights = Array.isArray(destination.highlights)
    ? (destination.highlights as string[])
    : defaultHighlights;

  return (
    <>
      <div className="relative mt-8 aspect-[5/2] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={imageUrl}
          alt={`${name} destination image`}
          className="h-full w-full object-cover"
          fill
          sizes="100vw"
        />
      </div>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_360px] mb-10">
        <div>
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <MapPin className="size-4" />
            {country}
          </p>

          <h1 className="mt-2 font-heading text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl">
            {name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {rating !== null && (
              <span className="flex items-center gap-1.5">
                <Star className="size-4 fill-emerald-500 text-emerald-500" />
                <span className="font-semibold text-neutral-900">
                  {rating.toFixed(1)}
                </span>
                {reviews !== null && (
                  <span className="text-neutral-500">({reviews} reviews)</span>
                )}
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4 text-neutral-500" />
                <span className="font-medium text-neutral-900">
                  {duration}
                </span>
              </span>
            )}
            {category && (
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                {category}
              </span>
            )}
          </div>

          <h2 className="mt-10 font-heading text-xl font-normal text-neutral-900 sm:text-2xl">
            Overview
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500">
              {description}
            </p>
          )}

          {highlights.length > 0 && (
            <>
              <h2 className="mt-8 font-heading text-xl font-normal text-neutral-900 sm:text-2xl">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <Card className="h-fit rounded-xl shadow-none">
          <CardContent>
            <span className="text-xs text-neutral-500">Starting from</span>
            <p className="mt-1 text-3xl font-semibold text-brand">
              {price !== null ? `$${price.toLocaleString("en-US")}` : "—"}
            </p>
            <span className="text-xs text-neutral-500">per person</span>

            <Input
              type="date"
              defaultValue={departureDate}
              aria-label="Select departure date"
              className="mt-5 h-11"
            />

            <Button className="mt-3 h-11 w-full bg-brand hover:bg-brand-dark">
              Book Now
              <ArrowRight data-icon="inline-end" />
            </Button>

            <ul className="mt-5 flex flex-col gap-2.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-xs text-neutral-600"
                >
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function parsePrice(value: number | string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

async function fetchDestination(id: string) {
  try {
    const res = await fetch(
      `http://localhost:5000/destination/${id}`
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to load destination:", error);
    return null;
  }
}

function DetailsFallback() {
  return (
    <div className="mt-8 animate-pulse">
      <div className="aspect-[5/2] w-full rounded-xl bg-neutral-200" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-4">
          <div className="h-4 w-24 rounded bg-neutral-200" />
          <div className="h-10 w-72 rounded bg-neutral-200" />
          <div className="h-4 w-48 rounded bg-neutral-200" />
          <div className="mt-6 h-4 w-28 rounded bg-neutral-200" />
          <div className="h-24 w-full max-w-2xl rounded bg-neutral-200" />
          <div className="h-4 w-28 rounded bg-neutral-200" />
          <div className="h-16 w-full max-w-2xl rounded bg-neutral-200" />
        </div>
        <div className="h-80 rounded-xl bg-neutral-200" />
      </div>
    </div>
  );
}
