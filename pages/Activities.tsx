import React from 'react';
import { Page } from '../types';

interface ActivitiesProps {
  setPage: (page: Page) => void;
  onSelect: (item: any) => void;
}

const Activities: React.FC<ActivitiesProps> = ({ setPage, onSelect }) => {
  const categories = ['All Activities', 'Desert Adventures', 'Water Sports', 'Extreme Sports', 'Cultural'];

  const allActivities = [
    {
      id: 1,
      title: 'Quad Biking Safari',
      image: 'd8b3a17f26-4fb1c6e8a0d72b9e5831.png',
      rating: 4.9,
      reviews: 267,
      duration: '2-3 hours',
      price: 85,
      description: 'Explore the dunes on powerful quad bikes with experienced guides',
      tag: 'POPULAR',
      tagColor: 'accent'
    },
    {
      id: 2,
      title: 'Kayaking with Seals',
      image: '3e2f8a9b41-7c5d4e2f8a1b3c6d9e0f.png',
      rating: 4.8,
      reviews: 189,
      duration: '3 hours',
      price: 75,
      description: 'Paddle alongside playful seals in the beautiful Walvis Bay'
    },
    {
      id: 3,
      title: 'Hot Air Balloon Ride',
      image: '9f1e2d3c4b-8a7b6c5d4e3f2a1b0c9d.png',
      rating: 5.0,
      reviews: 156,
      duration: '4 hours',
      price: 450,
      description: 'Soar peacefully over Sossusvlei at sunrise with champagne breakfast',
      tag: 'LUXURY',
      tagColor: 'sandy'
    },
    {
      id: 4,
      title: 'Rock Climbing',
      image: '5beb3ee135-de62636509f48fd019c6.png',
      rating: 4.7,
      reviews: 124,
      duration: 'Full day',
      price: 120,
      description: 'Scale the granite peaks of Spitzkoppe with expert instructors'
    },
    {
      id: 5,
      title: 'Sunrise Dune Hiking',
      image: 'b01d0cbe6c-ec6720a114ff90bd1616.png',
      rating: 4.9,
      reviews: 234,
      duration: '3-4 hours',
      price: 55,
      description: 'Climb iconic Dune 45 or Big Daddy at sunrise for stunning views'
    },
    {
      id: 6,
      title: 'Himba Village Tour',
      image: '4f28874407-e6a7463f837806b3788c.png',
      rating: 4.8,
      reviews: 178,
      duration: 'Half day',
      price: 95,
      description: 'Experience authentic Himba culture and traditional way of life'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="activities-hero-section" className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d8b3a17f26-4fb1c6e8a0d72b9e5831.png" 
            alt="Adventure activities in Namibia" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              Thrilling Activities & Adventures
            </h1>
            <p className="text-xl text-white opacity-90 leading-relaxed drop-shadow-md">
              From sandboarding epic dunes to skydiving over the desert, discover unforgettable experiences in Namibia
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="all-activities-section" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {allActivities.map(act => (
              <div key={act.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition group border border-gray-100 flex flex-col">
                <div className="h-64 overflow-hidden relative cursor-pointer" onClick={() => onSelect(act)}>
                  <img 
                    className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" 
                    src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${act.image}`} 
                    alt={act.title} 
                  />
                  {act.tag && (
                    <div className={`absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg`}>
                      <span className="text-[10px] font-black tracking-widest uppercase">{act.tag}</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-deepblue mb-3 group-hover:text-sandy transition cursor-pointer" onClick={() => onSelect(act)}>{act.title}</h3>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fa-solid fa-star text-sm ${i < Math.floor(act.rating) ? 'text-sandy' : 'text-gray-200'}`}></i>
                    ))}
                    <span className="text-gray-400 text-xs font-bold ml-2">({act.reviews})</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{act.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-wide">
                      <i className="fa-solid fa-clock text-accent mr-2"></i>
                      <span>{act.duration}</span>
                    </div>
                    <div className="text-2xl font-black text-sandy">${act.price}</div>
                  </div>
                  <button onClick={() => onSelect(act)} className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-3.5 rounded-2xl font-bold transition shadow-md mt-6">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;