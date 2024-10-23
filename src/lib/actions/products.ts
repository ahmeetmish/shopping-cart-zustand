import { Product } from "@/types"

export async function getProducts(): Promise<Product[]> {
  const productsLimit = 10
  const baselUrl = 'https://fakestoreapi.com/products'
  const mainUrl = `${baselUrl}?limit=${productsLimit}`

  try {
    const response = await fetch(mainUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const products: Product[] = await response.json()
    return products
    
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}
