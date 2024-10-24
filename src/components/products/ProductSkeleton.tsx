'use client'

import Image from "next/image"
import { Product } from "@/types"
import { MoonStar } from "lucide-react"
import { formatPrice } from "@/lib/helper"
import useCartStore from "@/store/cartStore"

export default function ProductSkeleton({ products }: { products: Product[] }) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <>
      {
        products.map((product) => {
          const roundedRating = Math.round(product.rating.rate)

          return (
            <div className="w-full max-w-sm flex flex-col justify-between bg-white border border-zinc-200 rounded-lg shadow" key={product.id}>
              <div className="space-y-8 p-8">
                <Image src={product.image} alt={product.title} width={350} height={300} className="h-[250px] min-[400px]:h-[300px] cursor-pointer" />
                <div className="cursor-auto">
                  <h5 className="text-xl font-semibold tracking-tight text-foreground">
                    {product.title}
                  </h5>
                </div>
              </div>
              <div className="px-8 pb-8">
                <div className="flex items-center mt-2.5 mb-4">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, index) => (
                      <MoonStar key={index} className={`w-4 h-4 ${index < roundedRating ? "text-emerald-700" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-4">
                    {product.rating.rate}
                  </span>
                </div>
                <div className="gap-4 min-[400px]:gap-0 flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center justify-between">
                  <span className="text-2xl lg:text-3xl font-bold text-foreground">
                    ${formatPrice(product.price)}
                  </span>
                  <button onClick={() => addToCart(product)} className="w-full min-[400px]:w-max text-white bg-emerald-700 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:outline-none transition-colors duration-300">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
