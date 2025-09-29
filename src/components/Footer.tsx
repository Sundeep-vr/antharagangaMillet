import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Antharaganga</h3>
                <p className="text-sm text-gray-400">Millet FPO</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering farmers and promoting sustainable agriculture through millet cultivation in Kolar, Karnataka.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products#foxtail-millet" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Foxtail Millet
                </Link>
              </li>
              <li>
                <Link href="/products#finger-millet" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Finger Millet
                </Link>
              </li>
              <li>
                <Link href="/products#pearl-millet" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Pearl Millet
                </Link>
              </li>
              <li>
                <Link href="/products#barnyard-millet" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Barnyard Millet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Kolar, Karnataka<br />
                    India - 563101
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <p className="text-gray-300 text-sm">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <p className="text-gray-300 text-sm">info@antharaganga.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on millet farming and farmer empowerment.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Antharaganga Millet Farmer Producer Company. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Government Recognized Producer Organization (FPO) | Kolar, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
