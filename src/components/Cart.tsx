'use client'

import Image from 'next/image'
import useCartStore from '@/store/cartStore'
import { Minus, Plus, X } from 'lucide-react'
import { calculateSubtotal, formatPrice, truncateText } from '@/lib/helper'

export default function Cart() {
  const { items, updateQuantity } = useCartStore((state) => state)
  const isCartOpen = useCartStore((state) => state.isCartOpen)
  const closeCart = useCartStore((state) => state.closeCart)

  const subtotal = calculateSubtotal(items)

  return (
    <div className={`z-10 fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 py-4 bg-white border border-zinc-200 rounded-lg shadow-lg transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
      <div className="flex items-center justify-between px-4 pb-4 border-b border-zinc-200">
        <h2 className="text-lg font-semibold">Your Cart {(items.length > 0) && `(${items.length})`}</h2>
        <button onClick={closeCart}>
          <X className="w-6 h-6 text-foreground hover:text-emerald-700 transition-colors duration-300" />
        </button>
      </div>
      <div className="flex-grow p-4">
        {
          items.map((item, index) => (
            <div className="w-full" key={item.id}>
              <div className="w-full gap-4 flex items-center justify-between">
                <div className="w-full gap-8 flex items-center justify-center">
                  <Image src={item.image} alt={item.title} width={100} height={100} className="!min-w-[100px] !w-[100px] !h-[100px] cursor-pointer" />
                  <div className="w-full">
                    <h5 className="text-lg font-semibold tracking-tight text-foreground">
                      {truncateText(item.title, 42)}
                    </h5>
                    <div className="gap-4 flex items-center justify-between">
                      <span className="font-bold text-emerald-700">
                        ${item.price}
                      </span>
                      <div className="gap-2 flex items-center">
                        <button
                          onClick={() => {updateQuantity(item.id, "decrement")}}
                        >
                          <Minus size={18} className="text-foreground hover:text-emerald-700 transition-colors duration-300" />
                        </button>
                        <span className="font-semibold">
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.id, "increment")}>
                          <Plus size={18} className="text-foreground hover:text-emerald-700 transition-colors duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {
                items.length > 1 && index < items.length - 1 && (
                  <hr className='my-4' />
                )
              }
            </div>
          ))
        }
      </div>
      <div>
        <div className="flex items-center justify-between p-4 border-t border-zinc-200">
          <h2 className="text-lg font-semibold">Total</h2>
          <span className="font-bold text-emerald-700">
            ${formatPrice(subtotal)}
          </span>
        </div>
        <div className='px-4'>
          <button className="w-full text-white bg-emerald-700 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:outline-none transition-colors duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
