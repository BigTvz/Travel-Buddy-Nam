import React from 'react';
import { Page } from '../types';

interface CultureProps {
  setPage: (page: Page) => void;
  onSelect: (item: any) => void;
}

const Culture: React.FC<CultureProps> = ({ setPage, onSelect }) => {
  const cultures = ['All Cultures', 'Himba', 'San Bushmen', 'Herero', 'Damara', 'Nama', 'Ovambo'];

  const allExperiences = [
    {
      id: 1,
      title: 'Herero Cultural Heritage',
      image: '5493066f3d-ed7614abc39a1bf145ac.png',
      rating: 4.7,
      reviews: 124,
      duration: '4 hours',
      price: 75,
      groupSize: 'Max 15',
      category: 'TRADITIONAL',
      desc: 'Discover the unique Herero culture, their distinctive Victorian-inspired dress, and their history of resilience.'
    },
    {
      id: 2,
      title: 'Damara Living Museum',
      image: 'b01d0cbe6c-ec6720a114ff90bd1616.png',
      rating: 4.6,
      reviews: 86,
      duration: '3 hours',
      price: 65,
      groupSize: 'Max 20',
      category: 'HANDS-ON',
      desc: 'Experience authentic Damara traditions through interactive demonstrations of ancient crafts and skills.'
    },
    {
      id: 3,
      title: 'Ovambo Village Experience',
      image: 'b97dab7803-31b8e6a5cf8ffc7b919b.png',
      rating: 4.8,
      reviews: 92,
      duration: '5 hours',
      price: 85,
      groupSize: 'Max 10',
      category: 'VILLAGE TOUR',
      desc: 'Visit an Ovambo homestead and learn about agricultural traditions and northern Namibian architecture.'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="hero-section" className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4f28874407-e6a7463f837806b3788c.png" 
            alt="Himba tribe traditional village in Namibia" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              Immerse in Namibian Culture
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
              Connect with indigenous communities, experience traditional customs, and discover the rich heritage of Namibia's diverse cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of all experiences */}
      <section id="all-experiences-section" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {allExperiences.map(exp => (
              <div key={exp.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition group flex flex-col">
                <div className="h-60 overflow-hidden relative cursor-pointer" onClick={() => onSelect(exp)}>
                  <img className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${exp.image}`} alt={exp.title} />
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                    {exp.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <i className="fa-solid fa-star text-sandy text-sm"></i>
                      <span className="text-gray-900 font-bold text-sm">{exp.rating}</span>
                      <span className="text-gray-400 text-xs font-bold ml-1">({exp.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-deepblue mb-4 leading-tight group-hover:text-sandy transition cursor-pointer" onClick={() => onSelect(exp)}>{exp.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{exp.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-black text-deepblue">${exp.price}</span>
                    </div>
                    <button onClick={() => onSelect(exp)} className="bg-deepblue hover:bg-deepblue/90 text-white px-6 py-2.5 rounded-xl font-bold transition shadow-md">
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

export default Culture;