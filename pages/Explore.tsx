import React, { useState, useEffect } from 'react';
import { searchNamibia } from '../services/geminiService';
import { SearchResult } from '../types';

const Explore: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SearchResult | null>(null);
  const [location, setLocation] = useState<GeolocationCoordinates | undefined>(undefined);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(position.coords),
        (err) => setLocationError("Location access denied. Some local features may be limited.")
      );
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setData(null);
    try {
      const result = await searchNamibia(query, location);
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Best coffee in Windhoek",
    "Road conditions to Sossusvlei",
    "Current entry fees for Etosha National Park",
    "Luxury lodges near Swakopmund",
    "Is it safe to drive at night in Namibia?"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Explore Namibia Live</h1>
          <p className="text-stone-300 mb-8">
            Powered by Google Search & Maps Grounding. Find real-time info, verified places, and local insights.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about places, news, or services..."
              className="w-full pl-6 pr-14 py-4 rounded-full bg-stone-800 border border-stone-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-stone-400 outline-none shadow-xl"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition disabled:opacity-50"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {locationError && <p className="text-xs text-red-400 mt-2">{locationError}</p>}

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => setQuery(s)}
                className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-1 rounded-full border border-stone-700 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-48 bg-gray-200 rounded-xl mt-4"></div>
          </div>
        )}

        {data && (
          <div className="space-y-8">
            {/* Main AI Answer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h2 className="text-lg font-semibold text-orange-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI Overview
              </h2>
              <div className="prose prose-stone text-stone-700 whitespace-pre-wrap">
                {/* Basic Markdown bold parsing */}
                {data.text.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="text-stone-900">{part}</strong> : part
                )}
              </div>
            </div>

            {/* Sources / Grounding Data */}
            {data.groundingChunks && data.groundingChunks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Web Sources */}
                {data.groundingChunks.some(c => c.web) && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                     <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Sources
                    </h3>
                    <ul className="space-y-3">
                      {data.groundingChunks.filter(c => c.web).map((chunk, idx) => (
                        <li key={idx} className="group">
                          <a href={chunk.web?.uri} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-stone-50 hover:bg-stone-100 transition">
                            <p className="text-sm font-medium text-stone-900 group-hover:text-blue-600 truncate">{chunk.web?.title}</p>
                            <p className="text-xs text-stone-500 truncate mt-1">{chunk.web?.uri}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Map Locations */}
                {data.groundingChunks.some(c => c.maps) && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Locations Found
                    </h3>
                    <div className="space-y-4">
                      {data.groundingChunks.filter(c => c.maps).map((chunk, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-stone-900">{chunk.maps?.title}</h4>
                            <a 
                              href={chunk.maps?.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-white px-2 py-1 rounded border border-stone-200 hover:bg-stone-100 text-stone-600"
                            >
                              Open Maps
                            </a>
                          </div>
                          {chunk.maps?.placeAnswerSources && chunk.maps.placeAnswerSources.length > 0 && (
                             <div className="mt-2 text-xs text-stone-600 italic border-l-2 border-stone-300 pl-2">
                               "{chunk.maps.placeAnswerSources[0].reviewSnippets?.[0]?.content}"
                             </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
