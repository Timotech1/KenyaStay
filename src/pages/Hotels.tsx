import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Utensils, Waves, Heart } from 'lucide-react';
import BookingModal from '../components/BookingModal';

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  amenities: string[];
  featured: boolean;
}

const Hotels: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState<'all' | 'luxury' | 'budget' | 'safari'>('all');

  const hotels: Hotel[] = [
    {
      id: 1,
      name: 'Maasai Mara Safari Lodge',
      location: 'Maasai Mara National Reserve',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: 250,
      description: 'Experience the ultimate safari adventure with luxury tented accommodation overlooking the Mara River.',
      amenities: ['Game Drives', 'Spa', 'Restaurant', 'WiFi'],
      featured: true,
    },
    {
      id: 2,
      name: 'Serena Beach Resort',
      location: 'Mombasa Coast',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: 180,
      description: 'Stunning beachfront resort with traditional Swahili architecture and world-class amenities.',
      amenities: ['Beach Access', 'Pool', 'Spa', 'WiFi', 'Restaurant'],
      featured: true,
    },
    {
      id: 3,
      name: 'Nairobi Hilton Hotel',
      location: 'Nairobi City Center',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      price: 120,
      description: 'Modern business hotel in the heart of Nairobi with panoramic city views.',
      amenities: ['Business Center', 'Gym', 'Restaurant', 'WiFi', 'Parking'],
      featured: false,
    },
    {
      id: 4,
      name: 'Diani Reef Beach Resort',
      location: 'Diani Beach',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      price: 200,
      description: 'Tropical paradise with pristine white sand beaches and crystal-clear waters.',
      amenities: ['Beach Access', 'Water Sports', 'Pool', 'Restaurant', 'WiFi'],
      featured: true,
    },
    {
      id: 5,
      name: 'Samburu Sopa Lodge',
      location: 'Samburu National Reserve',
      image: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      price: 190,
      description: 'Authentic African safari experience in the heart of Samburu with traditional architecture.',
      amenities: ['Game Drives', 'Cultural Tours', 'Restaurant', 'Pool'],
      featured: false,
    },
    {
      id: 6,
      name: 'Karen Blixen Coffee Garden',
      location: 'Karen, Nairobi',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      price: 85,
      description: 'Charming boutique hotel set in beautiful gardens with colonial-era charm.',
      amenities: ['Garden Views', 'Coffee Shop', 'WiFi', 'Parking'],
      featured: false,
    },
  ];

  const toggleFavorite = (hotelId: number) => {
    setFavorites(prev => 
      prev.includes(hotelId) 
        ? prev.filter(id => id !== hotelId)
        : [...prev, hotelId]
    );
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'restaurant': return <Utensils className="h-4 w-4" />;
      case 'beach access': return <Waves className="h-4 w-4" />;
      default: return null;
    }
  };

  const filteredHotels = hotels.filter(hotel => {
    if (filter === 'all') return true;
    if (filter === 'luxury') return hotel.price >= 200;
    if (filter === 'budget') return hotel.price < 120;
    if (filter === 'safari') return hotel.location.toLowerCase().includes('mara') || hotel.location.toLowerCase().includes('samburu');
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Kenya's Finest Hotels</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From luxury safari lodges to beachfront resorts, find your perfect accommodation across Kenya
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'all', label: 'All Hotels' },
            { key: 'luxury', label: 'Luxury ($200+)' },
            { key: 'budget', label: 'Budget (Under $120)' },
            { key: 'safari', label: 'Safari Lodges' },
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

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Hotel Image */}
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(hotel.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    favorites.includes(hotel.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(hotel.id) ? 'fill-current' : ''}`} />
                </button>
                {hotel.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{hotel.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 4).map((amenity, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-600">
                    ${hotel.price}
                    <span className="text-sm text-gray-600 font-normal">/night</span>
                  </div>
                  <button
                    onClick={() => setSelectedHotel(hotel)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedHotel && (
        <BookingModal
          type="hotel"
          item={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
  );
};

export default Hotels;