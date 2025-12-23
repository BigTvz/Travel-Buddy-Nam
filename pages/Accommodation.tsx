import React from 'react';
import { Page } from '../types';

interface AccommodationProps {
  setPage: (page: Page) => void;
  onSelect: (item: any) => void;
}

const Accommodation: React.FC<AccommodationProps> = ({ setPage, onSelect }) => {
  const locations = ['Windhoek', 'Sossusvlei', 'Etosha', 'Swakopmund', 'Skeleton Coast'];
  const types = ['Luxury Lodge', 'Hotel', 'Guesthouse', 'Camping', 'Safari Camp'];
  const amenities = ['Pool', 'Restaurant', 'WiFi', 'Air Conditioning', 'Spa'];

  const properties = [
    {
      id: 1,
      title: 'Desert Quiver Camp',
      location: 'Sossusvlei, Namibia',
      type: 'Luxury Lodge',
      price: 285,
      rating: 4.9,
      reviews: 248,
      description: 'Experience ultimate luxury in the heart of the Namib Desert. Our exclusive lodge offers stunning views of ancient dunes, private plunge pools, and world-class dining.',
      image: '5beb3ee135-de62636509f48fd019c6.png',
      featured: true,
      amenities: ['WiFi', 'Restaurant', 'Pool', 'Spa']
    },
    {
      id: 2,
      title: 'Etosha Safari Lodge',
      location: 'Etosha National Park, Namibia',
      type: 'Safari Camp',
      price: 195,
      rating: 4.7,
      reviews: 182,
      description: 'Prime location at the edge of Etosha National Park. Watch wildlife from your private deck while enjoying authentic safari hospitality and guided game drives.',
      image: 'd71f7c7a0d-0c8fc19c7f2e93df97a5.png',
      featured: false,
      amenities: ['WiFi', 'Restaurant', 'Game Drives', 'Bar']
    },
    {
      id: 3,
      title: 'Atlantic Beach Hotel',
      location: 'Swakopmund, Namibia',
      type: 'Hotel',
      price: 145,
      rating: 4.5,
      reviews: 156,
      description: 'Beachfront hotel in the charming coastal town of Swakopmund. Perfect base for exploring the Skeleton Coast and desert adventures.',
      image: '32cc2b2e01-1e1eda3d7c7d45b08a8e.png',
      featured: false,
      amenities: ['WiFi', 'Restaurant', 'Gym', 'Free Parking']
    },
    {
      id: 4,
      title: 'Windhoek Garden House',
      location: 'Windhoek, Namibia',
      type: 'Guesthouse',
      price: 75,
      rating: 4.8,
      reviews: 94,
      description: 'Cozy guesthouse in the heart of Windhoek. Perfect for budget travelers seeking comfort and authentic local hospitality with easy access to city attractions.',
      image: '1f3e6d4c8a-4b7a2e9f1c8d3e6a5b2f.png',
      featured: false,
      value: true,
      amenities: ['WiFi', 'Breakfast', 'Free Parking', 'Garden']
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section id="page-header-section" className="bg-gradient-to-r from-deepblue to-accent py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <button 
              onClick={() => setPage(Page.HOME)}
              className="text-white/80 hover:text-white transition flex items-center"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>Back to Home
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Accommodation in Namibia</h1>
          <p className="text-white/90 text-lg">Find your perfect place to stay from luxury lodges to budget-friendly options</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside id="filters-sidebar" className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-deepblue">Filters</h2>
                <button className="text-sandy hover:text-sandy/80 text-sm font-semibold transition">Clear All</button>
              </div>

              {/* Location */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-semibold text-deepblue mb-3">Location</h3>
                <div className="relative mb-4">
                  <input 
                    type="text" 
                    placeholder="Search location..." 
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-sandy focus:outline-none bg-white text-gray-900 shadow-sm transition [color-scheme:light]"
                  />
                  <i className="fa-solid fa-location-dot absolute right-3 top-3 text-gray-400"></i>
                </div>
                <div className="space-y-3">
                  {locations.map(loc => (
                    <label key={loc} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                      />
                      <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-semibold text-deepblue mb-3">Price Range (per night)</h3>
                <div className="space-y-3">
                  {['Under $50', '$50 - $100', '$100 - $200', '$200 - $400', '$400+'].map(price => (
                    <label key={price} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="price" 
                        className="h-5 w-5 border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                      />
                      <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-semibold text-deepblue mb-3">Accommodation Type</h3>
                <div className="space-y-3">
                  {types.map(type => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                      />
                      <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-semibold text-deepblue mb-3">Amenities</h3>
                <div className="space-y-3">
                  {amenities.map(ame => (
                    <label key={ame} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                      />
                      <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{ame}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-3 rounded-xl font-semibold transition shadow-md mt-4">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div id="results-header" className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-deepblue mb-1">{properties.length * 35} Properties Found</h2>
                  <p className="text-gray-600">Best accommodations in Namibia tailored for you</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Sort by:</span>
                  <select className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-sandy focus:outline-none bg-white text-gray-900 transition shadow-sm [color-scheme:light]">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Guest Rating</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {properties.map(property => (
                <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-80 h-64 md:h-auto overflow-hidden relative">
                      <img 
                        className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" 
                        src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${property.image}`} 
                        alt={property.title} 
                      />
                      {property.featured && (
                        <div className="absolute top-4 left-4 bg-sandy text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          Featured
                        </div>
                      )}
                      {property.value && (
                        <div className="absolute top-4 left-4 bg-earthy text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          Best Value
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition text-deepblue shadow-sm">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              property.type === 'Luxury Lodge' ? 'bg-accent/20 text-accent' :
                              property.type === 'Safari Camp' ? 'bg-earthy/20 text-earthy' :
                              property.type === 'Hotel' ? 'bg-sandy/20 text-sandy' :
                              'bg-stone-200 text-stone-700'
                            }`}>
                              {property.type}
                            </span>
                            <div className="flex items-center text-sandy">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa-solid fa-star text-sm ${i < Math.floor(property.rating) ? 'text-sandy' : 'text-gray-300'}`}></i>
                              ))}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-deepblue mb-1 cursor-pointer hover:text-sandy transition" onClick={() => onSelect(property)}>{property.title}</h3>
                          <div className="flex items-center text-gray-600 mb-3">
                            <i className="fa-solid fa-location-dot text-sandy mr-2"></i>
                            <span>{property.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-deepblue">${property.price}</div>
                          <div className="text-gray-600 text-sm">per night</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        {property.amenities.map(ame => (
                          <div key={ame} className="flex items-center text-gray-700 text-sm">
                            <i className="fa-solid fa-check text-accent mr-2"></i>
                            <span>{ame}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-accent/10 px-3 py-1 rounded-lg">
                          <i className="fa-solid fa-star text-accent mr-2"></i>
                          <span className="font-bold text-accent">{property.rating}</span>
                          <span className="text-gray-500 ml-1 text-sm">({property.reviews} reviews)</span>
                        </div>
                        <button onClick={() => onSelect(property)} className="bg-deepblue hover:bg-deepblue/90 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="pagination-section" className="mt-12 flex items-center justify-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-200 hover:border-sandy hover:text-sandy transition">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {[1, 2, 3, 4].map(num => (
                <button 
                  key={num}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition ${
                    num === 1 ? 'bg-sandy text-white' : 'border-2 border-gray-200 hover:border-sandy hover:text-sandy'
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-200 hover:border-sandy hover:text-sandy transition">
                15
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-200 hover:border-sandy hover:text-sandy transition">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;