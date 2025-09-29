import Link from 'next/link';
import { ArrowRight, Users, Leaf, TrendingUp, Award, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Empowering Farmers,
                  <span className="text-green-600 block">Enriching Lives</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antharaganga Millet Farmer Producer Company is a government-recognized FPO 
                  dedicated to improving farmers' livelihoods and promoting sustainable millet cultivation in Kolar, Karnataka.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">500+</h3>
                    <p className="text-sm text-gray-600">Farmers</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">15+</h3>
                    <p className="text-sm text-gray-600">Millet Varieties</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">40%</h3>
                    <p className="text-sm text-gray-600">Income Increase</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">5+</h3>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To improve farmers' livelihoods and develop rural sectors through sustainable millet cultivation and collective farming practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Empower Farmers</h3>
              <p className="text-gray-600">
                Supporting small and marginal farmers with resources, training, and market access to improve their livelihoods.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Promote Millets</h3>
              <p className="text-gray-600">
                Championing millet cultivation as a sustainable and nutritious alternative to traditional crops.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Market Access</h3>
              <p className="text-gray-600">
                Connecting farmers directly to consumers through online and offline markets for better prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Premium Millets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of nutritious and sustainably grown millet varieties from the heart of Karnataka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Foxtail Millet', price: '₹120/kg', image: '🌾' },
              { name: 'Finger Millet', price: '₹100/kg', image: '🌾' },
              { name: 'Pearl Millet', price: '₹90/kg', image: '🌾' },
              { name: 'Barnyard Millet', price: '₹110/kg', image: '🌾' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{product.image}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold text-xl mb-4">{product.price}</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Impact</h2>
                <p className="text-xl text-gray-600">
                  See how we're transforming lives and communities through sustainable farming practices.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Improved Livelihoods</h3>
                    <p className="text-gray-600">Average 40% increase in farmer income through better market access and fair pricing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Sustainable Agriculture</h3>
                    <p className="text-gray-600">Promoting eco-friendly farming practices that benefit both farmers and the environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Community Building</h3>
                    <p className="text-gray-600">Creating strong farmer networks and knowledge sharing platforms.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/impact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Learn More About Our Impact
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹2.5Cr</div>
                  <div className="text-gray-600">Annual Turnover</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Millet Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Villages Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-green-100">
              Whether you're a farmer looking to improve your livelihood or a consumer wanting to support sustainable agriculture, 
              we welcome you to be part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Become a Member
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}