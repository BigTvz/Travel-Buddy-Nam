import React from 'react';
import { Page } from '../types';

interface SafariProps {
  setPage: (page: Page) => void;
  onSelect: (item: any) => void;
}

const Safari: React.FC<SafariProps> = ({ setPage, onSelect }) => {
  const destinations = ['All Destinations', 'Etosha National Park', 'Namib-Naukluft Park', 'Skeleton Coast', 'Caprivi Strip', 'Damaraland'];
  const durations = ['Any Duration', 'Half Day (4-6 hours)', 'Full Day (8+ hours)', '2-3 Days', '4-7 Days', '8+ Days'];
  const priceRanges = ['All Prices', 'Under $100', '$100 - $300', '$300 - $500', '$500 - $1000', 'Over $1000'];
  const tourTypes = ['All Types', 'Game Drive', 'Walking Safari', 'Night Safari', 'Photography Tour', 'Luxury Safari'];

  const tours = [
    {
      id: 1,
      title: 'Sossusvlei Desert Safari',
      location: 'Namib-Naukluft Park',
      type: 'Game Drive',
      price: 185,
      rating: 4.8,
      reviews: 156,
      duration: 'Full Day',
      groupSize: 'Up to 12',
      image: '5493066f3d-ed7614abc39a1bf145ac.png',
      description: 'Explore the majestic red dunes of Sossusvlei and witness breathtaking desert landscapes and unique wildlife adaptations.',
      tags: ['Free cancellation']
    },
    {
      id: 2,
      title: 'Caprivi Wetlands Walking Safari',
      location: 'Caprivi Strip',
      type: 'Walking Safari',
      price: 680,
      rating: 4.9,
      reviews: 89,
      duration: '3 Days',
      groupSize: 'Up to 6',
      image: 'fbb700520d-94755685f8272d647320.png',
      description: 'Experience wildlife on foot with expert guides through lush wetlands, spotting elephants, hippos, and diverse bird species.',
      tags: ['Accommodation included']
    },
    {
      id: 3,
      title: 'Wildlife Photography Safari',
      location: 'Etosha National Park',
      type: 'Photography Tour',
      price: 520,
      rating: 5.0,
      reviews: 124,
      duration: '2 Days',
      groupSize: 'Up to 4',
      image: 'b97dab7803-31b8e6a5cf8ffc7b919b.png',
      description: 'Perfect for photographers! Capture stunning wildlife shots with professional guidance during optimal lighting conditions.',
      tags: ['Photography expert guide']
    },
    {
      id: 4,
      title: 'Etosha Night Game Drive',
      location: 'Etosha National Park',
      type: 'Night Safari',
      price: 95,
      rating: 4.7,
      reviews: 98,
      duration: '4 Hours',
      groupSize: 'Up to 10',
      image: 'c7f8ef314a-975d36a542990d9621b0.png',
      description: 'Discover nocturnal wildlife in their natural habitat. Experience the thrill of spotting predators and rare night creatures.',
      tags: ['Spotlights provided']
    },
    {
      id: 5,
      title: 'Desert-Adapted Wildlife Safari',
      location: 'Damaraland',
      type: 'Luxury Safari',
      price: 1280,
      rating: 4.9,
      reviews: 76,
      duration: '4 Days',
      groupSize: 'Up to 6',
      image: '4f28874407-e6a7463f837806b3788c.png',
      description: 'Track desert elephants and rhinos in Damaraland\'s rugged terrain with luxury camping and gourmet meals included.',
      tags: ['Luxury tented camp']
    },
    {
      id: 6,
      title: 'Golden Hour Wildlife Drive',
      location: 'Etosha National Park',
      type: 'Sunset Safari',
      price: 120,
      rating: 4.8,
      reviews: 203,
      duration: '3 Hours',
      groupSize: 'Up to 8',
      image: '880496b46a-5a62b8649a6fb834fa0b.png',
      description: 'Experience magical sunset views while observing wildlife during their most active hours. Perfect for photography enthusiasts.',
      tags: ['Refreshments included']
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="hero-safari-section" className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fbb700520d-94755685f8272d647320.png" 
            alt="African wildlife safari scene in Namibia with elephants" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <button 
                onClick={() => setPage(Page.HOME)}
                className="text-white/80 hover:text-white transition text-sm"
              >
                Home
              </button>
              <i className="fa-solid fa-chevron-right text-white/60 text-xs"></i>
              <span className="text-white text-sm font-semibold">Safaris & Tours</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Safaris & Wildlife Tours
            </h1>
            <p className="text-xl text-white opacity-90 leading-relaxed">
              Embark on unforgettable wildlife adventures across Namibia's most spectacular national parks and reserves
            </p>
          </div>
        </div>
      </section>

      {/* Safari Filters Section */}
      <section id="safari-filters-section" className="bg-white py-8 px-6 border-b border-gray-100 shadow-sm sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-deepblue font-semibold mb-2 text-xs uppercase tracking-wider">Destination</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]">
                {destinations.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-deepblue font-semibold mb-2 text-xs uppercase tracking-wider">Duration</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]">
                {durations.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-deepblue font-semibold mb-2 text-sm uppercase tracking-wider">Price Range</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]">
                {priceRanges.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-deepblue font-semibold mb-2 text-sm uppercase tracking-wider">Tour Type</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sandy focus:outline-none transition bg-white text-gray-900 shadow-sm [color-scheme:light]">
                {tourTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full lg:w-auto bg-sandy hover:bg-sandy/90 text-white px-8 py-3 rounded-xl font-bold transition shadow-md flex items-center justify-center">
                <i className="fa-solid fa-filter mr-2"></i>
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Listings Section */}
      <section id="safari-listings-section" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-deepblue">Explore All Adventures</h2>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl hover:bg-deepblue hover:text-white transition flex items-center justify-center">
                <i className="fa-solid fa-th-large"></i>
              </button>
              <button className="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl hover:bg-deepblue hover:text-white transition flex items-center justify-center">
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <div key={tour.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-gray-100 flex flex-col">
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onSelect(tour)}>
                  <img 
                    className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" 
                    src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${tour.image}`} 
                    alt={tour.title} 
                  />
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition text-deepblue shadow-md">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-sandy text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                      {tour.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent font-bold text-xs uppercase tracking-wider">{tour.location}</span>
                    <div className="flex items-center space-x-1">
                      <i className="fa-solid fa-star text-sandy text-sm"></i>
                      <span className="text-gray-900 font-bold text-sm">{tour.rating}</span>
                      <span className="text-gray-400 text-xs">({tour.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-deepblue mb-4 group-hover:text-sandy transition cursor-pointer" onClick={() => onSelect(tour)}>{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">{tour.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <i className="fa-solid fa-clock text-accent"></i>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <i className="fa-solid fa-users text-accent"></i>
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {tour.tags.map(tag => (
                      <span key={tag} className="flex items-center text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-lg">
                        <i className="fa-solid fa-circle-check mr-1.5"></i> {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-gray-400 text-xs font-bold uppercase">From</span>
                      <div className="text-2xl font-extrabold text-deepblue">${tour.price}</div>
                    </div>
                    <button onClick={() => onSelect(tour)} className="bg-deepblue hover:bg-deepblue/90 text-white px-8 py-3 rounded-xl font-bold transition shadow-md">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safari;