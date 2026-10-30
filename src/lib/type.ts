export type TDestination = {
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

export type TBooking = {
   _id: string
  username: string
  email: string
  image: string
  destinationId:string
  name: string
  country: string
  category: string
  price: string
  duration: string
  departureDate: string
  imageUrl: string
  description: string
  bookingDate: string
};