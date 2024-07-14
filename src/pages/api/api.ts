// api/weather.ts
import axios from 'axios';

export interface WeatherData {
  temperature?: number;
  // Weitere Wetterdaten hier hinzufügen
}

export const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
      params: {
        city: city,
        current_weather: true,
        timezone: 'Europe/Berlin'
      }
    });
    return response.data.current_weather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
