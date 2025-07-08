import { Search, ShoppingCart, User, Menu, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navbar text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">StudentMart</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search textbooks, electronics, dorm essentials..."
                  className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <Link href="/cart" className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="hidden md:block">Cart</span>
              </Link>
              <Link href="/account" className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
                <User className="h-6 w-6" />
                <span className="hidden md:block">Account</span>
              </Link>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Campus Shopping Hub
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Everything you need for student life, delivered to your dorm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Shop Now
            </button>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-text-dark">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Textbooks', icon: '📚', color: 'bg-primary-100' },
              { name: 'Electronics', icon: '💻', color: 'bg-accent-100' },
              { name: 'Dorm Essentials', icon: '🏠', color: 'bg-highlight' },
              { name: 'Fashion', icon: '👕', color: 'bg-success' },
            ].map((category) => (
              <div
                key={category.name}
                className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="font-semibold text-text-dark">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-text-dark">
              Featured Products
            </h3>
            <div className="flex items-center space-x-2 text-accent-500">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Trending Now</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Calculus Textbook',
                price: '$45.99',
                rating: 4.8,
                image: '📖',
                badge: 'Bestseller'
              },
              {
                name: 'Wireless Earbuds',
                price: '$29.99',
                rating: 4.6,
                image: '🎧',
                badge: 'Hot Deal'
              },
              {
                name: 'Dorm Room Lamp',
                price: '$19.99',
                rating: 4.7,
                image: '💡',
                badge: 'New'
              },
              {
                name: 'Student Planner',
                price: '$12.99',
                rating: 4.9,
                image: '📅',
                badge: 'Popular'
              },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-4 text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-highlight text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-text-dark mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent-500">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-text-muted">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navbar text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">StudentMart</h4>
              <p className="text-gray-300">
                Your trusted campus e-commerce platform for all student needs.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/textbooks" className="hover:text-white transition-colors">Textbooks</Link></li>
                <li><Link href="/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                <li><Link href="/dorm" className="hover:text-white transition-colors">Dorm Essentials</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 StudentMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
