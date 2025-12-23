// --- USER & AUTH ---
export type UserRole = 'TRAVELER' | 'PROVIDER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: Date;
}

export interface Amenity {
  name: string;
  icon: string; // FontAwesome icon class, e.g., 'fa-wifi'
}

export interface ProviderProfile {
  id: string;
  userId: string;
  businessName: string;
  description: string;
  logoUrl?: string;
  verified: boolean;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  customAmenities?: Amenity[]; // Provider-specific custom amenity list
}

// --- ENTITIES (THE STUFF TO SELL) ---

export type EntityType = 'ACCOMMODATION' | 'VEHICLE' | 'TOUR' | 'CULTURE';

export interface BaseListing {
  id: string;
  providerId: string;
  title: string;
  description: string;
  price: number;
  location: string;
  coordinates?: { lat: number; lng: number };
  images: string[];
  rating: number;
  reviewsCount: number;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  amenities?: Amenity[]; // Use the rich Amenity type instead of just strings
}

export interface Accommodation extends BaseListing {
  category: 'Lodge' | 'Hotel' | 'Camping' | 'Guest Farm';
  mealPlan: string;
  rooms: {
    type: string;
    capacity: number;
    priceModifier: number;
  }[];
}

export interface Vehicle extends BaseListing {
  make: string;
  model: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Diesel' | 'Petrol';
  passengers: number;
  bags: number;
  features: string[]; // Rooftop tent, GPS, Winch, etc.
}

export interface Tour extends BaseListing {
  tourType: 'Safari' | 'Extreme Sports' | 'Photography' | 'Nature';
  duration: string;
  maxGroupSize: number;
  inclusions: string[];
  exclusions: string[];
  difficulty: 'Easy' | 'Moderate' | 'Hard';
}

export interface CulturalExperience extends BaseListing {
  tribe?: string; // e.g. Himba, San, Herero
  category: 'Village Tour' | 'Workshop' | 'Storytelling' | 'Handicraft';
  duration: string;
  isParticipatory: boolean;
}

// --- TRANSACTIONS & PLANNING ---

export interface BookingRequest {
  id: string;
  travelerId: string;
  listingId: string;
  entityType: EntityType;
  startDate: Date;
  endDate: Date;
  guests: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  specialRequirements?: string;
}

export interface ItineraryRequest {
  destination: string;
  duration: number;
  budget: string;
  interests: string[];
  travelers: string;
}

export interface ItineraryResponse {
  tripTitle: string;
  summary: string;
  days: DayPlan[];
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  activities: Activity[];
}

export interface Activity {
  name: string;
  description: string;
  locationName: string;
  priceEstimate: string;
  duration: string;
  type: 'Activity' | 'Food' | 'Accommodation';
}

export enum Page {
  HOME = 'HOME',
  PLAN = 'PLAN',
  ACCOMMODATION = 'ACCOMMODATION',
  ACCOMMODATION_DETAIL = 'ACCOMMODATION_DETAIL',
  CAR_RENTAL = 'CAR_RENTAL',
  CAR_DETAIL = 'CAR_DETAIL',
  SAFARI = 'SAFARI',
  SAFARI_DETAIL = 'SAFARI_DETAIL',
  ACTIVITIES = 'ACTIVITIES',
  ACTIVITY_DETAIL = 'ACTIVITY_DETAIL',
  CULTURE = 'CULTURE',
  CULTURE_DETAIL = 'CULTURE_DETAIL',
  RESOURCES = 'RESOURCES',
  EXPLORE = 'EXPLORE',
  PROVIDER_DASHBOARD = 'PROVIDER_DASHBOARD'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GroundingChunk {
  web?: { uri: string; title: string };
  maps?: { 
    uri: string; 
    title: string; 
    placeAnswerSources?: { reviewSnippets?: { content: string }[] }[] 
  };
}

export interface SearchResult {
  text: string;
  groundingChunks?: GroundingChunk[];
}