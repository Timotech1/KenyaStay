import React from 'react';
import { Star, MapPin, Calendar, Quote } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  author: string;
  location: string;
  date: string;
  image: string;
  rating: number;
  excerpt: string;
  content: string;
  category: 'safari' | 'beach' | 'culture' | 'food';
}

const Stories: React.FC = () => {
  const stories: Story[] = [
    {
      id: 1,
      title: 'An Unforgettable Safari Experience in Maasai Mara',
      author: 'Sarah Johnson',
      location: 'Maasai Mara National Reserve',
      date: '2024-11-15',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      excerpt: 'Witnessing the Great Migration was a dream come true. The luxury tented camp provided the perfect base for our adventure.',
      content: 'Our three-day safari in Maasai Mara exceeded every expectation. From the moment we arrived at the luxury tented camp, we were immersed in the wild beauty of Kenya. The early morning game drives revealed the incredible diversity of wildlife - lions lazing in the shade, elephants crossing the Mara River, and the breathtaking sight of thousands of wildebeest during the Great Migration. The Maasai guides shared their deep knowledge of the land and animals, making every moment educational and magical. The evening sundowners with views over the endless savanna created memories that will last a lifetime.',
      category: 'safari',
    },
    {
      id: 2,
      title: 'Paradise Found at Diani Beach Resort',
      author: 'Marcus Williams',
      location: 'Diani Beach',
      date: '2024-10-28',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      excerpt: 'Crystal clear waters, white sand beaches, and incredible hospitality made our honeymoon absolutely perfect.',
      content: 'Diani Beach was the perfect choice for our honeymoon. The resort staff went above and beyond to make our stay special, from the flower petals on our bed to the private beach dinner under the stars. We spent our days snorkeling in the crystal-clear Indian Ocean, where we encountered colorful fish and coral reefs. The dhow sailing trip at sunset was magical - the traditional boat glided silently over the calm waters while the sky turned brilliant shades of orange and pink. The Swahili cuisine at the beachside restaurant was exceptional, with fresh seafood caught daily by local fishermen.',
      category: 'beach',
    },
    {
      id: 3,
      title: 'Cultural Immersion in Nairobi: A City of Contrasts',
      author: 'Amara Ochieng',
      location: 'Nairobi',
      date: '2024-12-02',
      image: 'https://images.pexels.com/photos/5644988/pexels-photo-5644988.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
      excerpt: 'From bustling markets to world-class museums, Nairobi offers a fascinating blend of traditional and modern Kenya.',
      content: 'Nairobi surprised me with its vibrant energy and cultural richness. The National Museum provided incredible insights into Kenyas history and diverse communities. Walking through the Maasai Market, I was amazed by the skilled craftsmanship of local artisans - from beautiful beadwork to intricate wood carvings. The contrast between the modern city center and traditional neighborhoods like Kibera was eye-opening. Dining at Carnivore restaurant was an adventure in itself, trying various game meats in a lively atmosphere. The David Sheldrick Wildlife Orphanage was deeply moving, seeing baby elephants being cared for before their return to the wild.',
      category: 'culture',
    },
    {
      id: 4,
      title: 'A Culinary Journey Through Coastal Kenya',
      author: 'Chef Isabella Rodriguez',
      location: 'Mombasa & Coast',
      date: '2024-11-20',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      excerpt: 'The fusion of Arabic, Indian, and African flavors in coastal Kenyan cuisine creates an unforgettable gastronomic experience.',
      content: 'As a professional chef, I was blown away by the complexity and richness of coastal Kenyan cuisine. The influence of centuries of trade with Arabia and India has created a unique culinary identity. At Tamarind Dhow, dining while floating on the Indian Ocean was surreal - the fresh lobster curry was perfection. In Old Town Mombasa, I learned to cook pilau rice from a local grandmother, understanding how each spice tells a story of cultural exchange. The coconut-based curries, fresh seafood, and tropical fruits created flavor combinations I had never experienced. Each meal was a celebration of heritage and hospitality.',
      category: 'food',
    },
    {
      id: 5,
      title: 'Solo Adventure in Samburu: Finding Peace in the Wild',
      author: 'David Chen',
      location: 'Samburu National Reserve',
      date: '2024-10-15',
      image: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
      excerpt: 'Traveling solo to Samburu taught me about resilience, both of the wildlife and within myself.',
      content: 'My solo journey to Samburu was transformative. The rugged landscape of the reserve, with its red earth and acacia trees, felt like stepping into another world. The unique wildlife here - reticulated giraffes, Grevy\'s zebras, and Somali ostriches - were unlike anything I had seen in other parks. The Samburu people\'s deep connection to their land was inspiring. Spending evenings by the campfire, listening to the sounds of the African night, gave me time for reflection and inner peace. The lodge staff became like family, sharing stories and ensuring I never felt alone. This trip reminded me that sometimes the best adventures happen when you step outside your comfort zone.',
      category: 'safari',
    },
    {
      id: 6,
      title: 'Family Fun at the Kenyan Coast',
      author: 'The Johnson Family',
      location: 'Malindi',
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      excerpt: 'Our family vacation in Malindi created memories that our kids will treasure forever.',
      content: 'Malindi proved to be the perfect destination for our family vacation. The kids were thrilled by the marine park, where we saw dolphins playing in the waves and colorful fish during our snorkeling adventure. The resort\'s kids club kept them entertained while my husband and I enjoyed some relaxation time. The highlight was visiting the Gede Ruins, where our children became junior archaeologists exploring the ancient Swahili settlement. The local community was incredibly welcoming - our kids learned basic Swahili words and played football with local children on the beach. The cultural exchange was beautiful to witness, and the natural beauty of the coast provided the perfect backdrop for family bonding.',
      category: 'beach',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'safari': return 'bg-green-100 text-green-800';
      case 'beach': return 'bg-blue-100 text-blue-800';
      case 'culture': return 'bg-purple-100 text-purple-800';
      case 'food': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Stories from Kenya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from travelers who have discovered the magic of Kenya. 
            Let their stories inspire your next adventure.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stories.map((story) => (
            <article key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Story Image */}
              <div className="relative h-64">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded text-sm font-semibold ${getCategoryColor(story.category)}`}>
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {story.title}
                </h2>

                {/* Author and Location Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{story.author}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(story.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{story.rating}/5</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{story.location}</span>
                </div>

                {/* Excerpt */}
                <div className="mb-4">
                  <Quote className="h-5 w-5 text-orange-400 mb-2" />
                  <p className="text-gray-700 italic">"{story.excerpt}"</p>
                </div>

                {/* Full Content */}
                <div className="prose prose-sm text-gray-700">
                  <p>{story.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Share Your Kenya Story</h2>
          <p className="text-xl mb-6 opacity-90">
            Have you experienced the magic of Kenya? We'd love to hear about your adventure!
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;