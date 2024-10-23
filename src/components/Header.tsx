import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full py-4 gap-4 flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl font-bold">Shopping Cart with Zustand</h1>
      <div className="gap-4 flex items-center">
        <div className="relative cursor-pointer">
          <ShoppingCart />
          <div className="z-10 absolute -top-1 -right-1 flex items-center justify-center size-5 bg-emerald-50 rounded-full">
            <p className="text-sm">1</p>
          </div>
        </div>
        <Link href="/auth" className="px-4 py-0.5 text-background bg-emerald-700 hover:bg-emerald-800 rounded transition-colors duration-300">
          Auth
        </Link>
      </div>
    </header>
  )
}
