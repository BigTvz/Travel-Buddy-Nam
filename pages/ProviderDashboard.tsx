import React, { useState } from 'react';
import { Page, EntityType, Amenity } from '../types';

interface ProviderDashboardProps {
  setPage: (page: Page) => void;
  onPreview: (page: Page, item: any) => void;
}

const DEFAULT_AMENITIES: Amenity[] = [
  { name: 'Swimming Pool', icon: 'fa-swimming-pool' },
  { name: 'Free WiFi', icon: 'fa-wifi' },
  { name: 'Restaurant', icon: 'fa-utensils' },
  { name: 'Bar', icon: 'fa-glass-martini-alt' },
  { name: 'Spa', icon: 'fa-spa' },
  { name: 'Gym', icon: 'fa-dumbbell' },
  { name: 'Air Conditioning', icon: 'fa-snowflake' },
  { name: 'Free Parking', icon: 'fa-car' },
  { name: 'Game Drives', icon: 'fa-binoculars' },
  { name: 'Room Service', icon: 'fa-concierge-bell' },
  { name: 'Laundry', icon: 'fa-tshirt' },
  { name: 'Airport Shuttle', icon: 'fa-shuttle-van' },
];

const DEFAULT_VEHICLE_FEATURES: Amenity[] = [
  { name: 'GPS Navigation', icon: 'fa-map-location-dot' },
  { name: 'Rooftop Tent', icon: 'fa-campground' },
  { name: 'Double Fuel Tank', icon: 'fa-gas-pump' },
  { name: 'Spare Tires (2x)', icon: 'fa-circle-dot' },
  { name: 'Fridge/Freezer (12V)', icon: 'fa-refrigerator' },
  { name: 'Camping Kitchen', icon: 'fa-sink' },
  { name: 'Satellite Phone', icon: 'fa-phone-volume' },
  { name: 'Air Compressor', icon: 'fa-wind' },
  { name: 'Recovery Gear', icon: 'fa-truck-pickup' },
  { name: 'First Aid Kit', icon: 'fa-kit-medical' },
  { name: 'Fire Extinguisher', icon: 'fa-fire-extinguisher' },
  { name: 'Tool Kit', icon: 'fa-tools' },
];

const DEFAULT_TOUR_INCLUSIONS: Amenity[] = [
  { name: 'Professional Guide', icon: 'fa-user-tie' },
  { name: 'Bottled Water', icon: 'fa-bottle-water' },
  { name: 'Lunch / Snacks', icon: 'fa-utensils' },
  { name: 'Hotel Pickup', icon: 'fa-hotel' },
  { name: 'Entrance Fees', icon: 'fa-ticket' },
  { name: 'Safety Equipment', icon: 'fa-shield-heart' },
  { name: 'Binoculars', icon: 'fa-binoculars' },
  { name: 'Photography', icon: 'fa-camera' },
  { name: 'Insurance', icon: 'fa-shield-halved' },
  { name: 'Educational Materials', icon: 'fa-book' },
  { name: 'Sunscreen Provided', icon: 'fa-sun' },
  { name: 'Alcoholic Drinks', icon: 'fa-glass-cheers' },
];

const DEFAULT_CULTURE_HIGHLIGHTS: Amenity[] = [
  { name: 'Traditional Dance', icon: 'fa-person-running' },
  { name: 'Ancient Storytelling', icon: 'fa-scroll' },
  { name: 'Handicraft Making', icon: 'fa-palette' },
  { name: 'Culinary Workshop', icon: 'fa-bowl-food' },
  { name: 'Tribal History', icon: 'fa-monument' },
  { name: 'Local Language Lesson', icon: 'fa-language' },
  { name: 'Traditional Healing', icon: 'fa-leaf' },
  { name: 'Village Architecture', icon: 'fa-tents' },
  { name: 'Musical Instruments', icon: 'fa-drum' },
  { name: 'Spiritual Rituals', icon: 'fa-fire' },
  { name: 'Clothing & Adornment', icon: 'fa-vest' },
  { name: 'Community Interaction', icon: 'fa-people-group' },
];

