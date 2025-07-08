'use client'

import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  badge?: string
  isOnSale?: boolean
  isFeatured?: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
  onAddToWishlist?: (productId: string) => void
  className?: string
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onAddToWishlist, 
  className 
}: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className={cn(
      "group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300",
      className
    )}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-6xl bg-gray-100">
          {product.image}
        </div>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 right-2">
            <span className="bg-highlight text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {product.isOnSale && discount > 0 && (
          <div className="absolute top-2 left-2">
            <span className="bg-error text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{discount}%
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => onAddToWishlist?.(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-text-dark mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-text-muted">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-accent-500">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-lg text-text-muted line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart?.(product.id)}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
} 