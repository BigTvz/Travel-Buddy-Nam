import React from 'react';
import { Page } from '../types';

interface ResourcesProps {
  setPage: (page: Page) => void;
}

const Resources: React.FC<ResourcesProps> = ({ setPage }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Offset calculation: Main Navbar (approx 72px) + Secondary Resources Nav (approx 80px) + Extra padding
      const offset = 160; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Breadcrumb */}
      <section id="breadcrumb-section" className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <button onClick={() => setPage(Page.HOME)} className="text-gray-600 hover:text-deepblue transition">Home</button>
            <i className="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
            <span className="text-deepblue font-semibold">Travel Resources</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="page-hero-section" className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/880496b46a-5a62b8649a6fb834fa0b.png" 
            alt="Namibian landscape with traveler planning journey" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepblue/80 to-deepblue/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl tracking-tight">
              Travel Resources & Tips
            </h1>
            <p className="text-xl text-white/90 font-medium">
              Everything you need to know for a safe and unforgettable journey to Namibia.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links - Secondary Sticky Nav */}
      <section id="quick-links-section" className="py-8 px-6 bg-white border-b border-gray-100 shadow-sm sticky top-[60px] sm:top-[72px] z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex flex-nowrap sm:flex-wrap gap-4 justify-start sm:justify-center whitespace-nowrap">
          <QuickLink icon="fa-passport" color="sandy" label="Visa Info" targetId="visa-section" onScroll={handleScroll} />
          <QuickLink icon="fa-suitcase-medical" color="accent" label="Health & Safety" targetId="health-section" onScroll={handleScroll} />
          <QuickLink icon="fa-cloud-sun" color="earthy" label="Weather" targetId="weather-section" onScroll={handleScroll} />
          <QuickLink icon="fa-suitcase" color="sandy" label="Packing Guide" targetId="packing-section" onScroll={handleScroll} />
          <QuickLink icon="fa-handshake" color="accent" label="Local Customs" targetId="customs-section" onScroll={handleScroll} />
        </div>
      </section>

      {/* Visa Info */}
      <section id="visa-section" className="py-20 px-6 bg-gray-50 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-6">
            <div className="w-20 h-20 bg-sandy rounded-[2rem] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-passport text-white text-4xl"></i>
            </div>
            <div>
              <h2 className="text-4xl font-black text-deepblue tracking-tight">Visa Information</h2>
              <p className="text-lg text-gray-500">Important entry requirements and visa procedures for Namibia</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <InfoCard 
              title="Visa-Free Entry"
              desc="Citizens from over 40 countries can enter visa-free for up to 90 days"
              icon="fa-check"
              color="accent"
              items={[
                'All EU countries, UK, USA, Canada, Australia, New Zealand',
                'Valid passport for at least 6 months beyond stay',
                'At least 2 blank pages in passport',
                'Return or onward ticket required'
              ]}
            />
            <InfoCard 
              title="Visa Required"
              desc="Some nationalities need to obtain a visa before arrival"
              icon="fa-file-lines"
              color="earthy"
              items={[
                'Apply at nearest Namibian embassy or consulate',
                'Processing time: 5-10 business days',
                'Required documents: passport, photos, travel itinerary',
                'Visa fees vary by nationality'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section id="health-section" className="py-20 px-6 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-6">
            <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-suitcase-medical text-white text-4xl"></i>
            </div>
            <div>
              <h2 className="text-4xl font-black text-deepblue tracking-tight">Health & Safety</h2>
              <p className="text-lg text-gray-500">Stay healthy and safe during your Namibian adventure</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <HealthItem icon="fa-syringe" color="sandy" title="Vaccinations" items={['Hepatitis A & B', 'Typhoid', 'Yellow fever (if required)', 'Routine updates']} />
            <HealthItem icon="fa-mosquito" color="accent" title="Malaria Prevention" items={['Risk in northern regions', 'Prophylaxis recommended', 'Use insect repellent', 'Sleep under nets']} />
            <HealthItem icon="fa-shield-halved" color="earthy" title="Safety Tips" items={['Stay hydrated', 'Use high SPF sunscreen', 'Keep valuables secure', 'Avoid solo night walks']} />
          </div>
        </div>
      </section>

      {/* Weather */}
      <section id="weather-section" className="py-20 px-6 bg-gray-50 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-6">
            <div className="w-20 h-20 bg-earthy rounded-[2rem] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-cloud-sun text-white text-4xl"></i>
            </div>
            <div>
              <h2 className="text-4xl font-black text-deepblue tracking-tight">Weather & Seasons</h2>
              <p className="text-lg text-gray-500">Plan your trip according to Namibia's unique climate</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <WeatherSeasonCard 
              title="Dry Season"
              range="May - October"
              benefit="Best for wildlife viewing"
              color="from-sandy to-earthy"
              temp="20-30°C (68-86°F)"
              rain="Minimal to none"
              points={[
                'Clear skies and sunny days',
                'Wildlife congregates at waterholes',
                'Cooler nights, bring layers',
                'Peak tourist season'
              ]}
            />
            <WeatherSeasonCard 
              title="Wet Season"
              range="November - April"
              benefit="Best for photography & landscapes"
              color="from-accent to-deepblue"
              temp="25-35°C (77-95°F)"
              rain="Moderate"
              points={[
                'Lush green landscapes',
                'Baby animals & bird migration',
                'Fewer tourists, better prices',
                'Dramatic storm photography'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Packing */}
      <section id="packing-section" className="py-20 px-6 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-6">
            <div className="w-20 h-20 bg-sandy rounded-[2rem] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-suitcase text-white text-4xl"></i>
            </div>
            <div>
              <h2 className="text-4xl font-black text-deepblue tracking-tight">Packing Guide</h2>
              <p className="text-lg text-gray-500">Essential items for your Namibian adventure</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PackingCategory icon="fa-shirt" color="sandy" title="Clothing" items={['Light fabrics', 'Long sleeves', 'Warm jacket', 'Walking shoes', 'Wide hat', 'Swimwear']} />
            <PackingCategory icon="fa-camera" color="accent" title="Gear" items={['Camera + Zoom', 'Binoculars', 'Power bank', 'Headlamp', 'Water bottle', 'Day pack']} />
            <PackingCategory icon="fa-kit-medical" color="earthy" title="Essentials" items={['SPF 50+ Sunscreen', 'Insect repellent', 'First aid kit', 'Prescription meds', 'Sunglasses', 'Lip balm']} />
          </div>
        </div>
      </section>

      {/* Customs */}
      <section id="customs-section" className="py-20 px-6 bg-gray-50 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-6">
            <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-handshake text-white text-4xl"></i>
            </div>
            <div>
              <h2 className="text-4xl font-black text-deepblue tracking-tight">Local Customs & Etiquette</h2>
              <p className="text-lg text-gray-500">Respect local culture and traditions during your visit</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <CustomsCard 
              type="Do's" 
              icon="fa-thumbs-up" 
              color="accent" 
              items={[
                { title: 'Greet with respect', desc: 'Always greet with "Good morning/afternoon" first.' },
                { title: 'Ask for photos', desc: 'Request permission before photographing people.' },
                { title: 'Dress modestly', desc: 'Wear appropriate clothing in villages.' },
                { title: 'Support local', desc: 'Buy crafts directly from artisans.' },
                { title: 'Respect wildlife', desc: 'Follow guides and maintain distance.' }
              ]} 
            />
            <CustomsCard 
              type="Don'ts" 
              icon="fa-ban" 
              color="earthy" 
              items={[
                { title: 'Don\'t litter', desc: 'Keep Namibia pristine - pack it out.' },
                { title: 'Don\'t feed wildlife', desc: 'Disrupts natural behavior.' },
                { title: 'Don\'t touch artifacts', desc: 'Protect rock art and heritage sites.' },
                { title: 'Don\'t drive off-road', desc: 'Protects fragile ecosystems.' },
                { title: 'Don\'t rush', desc: 'Value patience in conversations.' }
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-r from-deepblue to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight drop-shadow-xl">Ready for Namibia?</h2>
          <p className="text-2xl text-white/90 mb-12 font-medium">Plan your journey today with confidence and excitement.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setPage(Page.PLAN)}
              className="bg-sandy hover:bg-sandy/90 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl transition transform hover:scale-105"
            >
              Start Planning
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-5 rounded-[2rem] font-black text-xl border-2 border-white/30 transition shadow-xl">
              Ask NamBuddy AI
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components used in Resources
const QuickLink = ({ icon, color, label, targetId, onScroll }: any) => (
  <a 
    href={`#${targetId}`} 
    onClick={(e) => onScroll(e, targetId)}
    className={`bg-${color}/10 hover:bg-${color}/20 text-deepblue px-6 py-3 rounded-full font-bold transition flex items-center space-x-3 border border-${color}/20 shadow-sm shrink-0`}
  >
    <i className={`fa-solid ${icon} text-${color}`}></i>
    <span>{label}</span>
  </a>
);

const InfoCard = ({ title, desc, icon, color, items }: any) => (
  <div className="bg-white rounded-[2.5rem] shadow-xl p-10 border border-gray-100 flex flex-col group hover:shadow-2xl transition">
    <div className="flex items-start space-x-6 mb-8">
      <div className={`w-14 h-14 bg-${color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-500 shadow-inner`}>
        <i className={`fa-solid ${icon} text-${color} text-2xl`}></i>
      </div>
      <div>
        <h3 className="text-2xl font-black text-deepblue mb-2">{title}</h3>
        <p className="text-gray-500 font-medium">{desc}</p>
      </div>
    </div>
    <ul className="space-y-4">
      {items.map((item: string) => (
        <li key={item} className="flex items-start space-x-3">
          <i className={`fa-solid fa-circle-check text-${color} mt-1.5 text-sm`}></i>
          <span className="text-gray-700 font-bold leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HealthItem = ({ icon, color, title, items }: any) => (
  <div className={`bg-gradient-to-br from-${color}/5 to-white rounded-[2.5rem] shadow-xl p-8 border-2 border-${color}/10 flex flex-col group`}>
    <div className={`w-16 h-16 bg-${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition`}>
      <i className={`fa-solid ${icon} text-white text-2xl`}></i>
    </div>
    <h3 className="text-2xl font-black text-deepblue mb-6">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {items.map((item: string) => (
        <li key={item} className="flex items-start space-x-3">
          <i className={`fa-solid fa-check text-${color} mt-1 text-sm font-black`}></i>
          <span className="text-gray-700 text-sm font-bold leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WeatherSeasonCard = ({ title, range, benefit, color, temp, rain, points }: any) => (
  <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition border border-gray-100">
    <div className={`bg-gradient-to-r ${color} p-10 text-white relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-1000"></div>
      <h3 className="text-3xl font-black mb-2 relative z-10 tracking-tight">{title}</h3>
      <p className="text-white/80 font-black relative z-10 text-sm uppercase tracking-widest">{range}</p>
      <p className="text-white font-medium mt-4 relative z-10 bg-white/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-md text-xs">{benefit}</p>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-inner">
          <div className="flex items-center space-x-3 mb-2">
            <i className="fa-solid fa-temperature-high text-earthy font-black"></i>
            <span className="font-black text-deepblue text-xs uppercase tracking-tighter">Temp</span>
          </div>
          <p className="text-gray-700 font-black text-sm">{temp}</p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-inner">
          <div className="flex items-center space-x-3 mb-2">
            <i className="fa-solid fa-droplet text-accent font-black"></i>
            <span className="font-black text-deepblue text-xs uppercase tracking-tighter">Rain</span>
          </div>
          <p className="text-gray-700 font-black text-sm">{rain}</p>
        </div>
      </div>
      <ul className="space-y-4 flex-grow">
        {points.map((p: string) => (
          <li key={p} className="flex items-start space-x-3 group/li">
            <i className="fa-solid fa-circle-check text-deepblue/20 group-hover/li:text-deepblue mt-1 transition"></i>
            <span className="text-gray-600 font-bold text-sm leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PackingCategory = ({ icon, color, title, items }: any) => (
  <div className={`bg-gradient-to-br from-${color}/5 to-white rounded-[3rem] shadow-xl p-10 border border-${color}/10 group hover:shadow-2xl transition`}>
    <div className="flex items-center space-x-5 mb-8">
      <div className={`w-14 h-14 bg-${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500`}>
        <i className={`fa-solid ${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-black text-deepblue leading-tight">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item: string) => (
        <li key={item} className="flex items-start space-x-4">
          <i className={`fa-solid fa-check text-${color} mt-1.5 text-xs font-black`}></i>
          <span className="text-gray-700 font-bold text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CustomsCard = ({ type, icon, color, items }: any) => (
  <div className="bg-white rounded-[3rem] shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition group">
    <div className="flex items-center space-x-6 mb-10">
      <div className={`w-16 h-16 bg-${color}/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-500`}>
        <i className={`fa-solid ${icon} text-${color} text-3xl`}></i>
      </div>
      <h3 className="text-3xl font-black text-deepblue tracking-tight">{type}</h3>
    </div>
    <ul className="space-y-8">
      {items.map((item: any) => (
        <li key={item.title} className="flex items-start space-x-5 group/item">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 ${type === "Do's" ? 'bg-accent/10' : 'bg-earthy/10'}`}>
            <i className={`fa-solid ${type === "Do's" ? 'fa-circle-check text-accent' : 'fa-circle-xmark text-earthy'} text-sm`}></i>
          </div>
          <div>
            <h4 className="font-black text-deepblue mb-1 leading-tight group-hover/item:text-deepblue transition">{item.title}</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Resources;