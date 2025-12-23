import React, { useState } from 'react';
import { ItineraryResponse, Activity, SearchResult } from '../types';
import { searchNamibia } from '../services/geminiService';

interface ItineraryDisplayProps {
  data: ItineraryResponse;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ data }) => {
  const [bookedItems, setBookedItems] = useState<Set<string>>(new Set());
  const [loadingDetails, setLoadingDetails] = useState<string | null>(null); // Stores activity name being loaded
  const [activeDetails, setActiveDetails] = useState<{name: string, data: SearchResult} | null>(null);

  const handleBook = (activityName: string) => {
    // Simulate booking API call
    const key = activityName;
    if (bookedItems.has(key)) return;
    
    // Optimistic update
    const newBooked = new Set(bookedItems);
    newBooked.add(key);
    setBookedItems(newBooked);
    
    alert(`Booking request sent for ${activityName}! A provider will contact you shortly.`);
  };

  const handleViewDetails = async (activity: Activity) => {
    if (activeDetails?.name === activity.name) {
      setActiveDetails(null); // Toggle off
      return;
    }

    setLoadingDetails(activity.name);
    try {
      // Fetch real-time grounding data
      const result = await searchNamibia(activity.locationName);
      setActiveDetails({ name: activity.name, data: result });
    } catch (e) {
      console.error(e);
      alert("Could not fetch live details.");
    } finally {
      setLoadingDetails(null);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
        <h2 className="text-3xl font-bold text-orange-700 mb-2">{data.tripTitle}</h2>
        <p className="text-stone-600 text-lg leading-relaxed">{data.summary}</p>
      </div>

      <div className="space-y-12">
        {data.days.map((day) => (
          <div key={day.dayNumber} className="relative border-l-4 border-orange-200 pl-8 ml-4">
            <div className="absolute -left-[1.35rem] top-0 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
              {day.dayNumber}
            </div>
            
            <h3 className="text-2xl font-semibold text-stone-900 mb-6">{day.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day.activities.map((activity, idx) => {
                const isBooked = bookedItems.has(activity.name);
                const isDetailsOpen = activeDetails?.name === activity.name;
                const isLoading = loadingDetails === activity.name;

                return (
                  <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-stone-100 flex flex-col overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                    <div className="p-5 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                         <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                           activity.type === 'Accommodation' ? 'bg-purple-100 text-purple-700' :
                           activity.type === 'Food' ? 'bg-green-100 text-green-700' :
                           'bg-blue-100 text-blue-700'
                         }`}>
                           {activity.type}
                         </span>
                         <span className="text-xs text-stone-500 font-medium">{activity.duration}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-stone-800 mb-2">{activity.name}</h4>
                      <p className="text-sm text-stone-600 mb-4 flex-grow">{activity.description}</p>
                      
                      {/* Price & Actions */}
                      <div className="mt-4 pt-4 border-t border-stone-100">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-stone-900 font-semibold">{activity.priceEstimate}</span>
                           {isBooked ? (
                             <span className="text-green-600 font-medium flex items-center gap-1 text-sm">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                               Confirmed
                             </span>
                           ) : (
                             <button 
                               onClick={() => handleBook(activity.name)}
                               className="text-sm bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition"
                             >
                               Book Now
                             </button>
                           )}
                        </div>
                        
                        <button
                          onClick={() => handleViewDetails(activity)}
                          disabled={isLoading}
                          className="w-full text-center text-sm text-orange-600 hover:text-orange-700 font-medium border border-orange-200 rounded-lg py-2 hover:bg-orange-50 transition flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <div className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              View Maps & Details
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Live Details Panel */}
                    {isDetailsOpen && activeDetails && (
                      <div className="bg-stone-50 p-4 border-t border-stone-200 text-sm animate-fade-in">
                        {activeDetails.data.groundingChunks?.map((chunk, cIdx) => (
                           <div key={cIdx} className="space-y-2">
                             {chunk.maps && (
                               <div className="bg-white p-3 rounded border border-stone-200">
                                 <h5 className="font-semibold text-stone-900 flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {chunk.maps.title}
                                 </h5>
                                 {chunk.maps.placeAnswerSources?.[0]?.reviewSnippets?.[0] && (
                                   <p className="text-stone-600 italic mt-2 text-xs">"{chunk.maps.placeAnswerSources[0].reviewSnippets[0].content}"</p>
                                 )}
                                 <a href={chunk.maps.uri} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 hover:underline text-xs">Open in Google Maps</a>
                               </div>
                             )}
                           </div>
                        ))}
                        {!activeDetails.data.groundingChunks?.some(c => c.maps) && (
                          <div className="text-stone-500 italic">No detailed map data found for this specific location.</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryDisplay;
