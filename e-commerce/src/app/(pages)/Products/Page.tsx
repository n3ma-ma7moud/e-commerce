import { ProductsResponse } from '@/Interfaces/productinterface';
import React from 'react'

export default async function products() {
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/products');
  const data : ProductsResponse = await response .json();
  return <>
  <h2>Products</h2>
  
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data.data.map((product) => (
      <div key={product._id} className=" p-2 rounded-lg ">
        <h2>{product.title}</h2>
      </div>
    ))}
  </div>

  </>
}
