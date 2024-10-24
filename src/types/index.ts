export type Rating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export type CartItem = Omit<Product, 'description' | 'category' | 'rating'> & {
  quantity: number
}

export type CartState = {
  items: CartItem[]
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, type: "increment" | "decrement") => void
}
