





export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productsId: string }>
}) {
  const { productsId } = await params

  return (
    <div>
      <h2>ProductDetails</h2>
      <p>ID: {productsId}</p>
    </div>
  )
}
