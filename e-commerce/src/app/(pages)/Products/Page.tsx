import { ProductsResponse } from '@/Interfaces/productinterface';
import React from 'react'

export default async function products() {
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/products');
  const data : ProductsResponse = await response .json();
  return <>
  <h2>Products</h2>
  


  
  </>
}
