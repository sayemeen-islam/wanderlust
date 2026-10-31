'use client'
import type { TDestination } from "@/lib/type";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Trash2, TriangleAlertIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const DeleteDestinationDialog = ({destination}:{destination:TDestination}) => {
  const router=useRouter()
  const handleDeleteDestination=async()=>{
    const token = await getTokenFromClient() 
    const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${destination._id}`,{
      method:'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const result =await res.json()
    console.log(result,'response from server');
    if(result.deletedCount>0){
      router.push('/destinations')
    }
  }

  return (
    <AlertDialog>
  <AlertDialogTrigger render={<Button
                variant="outline"
                className="h-9 border-destructive/40 px-4 text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 data-icon="inline-start" />
                Delete
              </Button>}>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='flex gap-2 items-center'><div className="bg-neutral-400/15 p-2.5 rounded-full"><TriangleAlertIcon className="text-destructive" /></div><span className="text-lg">Delete Travel Package</span></AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete {<span className="font-semibold text-black">&quot;{destination.name}&quot; </span>}? This action cannot be undone and will permanently remove this travel package from the system.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='text-neutral-500 hover:text-neutral-600'>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-destructive/70 hover:bg-destructive' onClick={handleDeleteDestination}><Trash2 data-icon="inline-start"/><span className="mt-1">Delete Package</span></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  );
};

export default DeleteDestinationDialog;