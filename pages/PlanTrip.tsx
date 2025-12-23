import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService';
import { ItineraryRequest, ItineraryResponse } from '../types';
import ItineraryDisplay from '../components/ItineraryDisplay';

const PlanTrip: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ItineraryResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState<ItineraryRequest>({
    destination: 'Highlights of Namibia',
    duration: 5,
    budget: 'Mid-range',
    interests: [],
    travelers: 'Couple',
  });

  const interestOptions = ['Wildlife/Safari', 'Photography', 'Hiking', 'Culture', 'Off-road Driving', 'Luxury', 'Camping', 'Coast/Ocean'];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setErrorMsg(null);
    try {
      const data = await generateItinerary(formData);
      setResult(data);
    } catch (error) {
      console.error(error);
      setErrorMsg("Oops! Something went wrong while connecting to the AI. Please ensure you have a valid API Key configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Plan Your Namibian Adventure</h1>
          <p className="text-lg text-stone-600">Tell us a bit about your dream trip, and let our AI craft the perfect itinerary with live booking options.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-stone-800 mb-6">Trip Preferences</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Trip Duration (Days)</label>
                  <input
                    type="number"
                    min="1"
                    max="14"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                    className="w-full rounded-lg border-gray-300 border-2 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white text-gray-900 shadow-sm transition"
                  />
                  <p className="text-xs text-stone-500 mt-1">Max 14 days for optimal generation.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Travelers</label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                    className="w-full rounded-lg border-gray-300 border-2 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white text-gray-900 shadow-sm transition"
                  >
                    <option>Solo Traveler</option>
                    <option>Couple</option>
                    <option>Family with Kids</option>
                    <option>Group of Friends</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full rounded-lg border-gray-300 border-2 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white text-gray-900 shadow-sm transition"
                  >
                    <option>Budget (Camping/Backpacking)</option>
                    <option>Mid-range (Lodges/Guest Farms)</option>
                    <option>Luxury (High-end Lodges)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleInterest(option)}
                        className={`text-xs font-semibold px-3 py-2 rounded-full transition-all border-2 shadow-sm ${
                          formData.interests.includes(option)
                            ? 'bg-orange-600 border-orange-600 text-white'
                            : 'bg-white border-gray-200 text-stone-600 hover:border-orange-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-stone-900 text-white py-3 rounded-xl font-semibold hover:bg-stone-800 transition disabled:opacity-70 disabled:cursor-wait shadow-lg hover:shadow-xl"
                >
                  {loading ? 'Generating...' : 'Create Itinerary'}
                </button>
              </form>
            </div>
          </div>

          {/* Result Section */}
          <div className="lg:col-span-8">
            <div className="min-h-[500px] relative">
              {!result && !loading && !errorMsg && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-white/50 rounded-3xl border-2 border-dashed border-stone-200">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7m0 0a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p>Configure your trip to see the magic happen.</p>
                </div>
              )}

              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Crafting your Journey</h3>
                  <div className="text-stone-500 text-center space-y-1">
                    <p>Optimizing route logistics...</p>
                    <p>Finding the best lodges...</p>
                    <p>Calculating estimated costs...</p>
                  </div>
                </div>
              )}
              
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {errorMsg}
                </div>
              )}

              {result && (
                <ItineraryDisplay data={result} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;