import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">KenyaStay</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover the best hotels and restaurants across Kenya. From the bustling streets of Nairobi 
              to the beautiful beaches of Mombasa, we help you find the perfect stay and dining experience.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/hotels" className="hover:text-orange-500 transition-colors">Hotels</a></li>
              <li><a href="/restaurants" className="hover:text-orange-500 transition-colors">Restaurants</a></li>
              <li><a href="/stories" className="hover:text-orange-500 transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@kenyastay.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 KenyaStay. All rights reserved. Discover the beauty of Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;