export const formatPrice = (price: number | string): string => {
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : price

  return parsedPrice.toFixed(2)
}

export const calculateSubtotal = (items: Array<{ price: number; quantity: number }>) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.slice(0, limit) + '..'
  }
  
  return text
}
