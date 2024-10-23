import ProductSkeleton from "./ProductSkeleton"
import { getProducts } from "@/lib/actions/products"

export default async function Products() {
  const products = await getProducts()

  return (
    <div className="gap-8 grid justify-items-center grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
      <ProductSkeleton products={products} />
    </div>
  )
}
