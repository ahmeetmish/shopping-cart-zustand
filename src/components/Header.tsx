'use client'

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import useCartStore from "@/store/cartStore"

export default function Header() {
  const items = useCartStore((state) => state.items)
  const openCart = useCartStore((state) => state.openCart)

  return (
    <header className="w-full py-4 gap-4 flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl font-bold">Shopping Cart with Zustand</h1>
      <div className="relative cursor-pointer" onClick={openCart}>
        <ShoppingCart />
        <div className="z-10 absolute -top-1 -right-1 flex items-center justify-center size-5 bg-emerald-50 rounded-full">
          <p className="text-sm">
            {items.length}
          </p>
        </div>
      </div>
    </header>
  )
}
