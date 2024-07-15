import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from 'axios';
import { getWeatherData, WeatherData } from '../pages/api/api'; // Passe den Pfad entsprechend an

interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
}

interface InputWithButtonProps {
  addCityData: (data: { city: string; temperature: number }) => void;
  cityCount: number;
}

export function InputWithButton({ addCityData, cityCount }: InputWithButtonProps) {
  const [city, setCity] = useState('');

  const handleClick = async () => {
    if (cityCount >= 6) return; // Verhindere das Hinzufügen, wenn bereits 6 Städte vorhanden sind

    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
      if (response.data.results && response.data.results.length > 0) {
        const firstResult = response.data.results[0];
        const location: LocationData = {
          latitude: firstResult.latitude,
          longitude: firstResult.longitude,
          city: firstResult.name
        };

        const weather = await getWeatherData(location.latitude, location.longitude);
        if (weather) {
          addCityData({
            city: location.city,
            temperature: weather.temperature
          });
        }
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Stadt / Bezirk . . ."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="button" onClick={handleClick} disabled={cityCount >= 6}>
        Hinzufügen
      </Button>
    </div>
  );
}



export default InputWithButton;
