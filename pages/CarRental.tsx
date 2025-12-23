import React from 'react';
import { Page } from '../types';

interface CarRentalProps {
  setPage: (page: Page) => void;
  onSelect: (item: any) => void;
}

const CarRental: React.FC<CarRentalProps> = ({ setPage, onSelect }) => {
  const vehicleTypes = ['4x4 / SUV', 'Sedan', 'Minivan', 'Luxury'];
  const transmissions = ['Automatic', 'Manual'];
  const priceRanges = ['$50 - $100/day', '$100 - $150/day', '$150+/day'];
  const features = ['GPS Navigation', 'Camping Equipment', 'Rooftop Tent', 'Insurance Included'];

  const vehicles = [
    {
      id: 1,
      title: 'Toyota Land Cruiser 4x4',
      name: 'Toyota Land Cruiser 4x4',
      image: 'fd12cf9596-897cd59188796ca14e10.png',
      rating: 4.9,
      reviews: 127,
      price: 145,
      type: '4x4 / SUV',
      passengers: 5,
      bags: 4,
      transmission: 'Automatic',
      fuel: 'Diesel',
      tags: ['GPS Navigation', 'Camping Kit', 'Insurance', 'Unlimited Mileage'],
      featured: true
    },
    {
      id: 2,
      title: 'Nissan Patrol 4x4',
      name: 'Nissan Patrol 4x4',
      image: 'fd12cf9596-897cd59188796ca14e10.png',
      rating: 4.7,
      reviews: 89,
      price: 135,
      type: '4x4 / SUV',
      passengers: 7,
      bags: 5,
      transmission: 'Automatic',
      fuel: 'Diesel',
      tags: ['GPS Navigation', 'Rooftop Tent', 'Insurance'],
      featured: false
    },
    {
      id: 3,
      title: 'VW Amarok Double Cab',
      name: 'VW Amarok Double Cab',
      image: 'fd12cf9596-897cd59188796ca14e10.png',
      rating: 4.8,
      reviews: 103,
      price: 115,
      type: '4x4 / SUV',
      passengers: 5,
      bags: 3,
      transmission: 'Manual',
      fuel: 'Diesel',
      tags: ['GPS Navigation', 'Camping Kit', 'Insurance'],
      value: true
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Breadcrumb */}
      <section id="breadcrumb-section" className="bg-white py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <button onClick={() => setPage(Page.HOME)} className="text-gray-500 hover:text-deepblue transition">Home</button>
            <i className="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            <span className="text-deepblue font-semibold">Car Rentals</span>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section id="hero-banner-section" className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fd12cf9596-897cd59188796ca14e10.png" 
            alt="4x4 vehicle driving through Namibian desert landscape at sunset" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">Car Rentals</h1>
            <p className="text-xl text-white opacity-90">Explore Namibia at your own pace with our premium 4x4 vehicles and sedans</p>
          </div>
        </div>
      </section>

      {/* Search Filter Bar */}
      <section id="search-filter-section" className="py-8 px-6 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-sandy/10 to-accent/10 rounded-2xl p-6 border border-sandy/20 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-deepblue font-semibold mb-2 text-sm">Pick-up Location</label>
                <div className="relative">
                  <i className="fa-solid fa-location-dot absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="text" 
                    placeholder="Windhoek Airport" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-deepblue font-semibold mb-2 text-sm">Pick-up Date</label>
                <div className="relative">
                  <i className="fa-regular fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-deepblue font-semibold mb-2 text-sm">Drop-off Date</label>
                <div className="relative">
                  <i className="fa-regular fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-3 rounded-xl font-semibold transition shadow-md flex items-center justify-center">
                  <i className="fa-solid fa-search mr-2"></i>Search Vehicles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section id="filters-results-section" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside id="filters-sidebar" className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
                <h2 className="text-2xl font-bold text-deepblue mb-6">Filters</h2>
                
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-deepblue mb-4">Vehicle Type</h3>
                  <div className="space-y-3">
                    {vehicleTypes.map(type => (
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

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-deepblue mb-4">Transmission</h3>
                  <div className="space-y-3">
                    {transmissions.map(trans => (
                      <label key={trans} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                        />
                        <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{trans}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-deepblue mb-4">Price Range</h3>
                  <div className="space-y-3">
                    {priceRanges.map(range => (
                      <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                        />
                        <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-deepblue mb-4">Features</h3>
                  <div className="space-y-3">
                    {features.map(feat => (
                      <label key={feat} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                        />
                        <span className="text-gray-700 group-hover:text-deepblue transition font-medium">{feat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-3 rounded-xl font-semibold transition shadow-md">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Results */}
            <div id="results-section" className="lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-deepblue">24 Vehicles Available</h2>
                <select className="px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>

              <div className="space-y-6">
                {vehicles.map(vehicle => (
                  <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-gray-100">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="h-64 md:h-auto overflow-hidden relative">
                        <img 
                          className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500 cursor-pointer" 
                          src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${vehicle.image}`} 
                          alt={vehicle.name} 
                          onClick={() => onSelect(vehicle)}
                        />
                        {vehicle.featured && (
                          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                            Most Popular
                          </div>
                        )}
                        {vehicle.value && (
                          <div className="absolute top-4 left-4 bg-sandy text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                            Great Value
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-2xl font-bold text-deepblue mb-1 cursor-pointer hover:text-sandy transition" onClick={() => onSelect(vehicle)}>{vehicle.name}</h3>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center text-sandy">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fa-solid fa-star text-sm ${i < Math.floor(vehicle.rating) ? 'text-sandy' : 'text-gray-300'}`}></i>
                                  ))}
                                </div>
                                <span className="text-gray-500 text-sm">({vehicle.rating}) {vehicle.reviews} reviews</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-deepblue">${vehicle.price}</div>
                              <div className="text-gray-500 text-xs font-medium">per day</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <i className="fa-solid fa-users text-accent"></i>
                              <span className="text-sm">{vehicle.passengers} Pass.</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <i className="fa-solid fa-suitcase text-accent"></i>
                              <span className="text-sm">{vehicle.bags} Bags</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <i className="fa-solid fa-gear text-accent"></i>
                              <span className="text-sm">{vehicle.transmission}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <i className="fa-solid fa-gas-pump text-accent"></i>
                              <span className="text-sm">{vehicle.fuel}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {vehicle.tags.map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs flex items-center border border-gray-200">
                                <i className="fa-solid fa-check text-accent mr-1"></i>{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button onClick={() => onSelect(vehicle)} className="flex-1 bg-deepblue hover:bg-deepblue/90 text-white py-3 rounded-xl font-semibold transition shadow-md">
                            Book Now
                          </button>
                          <button onClick={() => onSelect(vehicle)} className="px-6 border-2 border-deepblue text-deepblue hover:bg-deepblue hover:text-white py-3 rounded-xl font-semibold transition">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-500 hover:border-sandy hover:text-sandy transition">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-deepblue text-white font-semibold shadow-md">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-500 hover:border-sandy hover:text-sandy transition">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-500 hover:border-sandy hover:text-sandy transition">3</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-500 hover:border-sandy hover:text-sandy transition">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose-section" className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deepblue mb-4">Why Choose Our Car Rentals</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of travelers exploring Namibia's rugged beauty</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard icon="fa-shield-halved" color="sandy" title="Full Insurance" desc="Comprehensive coverage included in all our rental packages" />
            <FeatureCard icon="fa-clock" color="accent" title="24/7 Support" desc="Emergency assistance anytime, anywhere in Namibia" />
            <FeatureCard icon="fa-road" color="earthy" title="Unlimited Mileage" desc="Explore the vast landscapes without worrying about limits" />
            <FeatureCard icon="fa-map-location-dot" color="sandy" title="GPS & Offline Maps" desc="Pre-loaded with key routes and hidden Namibian gems" />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, color, title, desc }: any) => (
  <div className="text-center group">
    <div className={`w-20 h-20 bg-${color}/10 rounded-3xl flex items-center justify-center mx-auto mb-6 transition transform group-hover:rotate-12`}>
      <i className={`fa-solid ${icon} text-${color} text-3xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-deepblue mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default CarRental;