"use client";

import { useState } from "react";
import { Plus, Save, SaveIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import type { TDestination } from "@/lib/type";
import { useRouter } from "next/navigation";
import { Toast } from "@base-ui/react";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const categories = [
  "Beach",
  "Mountain",
  "Adventure",
  "Cultural",
  "City Tour",
  "Wildlife",
  "Luxury",
];


const EditDetailsDialog = ({destination}:{ destination:TDestination
}) => {
 
  const [form, setForm] = useState(destination);
  const [submitted, setSubmitted] = useState(false);
  const router=useRouter()

  const handleChange =
    (field: keyof typeof destination) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setSubmitted(false);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("New travel package:", form);
    const {_id,...updatedData}=form    
       const token = await getTokenFromClient()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${destination._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedData),
    });

    const result = await res.json();
    console.log(result, "response from server");
    if(result.modifiedCount>0){
      router.refresh()
    }
    
    if (result.insertedId) {
      setSubmitted(true);
    }
  
  };

  const handleCancel = () => {
    setForm(destination);
    setSubmitted(false);
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button variant="outline" className="h-9 border-neutral-300 px-4">
              <Pencil data-icon="inline-start" />
              Edit
            </Button>
          }
        />
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Travel Package</DialogTitle>
            <DialogDescription>
              Make changes to the travel package details below
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-name">Destination Name</Label>
                <Input
                  id="destination-name"
                  placeholder="Bali, Indonesia"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="h-8 bg-[#f7f9fa] rounded-sm"
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
                    className="h-8 bg-[#f7f9fa] rounded-sm"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(value) =>
                      setForm((prev) => ({
                        ...prev,
                        category: value as string,
                      }))
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
                    className="h-8 bg-[#f7f9fa] rounded-sm"
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
                    className="h-8 bg-[#f7f9fa] rounded-sm"
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
                  className="h-8 bg-[#f7f9fa] rounded-sm"
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
                  className="h-8 bg-[#f7f9fa] rounded-sm"
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
               <DialogClose render={ <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="h-10 border-destructive/40 px-5 text-destructive hover:bg-destructive/10 hover:text-destructive flex items-center"
                >
                  <Trash2 data-icon="inline-start" />
                  <span className="mt-1">Cancel</span>
                </Button>}/>
                <DialogClose render={<Button
                  type="submit"
                  className="h-10 bg-brand px-5 text-white hover:bg-brand-dark flex "
                >
                  <SaveIcon data-icon="inline-start" ></SaveIcon>
                  <span className="mt-1">Save Changes</span>
                </Button>}/>
              </div>

              {submitted && (
                <p className="text-right text-sm text-green-600">
                  
                  Travel package added successfully.
                </p>
              )}
            </form>
          </FieldGroup>
         
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditDetailsDialog;
