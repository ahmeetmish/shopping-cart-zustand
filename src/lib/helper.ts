export const calculateSubtotal = (items: Array<{ price: number; quantity: number }>) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.slice(0, limit) + '..'
  }
  
  return text
}