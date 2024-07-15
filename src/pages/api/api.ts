import axios from 'axios';

export interface WeatherData {
  temperature: number;
  wind_speed: number;
  // Add other weather parameters as needed
}

export const getWeatherData = async (latitude: number, longitude: number): Promise<WeatherData | null> => {
  try {
    // Make the API request
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
        hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
      }
    });

    // Extract and return the relevant weather data
    return {
      temperature: response.data.current_weather.temperature,
      wind_speed: response.data.current_weather.windspeed
      // Add other data as needed
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
