import { Card } from '@/components/ui/card';
import { ProductsResponse } from '@/Interfaces/productinterface';
import React from 'react'
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react';

export default async function products() {
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/products');
  const data : ProductsResponse = await response .json();
  return <>
  <h2>Products</h2>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {data.data.map((product) => (
      <div key={product._id} className=" p-2 rounded-lg ">
        <Card className="overflow-hidden pt-0">
         <div className="-m-1 -mt-6">
          <img src ={product.imageCover} alt={product.title} width={200} height={150} className="relative z-20  w-full object-cover  " />
        </div> 
         
  <CardHeader>
     <CardDescription>{product.brand.name}</CardDescription>
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.category.name}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex gap-2">
      <Star className="text-amber-400 fill-amber-400" fill="true" />
      <Star className="text-amber-400 fill-amber-400" fill="true" />
      <Star className="text-amber-400 fill-amber-400" fill="true" />
      <Star className="text-amber-400 fill-amber-400" fill="true" />
      <StarHalf className="text-amber-400 fill-amber-400" fill="true" />
    </div>
    <p>{product.ratingsAverage}</p>
  </CardContent>
  <CardFooter>
    <p>{product.price} EGP</p>
  </CardFooter>
</Card>
      </div>
    ))}
  </div>

  </>
}
