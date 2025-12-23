import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const interests = [
    'Wildlife', 'Desert', 'Culture', 'Beaches', 
    'Stargazing', 'Hiking', 'Photography', 'Adventure'
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section id="hero-section" className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/880496b46a-5a62b8649a6fb834fa0b.png" 
            alt="Namibian desert landscape" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/70 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">Discover the Magic of Namibia</h1>
            <p className="text-xl text-white mb-8">Plan your perfect adventure with Travel Buddy Nam – our smart itinerary builder and expert explorer platform.</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPage(Page.PLAN)}
                className="bg-sandy hover:bg-sandy/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105"
              >
                Plan My Trip
              </button>
              <button 
                onClick={() => setPage(Page.EXPLORE)}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white transition"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Itinerary Section */}
      <section id="smart-itinerary-section" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">Smart Itinerary Builder</h2>
            <p className="text-lg text-gray-600">Answer a few questions and let Travel Buddy Nam create your perfect Namibian adventure</p>
          </div>
          <div className="bg-gradient-to-br from-sandy/10 to-accent/10 rounded-3xl p-8 shadow-xl backdrop-blur-sm border border-sandy/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-deepblue font-semibold mb-2">Travel Dates</label>
                <div className="flex gap-3">
                  <input 
                    type="date" 
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:border-sandy focus:outline-none transition w-full shadow-sm [color-scheme:light]" 
                  />
                  <input 
                    type="date" 
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:border-sandy focus:outline-none transition w-full shadow-sm [color-scheme:light]" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-deepblue font-semibold mb-2">Number of Travelers</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:border-sandy focus:outline-none transition shadow-sm [color-scheme:light]">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3-4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-deepblue font-semibold mb-2">Travel Style</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:border-sandy focus:outline-none transition shadow-sm [color-scheme:light]">
                  <option>Adventure & Wildlife</option>
                  <option>Luxury & Relaxation</option>
                  <option>Cultural Experience</option>
                  <option>Photography Tour</option>
                </select>
              </div>
              <div>
                <label className="block text-deepblue font-semibold mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:border-sandy focus:outline-none transition shadow-sm [color-scheme:light]">
                  <option>Budget ($50-100/day)</option>
                  <option>Mid-range ($100-200/day)</option>
                  <option>Luxury ($200+/day)</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-deepblue font-semibold mb-2">Interests (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center space-x-3 bg-white px-4 py-3 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-sandy transition group shadow-sm">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 rounded-md border-2 border-gray-300 bg-white text-sandy focus:ring-sandy accent-sandy cursor-pointer transition-all [color-scheme:light]" 
                    />
                    <span className="text-gray-700 font-medium group-hover:text-deepblue transition-colors">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button 
                onClick={() => setPage(Page.PLAN)}
                className="bg-deepblue hover:bg-deepblue/90 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105"
              >
                Generate My Itinerary
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Namibia Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">Explore Namibia</h2>
            <p className="text-lg text-gray-600">Everything you need for an unforgettable journey</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <CategoryCard 
              icon="fa-hotel" color="sandy" title="Accommodation" desc="Lodges & Hotels" img="5beb3ee135-de62636509f48fd019c6" 
              onClick={() => setPage(Page.ACCOMMODATION)}
            />
            <CategoryCard 
              icon="fa-car" color="accent" title="Car Rentals" desc="4x4 & Vehicles" img="fd12cf9596-897cd59188796ca14e10" 
              onClick={() => setPage(Page.CAR_RENTAL)}
            />
            <CategoryCard 
              icon="fa-binoculars" color="earthy" title="Safaris" desc="Wildlife Tours" img="fbb700520d-94755685f8272d647320" 
              onClick={() => setPage(Page.SAFARI)}
            />
            <CategoryCard 
              icon="fa-person-hiking" color="sandy" title="Activities" desc="Adventures" img="c7f8ef314a-975d36a542990d9621b0" 
              onClick={() => setPage(Page.ACTIVITIES)}
            />
            <CategoryCard 
              icon="fa-users" color="accent" title="Culture" desc="Local Experiences" img="4f28874407-e6a7463f837806b3788c" 
              onClick={() => setPage(Page.CULTURE)}
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">Featured Destinations</h2>
            <p className="text-lg text-gray-600">Must-visit places in Namibia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <DestinationCard 
              title="Sossusvlei" 
              rating="4.9" 
              desc="Experience the world's highest sand dunes and surreal desert landscapes"
              tags={['Desert', 'Photography']}
              img="5493066f3d-ed7614abc39a1bf145ac"
            />
            <DestinationCard 
              title="Etosha Park" 
              rating="4.8" 
              desc="Witness incredible wildlife including elephants, lions, and rhinos"
              tags={['Wildlife', 'Safari']}
              img="b01d0cbe6c-ec6720a114ff90bd1616"
            />
            <DestinationCard 
              title="Skeleton Coast" 
              rating="4.7" 
              desc="Explore mysterious shipwrecks and dramatic coastal landscapes"
              tags={['Coast', 'Adventure']}
              img="b97dab7803-31b8e6a5cf8ffc7b919b"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-sandy/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Plan your perfect trip in three easy steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard number="1" icon="fa-clipboard-list" color="sandy" title="Share Your Preferences" desc="Tell us about your travel dates, interests, and budget" />
            <StepCard number="2" icon="fa-wand-magic-sparkles" color="accent" title="Get Your Itinerary" desc="Receive a personalized itinerary tailored to your needs" />
            <StepCard number="3" icon="fa-calendar-check" color="earthy" title="Book & Travel" desc="Confirm your bookings and embark on your adventure" />
          </div>
        </div>
      </section>

      {/* Traveler Resources Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">Traveler Resources</h2>
            <p className="text-lg text-gray-600">Everything you need to know before you go</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard 
              color="sandy" icon="fa-passport" title="Visa Information" desc="Check visa requirements for your nationality and learn about entry procedures" 
              onClick={() => setPage(Page.RESOURCES)}
            />
            <ResourceCard 
              color="accent" icon="fa-lightbulb" title="Travel Tips" desc="Essential advice on weather, packing, local customs, and best times to visit" 
              onClick={() => setPage(Page.RESOURCES)}
            />
            <ResourceCard 
              color="earthy" icon="fa-shield-halved" title="Safety & Health" desc="Important health precautions, vaccinations, and safety guidelines for travelers" 
              onClick={() => setPage(Page.RESOURCES)}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepblue mb-4">What Travelers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our happy adventurers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah Mitchell" avatar="avatar-5" text="The itinerary planner made organizing our trip so easy! We experienced everything from desert dunes to wildlife safaris." />
            <TestimonialCard name="James Peterson" avatar="avatar-8" text="Best travel experience ever! The car rental service was seamless and the recommended lodges were perfect." />
            <TestimonialCard name="Emma Rodriguez" avatar="avatar-6" text="From booking to traveling, everything was perfectly organized. The cultural experiences were authentic and unforgettable." />
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-deepblue to-accent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border-2 border-white/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-sandy text-white px-4 py-2 rounded-full text-sm font-semibold uppercase">Limited Offer</span>
                <h2 className="text-4xl font-bold text-white mt-4 mb-4">Get 20% Off Your First Booking</h2>
                <p className="text-white/90 text-lg mb-6">Sign up now and receive exclusive discounts on accommodations, tours, and activities.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-sandy hover:bg-sandy/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition">Claim Your Discount</button>
                  <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white transition">Learn More</button>
                </div>
              </div>
              <div className="h-80 overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1a73220d87-9803b717fd9d2e82e7f9.png" alt="Happy travelers" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Subcomponents for cleaner code
const CategoryCard = ({ icon, color, title, desc, img, onClick }: any) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
  >
    <div className="h-48 overflow-hidden">
      <img className="w-full h-full object-cover" src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${img}.png`} alt={title} />
    </div>
    <div className="p-6 text-center">
      <div className={`w-16 h-16 bg-${color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`fa-solid ${icon} text-${color} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold text-deepblue mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

const DestinationCard = ({ title, rating, desc, tags, img }: any) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
    <div className="h-64 overflow-hidden">
      <img className="w-full h-full object-cover" src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${img}.png`} alt={title} />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold text-deepblue">{title}</h3>
        <div className="flex items-center space-x-1">
          <i className="fa-solid fa-star text-sandy"></i>
          <span className="text-gray-700 font-semibold">{rating}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
        ))}
      </div>
      <button className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-3 rounded-xl font-semibold transition">Explore Destination</button>
    </div>
  </div>
);

const StepCard = ({ number, icon, color, title, desc }: any) => (
  <div className="text-center h-full">
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition h-full">
      <div className={`w-20 h-20 bg-${color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
        <span className="text-white text-3xl font-bold">{number}</span>
      </div>
      <div className={`w-16 h-16 bg-${color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`fa-solid ${icon} text-${color} text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold text-deepblue mb-4">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

const ResourceCard = ({ color, icon, title, desc, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`bg-gradient-to-br from-${color}/10 to-white rounded-2xl shadow-lg p-6 border-2 border-${color}/30 hover:shadow-xl transition h-full flex flex-col cursor-pointer`}
  >
    <div className="flex items-start space-x-4 flex-grow">
      <div className={`w-12 h-12 bg-${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <i className={`fa-solid ${icon} text-white text-xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-bold text-deepblue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{desc}</p>
      </div>
    </div>
    <button className={`mt-4 text-${color} font-semibold hover:underline text-left inline-flex items-center`}>
      Learn More <i className="fa-solid fa-arrow-right ml-1"></i>
    </button>
  </div>
);

const TestimonialCard = ({ name, avatar, text }: any) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition h-full flex flex-col">
    <div className="flex items-center mb-4">
      <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${avatar}.jpg`} alt={name} className="w-16 h-16 rounded-full object-cover mr-4 shadow-sm" />
      <div>
        <h4 className="font-bold text-deepblue text-lg">{name}</h4>
        <div className="flex items-center text-sandy">
          {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
        </div>
      </div>
    </div>
    <p className="text-gray-600 italic mt-auto">"{text}"</p>
  </div>
);

export default Home;