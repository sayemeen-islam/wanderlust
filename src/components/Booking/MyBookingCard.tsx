'use client'
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Check,
  Clock,
  Eye,
  Hourglass,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TBooking } from "@/lib/type";
import { useRouter } from "next/navigation";



function formatDeparture(value: string | undefined) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function MyBookingCard({ booking }: { booking: TBooking }) {
 const departure = formatDeparture(booking.departureDate);
 const bookingId = booking._id ?? "";
 const price = Number(booking?.price );
  const viewHref = booking.destinationId
    ? `/destinations/${booking.destinationId}`
    : "#";
    const router=useRouter()

 const handleCancelBooking=async()=>{
   const res=await fetch(`http://localhost:5000/my-booking/${bookingId}`,{
    method:'DELETE'
   })
   const result=await res.json()
   console.log(result);
   
   if(result.deletedCount>0){
      router.refresh()
    }
 }

  return (
    <article className="flex flex-col gap-4 rounded-xl p-4 ring-1 ring-foreground/10 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
      <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:h-28 sm:w-44">
       <Image src={booking?.imageUrl} alt={booking?.name} width={200} height={100} className="overflow-hidden object-cover"></Image>
      </div>

      <div className="min-w-0 flex-1">
 

        <h3 className="mt-1.5 font-heading text-xl font-medium text-neutral-900">
          {booking?.name}
        </h3>

        <div className="mt-1.5 flex flex-col gap-1 text-xs text-neutral-500">
          {departure && (
            <p className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 shrink-0" />
              Departure {departure}
            </p>
          )}
          {bookingId && <p>Booking ID: {bookingId}</p>}
        </div>

        {Number.isFinite(price) && (
          <p className="mt-1.5 text-2xl font-semibold text-brand">
            ${price.toLocaleString("en-US")}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3 sm:self-center">
        <Button
          type="button"
          variant="outline"
          className="h-9 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={handleCancelBooking}
        >
          <Trash2 data-icon="inline-start" />
          Cancel
        </Button>
        <Button
  nativeButton={false}
  render={<Link href={`${viewHref}`} />}
  className="h-9 bg-brand hover:bg-brand-dark"
>
  <Eye data-icon="inline-start" />
  View
</Button>
      </div>
    </article>
  );
}