const ICON_OPTIONS = [
  'fa-wifi', 'fa-swimming-pool', 'fa-utensils', 'fa-snowflake', 'fa-dumbbell',
  'fa-spa', 'fa-binoculars', 'fa-car', 'fa-glass-martini-alt', 'fa-concierge-bell',
  'fa-tshirt', 'fa-shuttle-van', 'fa-coffee', 'fa-bed', 'fa-tv', 'fa-plug',
  'fa-mountain', 'fa-sun', 'fa-water', 'fa-paw', 'fa-campground', 'fa-gas-pump',
  'fa-tools', 'fa-kit-medical', 'fa-truck-pickup', 'fa-map-location-dot',
  'fa-user-tie', 'fa-bottle-water', 'fa-ticket', 'fa-shield-heart', 'fa-glass-cheers',
  'fa-camera', 'fa-book', 'fa-person-hiking', 'fa-cloud-sun', 'fa-clock',
  'fa-person-running', 'fa-scroll', 'fa-palette', 'fa-bowl-food', 'fa-monument',
  'fa-language', 'fa-leaf', 'fa-tents', 'fa-drum', 'fa-fire', 'fa-vest', 'fa-people-group'
];

const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ setPage, onPreview }) => {
  const [activeTab, setActiveTab] = useState<EntityType | 'OVERVIEW' | 'BOOKINGS'>('OVERVIEW');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState<EntityType | null>(null);
  const [managedBooking, setManagedBooking] = useState<any | null>(null);

  // State for provider's lists
  const [providerAmenities, setProviderAmenities] = useState<Amenity[]>(DEFAULT_AMENITIES);
  const [providerVehicleFeatures, setProviderVehicleFeatures] = useState<Amenity[]>(DEFAULT_VEHICLE_FEATURES);
  const [providerTourInclusions, setProviderTourInclusions] = useState<Amenity[]>(DEFAULT_TOUR_INCLUSIONS);
  const [providerCultureHighlights, setProviderCultureHighlights] = useState<Amenity[]>(DEFAULT_CULTURE_HIGHLIGHTS);
  
  const [newItemName, setNewItemName] = useState('');
  const [newItemIcon, setNewItemIcon] = useState('fa-star');
  const [showCustomForm, setShowCustomForm] = useState(false);

  const openAddModal = (type: EntityType) => {
    setModalType(type);
    setShowAddModal(true);
    setShowCustomForm(false);
  };

  const addCustomItem = () => {
    if (!newItemName.trim()) return;
    const newItem: Amenity = { name: newItemName, icon: newItemIcon };
    
    if (modalType === 'ACCOMMODATION') {
      setProviderAmenities([...providerAmenities, newItem]);
    } else if (modalType === 'VEHICLE') {
      setProviderVehicleFeatures([...providerVehicleFeatures, newItem]);
    } else if (modalType === 'TOUR') {
      setProviderTourInclusions([...providerTourInclusions, newItem]);
    } else if (modalType === 'CULTURE') {
      setProviderCultureHighlights([...providerCultureHighlights, newItem]);
    }
    
    setNewItemName('');
    setShowCustomForm(false);
  };

  const tabs = [
    { id: 'OVERVIEW', label: 'Overview', icon: 'fa-chart-line' },
    { id: 'BOOKINGS', label: 'Bookings', icon: 'fa-calendar-check' },
    { id: 'ACCOMMODATION', label: 'Accommodations', icon: 'fa-hotel' },
    { id: 'VEHICLE', label: 'Vehicles', icon: 'fa-car' },
    { id: 'TOUR', label: 'Tours & Activities', icon: 'fa-binoculars' },
    { id: 'CULTURE', label: 'Experiences', icon: 'fa-users' },
  ];

  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12%', icon: 'fa-dollar-sign', color: 'text-green-600' },
    { label: 'Active Listings', value: '12', change: '+3', icon: 'fa-list-check', color: 'text-blue-600' },
    { label: 'Pending Bookings', value: '14', change: '+5', icon: 'fa-clock', color: 'text-orange-600' },
    { label: 'Customer Rating', value: '4.8', change: '+0.2', icon: 'fa-star', color: 'text-yellow-500' },
  ];

  const mockData: Record<string, any[]> = {
    ACCOMMODATION: [
      { 
        id: 'a1', 
        title: 'Desert Star Lodge', 
        price: 450, 
        location: 'Sossusvlei', 
        status: 'ACTIVE', 
        rating: 4.9, 
        image: '5beb3ee135-de62636509f48fd019c6.png', 
        type: 'Luxury Lodge',
        category: 'Lodge',
        mealPlan: 'Full Board (All Meals)',
        amenities: ['Swimming Pool', 'Game Drives', 'Restaurant', 'Bar/Lounge']
      },
      { 
        id: 'a2', 
        title: 'Windhoek City Loft', 
        price: 120, 
        location: 'Windhoek', 
        status: 'ACTIVE', 
        rating: 4.7, 
        image: '32cc2b2e01-1e1eda3d7c7d45b08a8e.png', 
        type: 'Apartment',
        category: 'Hotel',
        mealPlan: 'Breakfast Included',
        amenities: ['Free WiFi', 'Air Conditioning', 'Free Parking']
      },
    ],
    VEHICLE: [
      { 
        id: 'v1', 
        title: 'Toyota Hilux 4x4 Double Cab', 
        price: 135, 
        location: 'Windhoek Airport', 
        status: 'ACTIVE', 
        rating: 4.9, 
        image: 'fd12cf9596-897cd59188796ca14e10.png', 
        type: '4x4 / SUV',
        make: 'Toyota',
        model: 'Hilux',
        year: 2023,
        transmission: 'Manual',
        fuelType: 'Diesel',
        features: ['GPS Navigation', 'Rooftop Tent', 'Double Fuel Tank', 'Recovery Gear']
      }
    ],
    TOUR: [
      { 
        id: 't1', 
        title: 'Dune 45 Sunrise Trek', 
        price: 65, 
        location: 'Sossusvlei', 
        status: 'ACTIVE', 
        rating: 5.0, 
        image: 'b01d0cbe6c-ec6720a114ff90bd1616.png', 
        type: 'Nature',
        activityCategory: 'Nature Walk / Hike',
        duration: 4,
        durationUnit: 'Hours',
        difficulty: 'Moderate',
        inclusions: ['Professional Guide', 'Bottled Water', 'Entrance Fees']
      }
    ],
    CULTURE: [
      { 
        id: 'c1', 
        title: 'Himba Village Visit', 
        price: 85, 
        location: 'Kaokoland', 
        status: 'ACTIVE', 
        rating: 4.8, 
        image: '4f28874407-e6a7463f837806b3788c.png', 
        type: 'Village Tour',
        community: 'Himba Community',
        category: 'Village Living Museum',
        duration: 3,
        durationUnit: 'Hours',
        highlights: ['Ancient Storytelling', 'Traditional Dance', 'Clothing & Adornment']
      },
    ]
  };

  const activeReservations = [
    { 
      id: 'BK-9921', 
      name: 'Lukas Meyer', 
      email: 'lukas.m@example.de', 
      phone: '+49 172 449221',
      item: 'Desert Star Lodge', 
      date: '2024-05-20', 
      duration: '3 Nights', 
      status: 'Confirmed', 
      amount: '$1,350',
      guests: 2,
      specialRequests: 'Honeymoon anniversary - requesting a bottle of local wine if possible.',
      paymentStatus: 'PAID'
    },
    { 
      id: 'BK-1102', 
      name: 'Elena Rossi', 
      email: 'e.rossi@travel.it', 
      phone: '+39 333 490122',
      item: 'Toyota Hilux 4x4', 
      date: '2024-06-01', 
      duration: '10 Days', 
      status: 'Pending', 
      amount: '$1,350',
      guests: 2,
      specialRequests: 'Need additional spare tire for Kaokoland route.',
      paymentStatus: 'UNPAID'
    },
    { 
      id: 'BK-4552', 
      name: 'David Smith', 
      email: 'dsmith.usa@web.com', 
      phone: '+1 555 0192 44',
      item: 'Walvis Bay Cruise', 
      date: '2024-05-22', 
      duration: 'Full Day', 
      status: 'Confirmed', 
      amount: '$95',
      guests: 1,
      specialRequests: 'Gluten-free lunch required.',
      paymentStatus: 'PAID'
    },
  ];

  const handlePreview = (item: any) => {
    let detailPage: Page = Page.HOME;
    switch (activeTab) {
      case 'ACCOMMODATION':
        detailPage = Page.ACCOMMODATION_DETAIL;
        break;
      case 'VEHICLE':
        detailPage = Page.CAR_DETAIL;
        break;
      case 'TOUR':
        detailPage = Page.ACTIVITY_DETAIL;
        break;
      case 'CULTURE':
        detailPage = Page.CULTURE_DETAIL;
        break;
    }
    onPreview(detailPage, item);
  };

  const renderListings = () => {
    const items = mockData[activeTab as string] || [];
    
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col group">
            <div className="h-48 overflow-hidden relative">
              <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${item.image}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={item.title} />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-md ${
                  item.status === 'ACTIVE' ? 'bg-green-500 text-white' : 
                  item.status === 'DRAFT' ? 'bg-gray-400 text-white' : 'bg-red-500 text-white'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.type}</span>
                {item.rating > 0 && (
                  <div className="flex items-center text-yellow-500 text-xs">
                    <i className="fa-solid fa-star mr-1"></i>
                    <span className="font-bold">{item.rating}</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-bold text-deepblue mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-gray-400 text-xs mb-4 flex items-center">
                <i className="fa-solid fa-location-dot mr-1"></i> {item.location}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                <div className="text-xl font-black text-deepblue">${item.price}<span className="text-[10px] font-medium text-gray-400">/avg</span></div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handlePreview(item)}
                    className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 hover:text-accent transition flex items-center justify-center"
                    title="Preview Listing"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 hover:text-deepblue transition flex items-center justify-center">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 hover:text-red-500 transition flex items-center justify-center">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={() => openAddModal(activeTab as EntityType)}
          className="bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px] hover:border-sandy/50 hover:bg-gray-100 transition group"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-sandy transition shadow-sm">
            <i className="fa-solid fa-plus text-2xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-500 group-hover:text-deepblue transition">Add New {activeTab.toLowerCase()}</h3>
            <p className="text-gray-400 text-xs">Expand your inventory</p>
          </div>
        </button>
      </div>
    );
  };

  const renderBookingDetail = () => {
    if (!managedBooking) return null;

    return (
      <div className="animate-fadeIn space-y-8">
        <button 
          onClick={() => setManagedBooking(null)}
          className="flex items-center text-sm font-bold text-gray-400 hover:text-deepblue transition"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Reservations
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Status Bar */}
          <div className={`p-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
            managedBooking.status === 'Confirmed' ? 'bg-green-50' : 'bg-orange-50'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                managedBooking.status === 'Confirmed' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
              }`}>
                <i className={`fa-solid ${managedBooking.status === 'Confirmed' ? 'fa-check-circle' : 'fa-clock'}`}></i>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-400">Reservation {managedBooking.id}</div>
                <h2 className="text-2xl font-black text-deepblue leading-tight">{managedBooking.status}</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white border border-gray-200 text-deepblue rounded-xl font-bold hover:bg-gray-50 transition shadow-sm">
                Message Guest
              </button>
              {managedBooking.status === 'Pending' && (
                <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                  Confirm Booking
                </button>
              )}
              <button className="px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition">
                Cancel
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Guest & Trip Info */}
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Guest Details</h3>
                  <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="w-16 h-16 rounded-full bg-sandy text-white flex items-center justify-center text-2xl font-black">
                      {managedBooking.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-deepblue mb-2">{managedBooking.name}</h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
                        <div className="flex items-center text-gray-600">
                          <i className="fa-solid fa-envelope w-5 text-accent"></i> {managedBooking.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fa-solid fa-phone w-5 text-accent"></i> {managedBooking.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Trip Overview</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Service</div>
                      <div className="text-deepblue font-bold">{managedBooking.item}</div>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Date</div>
                      <div className="text-deepblue font-bold">{managedBooking.date}</div>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Duration</div>
                      <div className="text-deepblue font-bold">{managedBooking.duration}</div>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Guests</div>
                      <div className="text-deepblue font-bold">{managedBooking.guests} Adults</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Special Requests</h3>
                  <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl italic text-gray-700 leading-relaxed">
                    "{managedBooking.specialRequests}"
                  </div>
                </section>
              </div>

              {/* Sidebar: Financials */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <h3 className="text-lg font-black text-deepblue mb-6">Payment Summary</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-bold">Booking Total</span>
                      <span className="text-deepblue font-black">{managedBooking.amount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-bold">NamBuddy Fee (10%)</span>
                      <span className="text-red-400 font-black">-$135</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                      <span className="text-deepblue font-black">Net Payout</span>
                      <span className="text-accent font-black text-xl">$1,215</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-100 flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${managedBooking.paymentStatus === 'PAID' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Payment</span>
                    </div>
                    <span className={`text-xs font-black uppercase ${managedBooking.paymentStatus === 'PAID' ? 'text-green-600' : 'text-red-600'}`}>
                      {managedBooking.paymentStatus}
                    </span>
                  </div>

                  <button className="w-full py-4 bg-deepblue text-white rounded-2xl font-black shadow-xl hover:bg-deepblue/90 transition transform active:scale-95 mb-4">
                    Send Invoice
                  </button>
                  <button className="w-full py-4 border-2 border-gray-200 text-gray-400 rounded-2xl font-black hover:border-deepblue hover:text-deepblue transition">
                    Edit Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row animate-fadeIn">
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Provider Portal</h2>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setManagedBooking(null);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition font-semibold text-sm ${
                  activeTab === tab.id 
                    ? 'bg-deepblue text-white shadow-lg' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <i className={`fa-solid ${tab.icon} w-5`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-gray-100">
          <button 
            onClick={() => setPage(Page.HOME)}
            className="w-full text-left text-sm font-bold text-gray-500 hover:text-deepblue transition flex items-center"
          >
            <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
            Exit to Site
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {managedBooking ? renderBookingDetail() : (
          <>
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h1 className="text-3xl font-black text-deepblue tracking-tight">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h1>
                <p className="text-gray-500 font-medium">Manage your Namibian travel services and listings.</p>
              </div>
              {['ACCOMMODATION', 'VEHICLE', 'TOUR', 'CULTURE'].includes(activeTab) && (
                <button 
                  onClick={() => openAddModal(activeTab as EntityType)}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-2xl font-bold shadow-xl transition transform active:scale-95 flex items-center"
                >
                  <i className="fa-solid fa-plus mr-2"></i> Add New {activeTab.toLowerCase()}
                </button>
              )}
            </header>

            {activeTab === 'OVERVIEW' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center ${stat.color}`}>
                          <i className={`fa-solid ${stat.icon} text-xl`}></i>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</h3>
                      <div className="text-3xl font-black text-deepblue mt-1">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                      <h2 className="text-xl font-bold text-deepblue">Recent Bookings</h2>
                      <button onClick={() => setActiveTab('BOOKINGS')} className="text-sandy text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                          <tr>
                            <th className="px-6 py-4">Traveler</th>
                            <th className="px-6 py-4">Service</th>
                            <th className="px-6 py-4">Dates</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {activeReservations.slice(0, 5).map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition cursor-pointer" onClick={() => setManagedBooking(row)}>
                              <td className="px-6 py-4 font-bold text-deepblue whitespace-nowrap">{row.name}</td>
                              <td className="px-6 py-4 text-gray-600 text-sm">{row.item}</td>
                              <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">{row.date}</td>
                              <td className="px-6 py-4 font-black text-deepblue">{row.amount}</td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                  row.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-deepblue mb-6">Top Performers</h2>
                    <div className="space-y-6">
                      {mockData.TOUR.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                            <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${item.image}`} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-deepblue text-sm truncate">{item.title}</h4>
                            <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase">
                              <span className="text-accent">{item.rating} Rating</span>
                              <span className="mx-2">•</span>
                              <span>{Math.floor(Math.random() * 50) + 20} Bookings</span>
                            </div>
                          </div>
                          <div className="text-sm font-black text-deepblue">${item.price * (Math.floor(Math.random() * 10) + 5)}</div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-10 py-3 rounded-2xl border-2 border-gray-50 text-gray-500 font-bold hover:bg-gray-50 transition text-sm">
                      View Full Analytics
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'BOOKINGS' && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-deepblue">Active Reservations</h2>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Search guests..." className="px-4 py-2 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-sandy" />
                    <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold text-sm">Export</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                        <tr>
                          <th className="px-6 py-4">Guest</th>
                          <th className="px-6 py-4">Product</th>
                          <th className="px-6 py-4">Check In/Start</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {activeReservations.map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-sandy/20 text-sandy flex items-center justify-center font-black text-xs">
                                  {row.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-bold text-deepblue">{row.name}</div>
                                  <div className="text-[10px] text-gray-400 font-bold uppercase">{row.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-600 text-sm font-medium">{row.item}</td>
                            <td className="px-6 py-4 text-gray-500 text-sm font-bold">{row.date}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                  row.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                }`}>
                                  {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                              <button 
                                onClick={() => setManagedBooking(row)}
                                className="text-accent hover:underline font-bold text-sm"
                              >
                                Manage
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
              </div>
            )}

            {['ACCOMMODATION', 'VEHICLE', 'TOUR', 'CULTURE'].includes(activeTab) && renderListings()}
          </>
        )}
      </main>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-deepblue/80 backdrop-blur-sm" onClick={() => setShowAddModal(false)}></div>
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-black text-deepblue tracking-tight">
                   List New {modalType === 'ACCOMMODATION' ? 'Stay' : modalType === 'VEHICLE' ? 'Vehicle' : modalType === 'TOUR' ? 'Tour / Activity' : 'Cultural Experience'}
                </h2>
                <p className="text-gray-500 text-sm">Provide detailed information to attract more travelers.</p>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-deepblue transition">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto space-y-8 bg-white">
              {/* Form Content (Simplified for space) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="label-header">Listing Title</label>
                  <input type="text" className="w-full input-light" />
                </div>
                <div>
                  <label className="label-header">Price ($ USD)</label>
                  <input type="number" className="w-full input-light" />
                </div>
              </div>
              
              <div>
                <label className="label-header">Description</label>
                <textarea rows={4} className="w-full input-light"></textarea>
              </div>

              <div>
                <label className="label-header">Upload Photos</label>
                <div className="border-4 border-dashed border-gray-100 rounded-[2rem] p-10 flex flex-col items-center justify-center text-gray-300 hover:border-sandy/30 hover:text-sandy transition cursor-pointer bg-gray-50/50">
                   <i className="fa-solid fa-cloud-arrow-up text-5xl mb-4"></i>
                   <span className="font-bold">Drop images here or click to browse</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border-t border-gray-100 flex gap-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 px-8 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-200 transition">Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="flex-[2] bg-deepblue text-white px-8 py-4 rounded-2xl font-bold shadow-xl">Publish Listing</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderDashboard;