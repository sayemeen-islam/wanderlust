import Link from "next/link";
import { Suspense } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import MyBookingCard from "@/components/Booking/MyBookingCard";
import type { TBooking } from "@/lib/type";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

export default function MyBookingsPage() {
  return (
    <main id="bookings" className="flex-1 bg-white py-12 sm:py-16 mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
          My Bookings
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Manage and view your upcoming travel plans
        </p>

        <Suspense fallback={<BookingsListFallback />}>
          <BookingsList />
        </Suspense>
      </div>
    </main>
  );
}

async function BookingsList() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;

  if (!user?.email) {
    return (
      <div className="mt-10 rounded-xl p-8 text-center ring-1 ring-foreground/10">
        <p className="text-sm text-neutral-600">
          Please log in to view your bookings.
        </p>
        <Link
          href="/login"
          className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const bookings = await fetchBookings(user.email);

  if (bookings.length === 0) {
    return (
      <div className="mt-10 rounded-xl p-8 text-center ring-1 ring-foreground/10">
        <p className="text-sm text-neutral-600">
          You haven&apos;t made any bookings yet.
        </p>
        <Link
          href="/destinations"
          className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
        >
          Explore Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-4 sm:mt-10">
      {bookings.map((booking, index) => (
        <MyBookingCard
          key={booking?._id  ?? index}
          booking={booking}
        />
      ))}
    </div>
  );
}

async function fetchBookings(email: string): Promise<TBooking[]> {
  const token = await getTokenFromServer()
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? (data as TBooking[]) : [];
  } catch (error) {
    console.error("Failed to load bookings:", error);
    return [];
  }
}

function BookingsListFallback() {
  return (
    <div className="mt-10 flex animate-pulse flex-col gap-4">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="h-44 rounded-xl bg-neutral-200 sm:h-36"
        />
      ))}
    </div>
  );
}
