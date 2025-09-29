'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Star, Heart, Filter, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Foxtail Millet',
    price: 120,
    originalPrice: 140,
    image: '🌾',
    description: 'Rich in protein and fiber, foxtail millet is perfect for a healthy diet.',
    category: 'Millets',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    benefits: ['High Protein', 'Rich in Fiber', 'Gluten Free', 'Low Glycemic Index']
  },
  {
    id: 2,
    name: 'Finger Millet (Ragi)',
    price: 100,
    originalPrice: 120,
    image: '🌾',
    description: 'Nutrient-dense finger millet with high calcium content, ideal for bone health.',
    category: 'Millets',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    benefits: ['High Calcium', 'Rich in Iron', 'Antioxidants', 'Diabetes Friendly']
  },
  {
    id: 3,
    name: 'Pearl Millet (Bajra)',
    price: 90,
    originalPrice: 110,
    image: '🌾',
    description: 'Energy-rich pearl millet, excellent for heart health and digestion.',
    category: 'Millets',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    benefits: ['Energy Rich', 'Heart Healthy', 'Digestive Health', 'Rich in Magnesium']
  },
  {
    id: 4,
    name: 'Barnyard Millet',
    price: 110,
    originalPrice: 130,
    image: '🌾',
    description: 'Low-calorie barnyard millet, perfect for weight management and diabetes control.',
    category: 'Millets',
    rating: 4.6,
    reviews: 98,
    inStock: true,
    benefits: ['Low Calorie', 'Weight Management', 'Diabetes Control', 'Rich in Phosphorus']
  },
  {
    id: 5,
    name: 'Little Millet',
    price: 115,
    originalPrice: 135,
    image: '🌾',
    description: 'Nutritious little millet with high antioxidant content for overall wellness.',
    category: 'Millets',
    rating: 4.5,
    reviews: 87,
    inStock: true,
    benefits: ['High Antioxidants', 'Rich in B-Vitamins', 'Easy to Digest', 'Energy Boosting']
  },
  {
    id: 6,
    name: 'Kodo Millet',
    price: 125,
    originalPrice: 145,
    image: '🌾',
    description: 'Ancient grain kodo millet, known for its medicinal properties and nutrition.',
    category: 'Millets',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    benefits: ['Medicinal Properties', 'High Fiber', 'Rich in Minerals', 'Anti-inflammatory']
  }
];

export default function Products() {
  const { state: cartState, dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Our Premium Millets
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our range of nutritious and sustainably grown millet varieties, 
              directly from our farmers in Kolar, Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full sm:w-64"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{filteredProducts.length} products found</span>
              <Link href="/cart" className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartState.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartState.itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">₹{product.price}/kg</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}/kg</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm text-green-600 font-medium">
                        Save ₹{product.originalPrice - product.price}/kg
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Why Choose Our Millets?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our millets are grown with care and commitment to quality, sustainability, and farmer welfare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Organic & Natural',
                description: 'Grown without harmful pesticides and chemicals'
              },
              {
                icon: '👨‍🌾',
                title: 'Farmer Direct',
                description: 'Directly sourced from our member farmers'
              },
              {
                icon: '🏆',
                title: 'Premium Quality',
                description: 'Carefully selected and processed for best quality'
              },
              {
                icon: '💚',
                title: 'Sustainable',
                description: 'Environmentally friendly farming practices'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience Premium Millets?
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of satisfied customers who have made the switch to healthy, 
              sustainable millets from Antharaganga FPO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Shopping
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
              >
                Bulk Orders
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
