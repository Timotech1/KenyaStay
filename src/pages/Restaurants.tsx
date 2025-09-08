import React, { useState } from 'react';
import { Star, MapPin, Clock, DollarSign, Heart, UtensilsCrossed } from 'lucide-react';
import BookingModal from '../components/BookingModal';

interface Restaurant {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  priceRange: string;
  cuisine: string;
  description: string;
  specialties: string[];
  openHours: string;
  featured: boolean;
}

const Restaurants: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState<'all' | 'kenyan' | 'international' | 'seafood'>('all');

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Carnivore Restaurant',
      location: 'Langata, Nairobi',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      priceRange: '$$$',
      cuisine: 'Kenyan BBQ',
      description: 'World-famous restaurant serving exotic game meat and traditional Kenyan dishes in a unique safari setting.',
      specialties: ['Nyama Choma', 'Game Meat', 'Traditional Sides'],
      openHours: '12:00 PM - 11:00 PM',
      featured: true,
    },
    {
      id: 2,
      name: 'Tamarind Dhow',
      location: 'Mombasa Creek',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      priceRange: '$$$$',
      cuisine: 'Seafood',
      description: 'Luxury floating restaurant offering fresh seafood while cruising the historic Mombasa Creek.',
      specialties: ['Fresh Lobster', 'Swahili Curry', 'Seafood Platter'],
      openHours: '7:00 PM - 10:30 PM',
      featured: true,
    },
    {
      id: 3,
      name: 'Mama Oliech Restaurant',
      location: 'South B, Nairobi',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      priceRange: '$$',
      cuisine: 'Traditional Kenyan',
      description: 'Authentic Kenyan cuisine in a traditional setting, famous for fresh fish and ugali.',
      specialties: ['Fish Stew', 'Ugali', 'Sukuma Wiki'],
      openHours: '11:00 AM - 10:00 PM',
      featured: false,
    },
    {
      id: 4,
      name: 'Talisman Restaurant',
      location: 'Karen, Nairobi',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      priceRange: '$$$',
      cuisine: 'International',
      description: 'Elegant dining in beautiful gardens, offering contemporary cuisine with an African twist.',
      specialties: ['Fusion Cuisine', 'Garden Setting', 'Wine Selection'],
      openHours: '12:00 PM - 11:00 PM',
      featured: true,
    },
    {
      id: 5,
      name: 'Ali Barbours Cave Restaurant',
      location: 'Diani Beach',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      priceRange: '$$$$',
      cuisine: 'Seafood',
      description: 'Unique dining experience in a natural coral cave, 10 meters below ground level.',
      specialties: ['Cave Dining', 'Fresh Seafood', 'Romantic Setting'],
      openHours: '7:00 PM - 11:00 PM',
      featured: true,
    },
    {
      id: 6,
      name: 'Java House',
      location: 'Multiple Locations',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.2,
      priceRange: '$$',
      cuisine: 'Cafe & International',
      description: 'Popular coffee chain offering excellent coffee, fresh pastries, and international dishes.',
      specialties: ['Specialty Coffee', 'Fresh Pastries', 'Casual Dining'],
      openHours: '6:00 AM - 10:00 PM',
      featured: false,
    },
  ];

  const toggleFavorite = (restaurantId: number) => {
    setFavorites(prev => 
      prev.includes(restaurantId) 
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };

  const getPriceLevel = (priceRange: string) => {
    return '💰'.repeat(priceRange.length);
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (filter === 'all') return true;
    if (filter === 'kenyan') return restaurant.cuisine.toLowerCase().includes('kenyan') || restaurant.cuisine.toLowerCase().includes('traditional');
    if (filter === 'international') return restaurant.cuisine.toLowerCase().includes('international') || restaurant.cuisine.toLowerCase().includes('fusion');
    if (filter === 'seafood') return restaurant.cuisine.toLowerCase().includes('seafood');
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Taste the Flavors of Kenya</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From traditional Kenyan cuisine to international delicacies, discover the best dining experiences across Kenya
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'all', label: 'All Restaurants' },
            { key: 'kenyan', label: 'Kenyan Cuisine' },
            { key: 'international', label: 'International' },
            { key: 'seafood', label: 'Seafood' },
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key as any)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === filterOption.key
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-300'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Restaurant Image */}
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(restaurant.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    favorites.includes(restaurant.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(restaurant.id) ? 'fill-current' : ''}`} />
                </button>
                {restaurant.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>
                  <span className="text-sm font-medium">{getPriceLevel(restaurant.priceRange)}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">{restaurant.cuisine}</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.openHours}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {restaurant.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setSelectedRestaurant(restaurant)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <UtensilsCrossed className="h-4 w-4 mr-2" />
                    Make Reservation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedRestaurant && (
        <BookingModal
          type="restaurant"
          item={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
};

export default Restaurants;