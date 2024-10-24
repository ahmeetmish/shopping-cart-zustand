import Cart from "@/components/Cart"
import Products from "@/components/products/Products"

export default function Home() {
  return (
    <div className="py-4">
      <Products />
      <Cart />
    </div>
  )
}
