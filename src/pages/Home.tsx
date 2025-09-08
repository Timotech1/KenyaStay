import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Hotel, UtensilsCrossed, Star, Users, MapPin } from 'lucide-react';
import SearchSection from '../components/SearchSection';

const Home: React.FC = () => {
  const features = [
    {
      icon: Hotel,
      title: 'Premium Hotels',
      description: 'From luxury lodges in Maasai Mara to beachfront resorts in Malindi',
    },
    {
      icon: UtensilsCrossed,
      title: 'Authentic Restaurants',
      description: 'Experience the best of Kenyan cuisine and international flavors',
    },
    {
      icon: Star,
      title: 'Verified Reviews',
      description: 'Real reviews from travelers who have experienced Kenya',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Curated by locals who know the hidden gems of Kenya',
    },
  ];

  const popularDestinations = [
    {
      name: 'Nairobi',
      image: 'https://images.pexels.com/photos/5644988/pexels-photo-5644988.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: 145,
      restaurants: 230,
    },
    {
      name: 'Mombasa',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: 89,
      restaurants: 156,
    },
    {
      name: 'Maasai Mara',
      image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: 34,
      restaurants: 45,
    },
    {
      name: 'Diani Beach',
      image: 'https://images.pexels.com/photos/1619807/pexels-photo-1619807.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: 67,
      restaurants: 89,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="text-orange-500"> Kenya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            From the savanna to the coast, find your perfect stay and dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hotels"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Find Hotels
            </Link>
            <Link
              to="/restaurants"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Discover Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <SearchSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KenyaStay?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We connect you with the authentic heart of Kenya through carefully curated accommodations and dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Explore Kenya's most beloved locations for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.hotels} hotels, {destination.restaurants} restaurants</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Kenya?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of Kenya through our platform
          </p>
          <Link
            to="/stories"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Read Their Stories
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;