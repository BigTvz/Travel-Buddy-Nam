import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { GoogleGenAI } from "@google/genai";

interface DetailPageProps {
  type: Page;
  data: any;
  setPage: (page: Page) => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ type, data, setPage }) => {
  const [aiTip, setAiTip] = useState<string>('');
  const [isBooking, setIsBooking] = useState(false);

  // Fetch a smart AI tip for this specific location/item
  useEffect(() => {
    const fetchTip = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `You are a local Namibian travel expert. Give one short, 
        practical, and high-value insider tip for a traveler visiting: ${data.title || data.name}. 
        Mention something unique about the location or a hidden gem nearby. Keep it under 50 words.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
        });
        setAiTip(response.text || '');
      } catch (e) {
        console.error("AI Tip Error:", e);
      }
    };
    if (data) fetchTip();
  }, [data]);

  if (!data) return <div className="p-20 text-center">Item not found.</div>;

  const handleBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      alert("Booking request submitted! Our concierge will contact you within 2 hours.");
      setIsBooking(false);
    }, 1500);
  };

  const backPage = type === Page.ACCOMMODATION_DETAIL ? Page.ACCOMMODATION :
                   type === Page.CAR_DETAIL ? Page.CAR_RENTAL :
                   type === Page.SAFARI_DETAIL ? Page.SAFARI :
                   type === Page.ACTIVITY_DETAIL ? Page.ACTIVITIES : Page.CULTURE;

  return (
    <div className="animate-fadeIn pb-20">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <img 
          src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${data.image || data.img}`} 
          className="w-full h-full object-cover" 
          alt={data.title || data.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepblue/90 via-deepblue/20 to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-6">
          <button 
            onClick={() => setPage(backPage)}
            className="mb-4 flex items-center text-white/80 hover:text-white transition group"
          >
            <i className="fa-solid fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition"></i>
            Back to Listings
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-sandy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {data.type || 'Exclusive'}
                </span>
                <div className="flex items-center text-yellow-400">
                  <i className="fa-solid fa-star text-sm"></i>
                  <span className="text-white font-bold ml-1">{data.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {data.title || data.name}
              </h1>
              <p className="text-white/80 flex items-center mt-2">
                <i className="fa-solid fa-location-dot text-sandy mr-2"></i>
                {data.location || 'Namibia'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-white/60 text-sm font-bold uppercase block mb-1">Starting from</span>
              <div className="text-4xl font-black text-white">${data.price}</div>
              <span className="text-white/60 text-xs uppercase">{type === Page.CAR_DETAIL ? 'per day' : 'per person'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-deepblue mb-4">About this Experience</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.description || data.desc || "Experience the unparalleled beauty of Namibia. This carefully selected offering provides high quality and authentic local flavor, perfect for discerning travelers seeking comfort and adventure in balance."}
              </p>
            </section>

            {/* AI Expert Tip */}
            {aiTip && (
              <div className="bg-gradient-to-br from-accent/10 to-deepblue/5 p-8 rounded-3xl border border-accent/20 flex gap-6 items-start">
                <div className="bg-accent text-white w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-deepblue mb-1">Expert Tip from NamBuddy</h3>
                  <p className="text-gray-700 italic">"{aiTip}"</p>
                </div>
              </div>
            )}

            {/* Features/Amenities */}
            <section>
              <h2 className="text-2xl font-bold text-deepblue mb-6">Features & Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {(data.amenities || data.tags || data.features || ['Guided Tours', 'Professional Support', 'Insurance Included', 'Local Expertise']).map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <i className="fa-solid fa-check-circle text-accent text-lg"></i>
                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Placeholder */}
            <section>
              <h2 className="text-2xl font-bold text-deepblue mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-40 rounded-2xl overflow-hidden bg-gray-200">
                    <img 
                      src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${data.image || data.img}`} 
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition duration-500 cursor-pointer"
                      alt="Gallery"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-deepblue mb-6">Secure Your Booking</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Check-in / Start Date</label>
                  <input type="date" className="w-full p-3 rounded-xl border border-gray-200 focus:border-sandy focus:outline-none bg-gray-50 font-semibold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Number of Guests</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:border-sandy focus:outline-none bg-gray-50 font-semibold">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 font-bold">Subtotal</span>
                  <span className="text-deepblue font-black">${data.price}</span>
                </div>
                <div className="flex justify-between items-center text-accent">
                  <span className="font-bold">Booking Fee</span>
                  <span className="font-black">$0 (Free)</span>
                </div>
              </div>

              <button 
                onClick={handleBooking}
                disabled={isBooking}
                className="w-full bg-deepblue hover:bg-deepblue/90 text-white py-4 rounded-2xl font-black text-xl shadow-xl transition transform active:scale-95 disabled:opacity-70 disabled:cursor-wait"
              >
                {isBooking ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : 'Confirm Reservation'}
              </button>

              <p className="text-center text-gray-400 text-xs mt-6 font-medium">
                <i className="fa-solid fa-lock mr-2"></i>
                Secure payment & local support included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;