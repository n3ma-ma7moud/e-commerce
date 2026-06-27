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

export default async function products() {
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/products');
  const data : ProductsResponse = await response .json();
  return <>
  <h2>Products</h2>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {data.data.map((product) => (
      <div key={product._id} className=" p-2 rounded-lg ">
        <Card>
        <div className="-m-3">
          <img src ={product.imageCover} alt={product.title} width={200} height={150} className="w-full" />
        </div>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      </div>
    ))}
  </div>

  </>
}
