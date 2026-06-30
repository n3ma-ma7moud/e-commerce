import { Card } from '@/components/ui/card';
import { ProductsResponse } from '@/Interfaces/productinterface';
import React from 'react';
import NextLink from 'next/link';

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart, Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function Products() {
  const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
  const data: ProductsResponse = await response.json();

  return (
    <>
      <h2>Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.data.map((product) => (
          <div key={product._id} className="p-2 rounded-lg">
            <Card className="overflow-hidden pt-0 h-full flex flex-col">

              <NextLink href={`/products/${product.id}`}>
                <div className="-m-1 -mt-6">
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    width={200}
                    height={150}
                    className="relative z-20 w-full object-cover"
                  />
                </div>

                <CardHeader className="mt-2">
                  <CardDescription>{product.brand.name}</CardDescription>
                  <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                  <CardDescription>{product.category.name}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex gap-2">
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <Star className="text-amber-400 fill-amber-400" />
                    <StarHalf className="text-amber-400 fill-amber-400" />
                  </div>

                  <p>{product.ratingsAverage}</p>
                  <p>{product.price} EGP</p>
                </CardContent>
              </NextLink>

              <CardFooter className="gap-2 mt-auto">
                <Button className="grow">Add To Cart</Button>
                <Heart />
              </CardFooter>

            </Card>
          </div>
        ))}
      </div>
    </>
  );
}