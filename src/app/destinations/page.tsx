import DestinationCard, {
  type Destination,
} from "@/components/destination-card";
import { Suspense } from "react";

// const destinations: Destination[] = [
//   {
//     id: "bali-paradise",
//     title: "Bali Paradise",
//     country: "Indonesia",
//     price: 2700,
//     duration: "7 Days/6 Nights",
//     rating: 4.5,
//     imageUrl:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "island-retreat",
//     title: "Island Escape",
//     country: "Maldives",
//     price: 3200,
//     duration: "5 Days/4 Nights",
//     rating: 4.8,
//     imageUrl:
//       "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "mountain-trek",
//     title: "Mountain Trek",
//     country: "Nepal",
//     price: 1850,
//     duration: "10 Days/9 Nights",
//     rating: 4.7,
//     imageUrl:
//       "https://images.unsplash.com/photo-1551632811-56173285d4d9?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "machu-picchu",
//     title: "Inca Trail Discovery",
//     country: "Peru",
//     price: 2100,
//     duration: "6 Days/5 Nights",
//     rating: 4.9,
//     imageUrl:
//       "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "beach-getaway",
//     title: "Beach Getaway",
//     country: "Thailand",
//     price: 1450,
//     duration: "5 Days/4 Nights",
//     rating: 4.4,
//     imageUrl:
//       "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "paris-lights",
//     title: "City of Lights",
//     country: "France",
//     price: 2600,
//     duration: "4 Days/3 Nights",
//     rating: 4.6,
//     imageUrl:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
//   },
// ];

export default async function DestinationsPage() {
  const res = await fetch("http://localhost:5000/destinations");
  const destinations = await res.json();
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

        <p className="mt-8 text-sm text-neutral-500">
          Showing{" "}
          <span className="font-medium text-neutral-900">
            {destinations.length} destinations
          </span>
        </p>

        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination: Destination) => (
            <Suspense key={destination._id} fallback={<h2>Loading</h2>}>
              <DestinationCard
                
                destination={destination}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
