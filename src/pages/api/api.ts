import axios from 'axios';

const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function fetchTemperature(city: string): Promise<number> {
  try {
    const url = `${API_BASE_URL}?city=${encodeURIComponent(city)}&current=temperature_2m`;

    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }

    const { data } = response;

    if (!data || !data.current || !data.current.temperature_2m) {
      throw new Error('Invalid data format');
    }

    const temperature: number = data.current.temperature_2m;
    return temperature;
  } catch (error) {
    console.error('Error fetching temperature:', error);
    throw error;
  }
}
