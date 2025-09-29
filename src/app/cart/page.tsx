'use client';

import { useCart } from '@/lib/cart-context';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  const { state: cartState, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (cartState.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any millets to your cart yet. 
              Explore our premium collection and add some nutritious millets!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link
                href="/products"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
              <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
            </div>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 transition-colors text-sm"
            >
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Cart Items ({cartState.itemCount})
                  </h2>
                  <div className="space-y-4">
                    {cartState.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="text-3xl">{item.image}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-green-600 font-bold">₹{item.price}/kg</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-800">
                            ₹{item.price * item.quantity}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 transition-colors mt-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{cartState.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">₹0</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-bold text-green-600">₹{cartState.total}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold mb-4">
                  Proceed to Checkout
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  Secure checkout powered by Razorpay
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Our Millets?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-semibold text-gray-800 mb-1">Organic & Natural</h4>
                <p className="text-sm text-gray-600">Grown without harmful pesticides</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👨‍🌾</div>
                <h4 className="font-semibold text-gray-800 mb-1">Farmer Direct</h4>
                <p className="text-sm text-gray-600">Directly sourced from our farmers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold text-gray-800 mb-1">Premium Quality</h4>
                <p className="text-sm text-gray-600">Carefully selected and processed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
