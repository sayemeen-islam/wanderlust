"use client";
import { Check, Pencil, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TDestination } from "@/lib/type";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";


const benefits = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const BookingCard = ({ destination }: { destination: TDestination }) => {
  const { price, departureDate } = destination;
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const {_id:destinationId,...destinationData}=destination
  const handleBooking=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const {departureDate}=Object.fromEntries(formData.entries())
    
    const bookingData={
       username:user?.name,
       email:user?.email,
       image:user?.image,
       destinationId:destinationId,
       ...destinationData,
    
       departureDate: departureDate,
       bookingDate:new Date()
    }

    const res=await fetch('http://localhost:5000/booking',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(bookingData)
    })

    const result=await res.json()
    console.log(result,'response from server in booking form');
    
    
  }
  return (
    <Card className="h-fit rounded-xl shadow-none">
      <CardContent>
        <span className="text-xs text-neutral-500">Starting from</span>
        <p className="mt-1 text-3xl font-semibold text-brand">
          {price !== null ? `$${price?.toLocaleString("en-US")}` : "—"}
        </p>
        <span className="text-xs text-neutral-500">per person</span>

        <form onSubmit={handleBooking}>
          <Input
            type="date"
            name='departureDate'
            defaultValue={departureDate}
            aria-label="Select departure date"
            className="mt-5 h-11"
          />

          <Button className="mt-3 h-11 w-full bg-brand hover:bg-brand-dark" type='submit'>
            Book Now
            <ArrowRight data-icon="inline-end" />
          </Button>
        </form>

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
  );
};

export default BookingCard;
