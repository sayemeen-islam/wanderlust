"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Beach",
  "Mountain",
  "Adventure",
  "Cultural",
  "City Tour",
  "Wildlife",
  "Luxury",
];

const initialForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

export default function AddDestinationPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof typeof initialForm) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setSubmitted(false);
    };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("New travel package:", form);
    

    const res=await fetch('http://localhost:5000/add-destination',{
      method:'POST',
      headers:{
       "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    const result=await res.json()
    console.log(result,'response from server');
    
    if(result.insertedId){

      setSubmitted(true);
    }
    setForm(initialForm);
  };

  const handleCancel = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <main className=" bg-[#fbfcfd] py-20 sm:py-30 mt-10">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-medium sm:text-4xl">
          Add New Travel Package
        </h1>

        <Card className="mx-auto mt-10 max-w-2xl shadow-sm rounded-sm">
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-name">Destination Name</Label>
                <Input
                  id="destination-name"
                  placeholder="Bali, Indonesia"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="h-10 bg-[#f7f9fa]"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    placeholder="e.g., Indonesia"
                    value={form.country}
                    onChange={handleChange("country")}
                    className="h-10 bg-[#f7f9fa]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, category: value as string }))
                    }
                  >
                    <SelectTrigger
                      id="category"
                      className="h-10 w-full bg-[#f7f9fa]"
                    >
                      <SelectValue placeholder="Beach" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price">Price (USD)</Label>
                  <Input
                    id="price"
                    type="number"
                    min={0}
                    placeholder="e.g., 1299"
                    value={form.price}
                    onChange={handleChange("price")}
                    className="h-10 bg-[#f7f9fa]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 7 Days/6 Nights"
                    value={form.duration}
                    onChange={handleChange("duration")}
                    className="h-10 bg-[#f7f9fa]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="departure-date">Departure Date</Label>
                <Input
                  id="departure-date"
                  type="date"
                  value={form.departureDate}
                  onChange={handleChange("departureDate")}
                  className="h-10 bg-[#f7f9fa]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={form.imageUrl}
                  onChange={handleChange("imageUrl")}
                  className="h-10 bg-[#f7f9fa]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the travel experience..."
                  rows={5}
                  value={form.description}
                  onChange={handleChange("description")}
                  className="bg-[#f7f9fa]"
                  required
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="h-10 border-destructive/40 px-5 text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 data-icon="inline-start" />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-10 bg-brand px-5 text-white hover:bg-brand-dark"
                >
                  <Plus data-icon="inline-start" />
                  Add Travel Package
                </Button>
              </div>

              {submitted && (
                <p className="text-right text-sm text-green-600">
                  Travel package added successfully.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
