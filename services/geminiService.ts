
import { GoogleGenAI, Chat, Type } from "@google/genai";
import { ItineraryRequest, SearchResult, GroundingChunk, ItineraryResponse } from "../types";

// Always initialize GoogleGenAI with a named parameter using the process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- Itinerary Generation (Structured) ---
export const generateItinerary = async (request: ItineraryRequest): Promise<ItineraryResponse> => {
  const prompt = `
    Create a detailed ${request.duration}-day travel itinerary for Namibia.
    Focus on: ${request.destination || 'General Namibia Highlights'}.
    Travelers: ${request.travelers}.
    Budget Level: ${request.budget}.
    Interests: ${request.interests.join(', ')}.

    Provide specific, real-world names for lodges, restaurants, and activity providers.
    Estimate prices in Namibian Dollars (NAD) or USD.
  `;

  // Use gemini-3-flash-preview for structured output tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          tripTitle: { type: Type.STRING },
          summary: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                dayNumber: { type: Type.NUMBER },
                title: { type: Type.STRING },
                activities: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      description: { type: Type.STRING },
                      locationName: { type: Type.STRING, description: "Specific name for Google Maps search, e.g. 'Joe's Beerhouse Windhoek'" },
                      priceEstimate: { type: Type.STRING, description: "e.g. $20 USD, Free, or Included" },
                      duration: { type: Type.STRING },
                      type: { type: Type.STRING, enum: ["Activity", "Food", "Accommodation"] }
                    },
                    required: ["name", "description", "locationName", "type"]
                  }
                }
              },
              required: ["dayNumber", "title", "activities"]
            }
          }
        },
        required: ["tripTitle", "summary", "days"]
      }
    }
  });

  // Extract text using the response.text property.
  if (response.text) {
    return JSON.parse(response.text) as ItineraryResponse;
  }
  throw new Error("Failed to generate itinerary structure");
};

// --- Explore with Grounding (Search & Maps) ---
export const searchNamibia = async (query: string, userLocation?: GeolocationCoordinates): Promise<SearchResult> => {
  const tools: any[] = [];
  tools.push({ googleSearch: {} });
  tools.push({ googleMaps: {} });

  const toolConfig: any = {};
  if (userLocation) {
    toolConfig.retrievalConfig = {
      latLng: {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude
      }
    };
  }

  // Maps grounding is supported exclusively in Gemini 2.5 series models.
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Find information about: ${query}. 
    Focus on providing reviews, exact location details, and contact info if it's a place.`,
    config: {
      tools: tools,
      toolConfig: userLocation ? toolConfig : undefined,
    },
  });

  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] | undefined;

  return {
    text: response.text || "No results found.",
    groundingChunks: groundingChunks
  };
};

// --- Chat Bot ---
let chatSession: Chat | null = null;

export const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: "You are 'NamBuddy', an expert local guide for Namibia. You are helpful, enthusiastic, and knowledgeable about safaris, landscapes, culture, and logistics in Namibia. Keep answers concise but informative.",
      }
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  return await chat.sendMessageStream({ message });
};
