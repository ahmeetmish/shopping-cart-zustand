import { create } from "zustand"
import toast from "react-hot-toast"
import { persist } from "zustand/middleware"
import { CartState, Product } from "@/types"

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      addToCart: (product: Product) => {
        set((state) => {
          const existingProduct = state.items.find((item) => item.id === product.id)

          if (existingProduct) {
            existingProduct.quantity += 1

            toast('The product is already in the cart, only quantity updated.', {
              icon: '⚠️',
            })

            return { items: [...state.items] }

          } else {
            toast('Product successfully added to cart.', {
              icon: '👏',
            })

            const newItems = [
              ...state.items,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
              },
            ]

            return {
              items: newItems,
              isCartOpen: newItems.length === 1,
            }
          }
        })
      },

      removeFromCart: (id: number) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id)

          toast('Product successfully removed from cart.', {
            icon: '👏',
          })

          return {
            items: newItems,
            isCartOpen: newItems.length > 0,
          }
        })
      },

      updateQuantity: (id: number, type: "increment" | "decrement") => {
        const item = get().items.find((item) => item.id === id)
        if (!item) return

        const currentQuantity = item.quantity

        if (currentQuantity === 1 && type === "decrement") {
          get().removeFromCart(id)

        } else {
          const newQuantity = type === "decrement" ? currentQuantity - 1 : currentQuantity + 1

          set((state) => ({
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity: newQuantity } : item
            ),
            
            isCartOpen: state.items.length > 0 || newQuantity > 0,
          }))
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
)

export default useCartStore
