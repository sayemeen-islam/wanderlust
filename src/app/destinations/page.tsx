
import DestinationCard from "@/components/destination/destination-card";
import {TDestination } from "@/lib/type";
import { Suspense } from "react";

export default function DestinationsPage() {
  return (
    <main
      id="destinations"
      className="flex-1 bg-[#fbfcfd] py-12 sm:py-16 mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-heading text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Explore All Destinations
          </h1>
          <p className="mt-2 text-sm text-neutral-500 sm:text-base">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        <Suspense
          fallback={
            <p className="mt-8 text-sm text-neutral-500">
              Loading destinations…
            </p>
          }
        >
          <DestinationList />
        </Suspense>
      </div>
    </main>
  );
}

async function DestinationList() {
  const res = await fetch("http://localhost:5000/destinations");
  const destinations = await res.json();
  return (
    <>
      <p className="mt-8 text-sm text-neutral-500">
        Showing{" "}
        <span className="font-medium text-neutral-900">
          {destinations.length} destinations
        </span>
      </p>

      <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination: TDestination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </>
  );
}
