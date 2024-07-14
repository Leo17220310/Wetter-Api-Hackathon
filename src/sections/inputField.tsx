import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchTemperature } from "../pages/api/api";

const InputWithButton = () => {
  const [temperatures, setTemperatures] = useState<{ [key: string]: number }>({
    Paris: NaN,
    Berlin: NaN,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSelect = async () => {
    setLoading(true);
    try {
      const temperaturesData = await Promise.all([
        fetchTemperature('Paris'),
        fetchTemperature('Berlin'),
      ]);

      const [temperatureParis, temperatureBerlin] = temperaturesData;
      
      setTemperatures({
        Paris: temperatureParis,
        Berlin: temperatureBerlin,
      });

      setError('');
    } catch (error) {
      console.error('Error fetching temperatures:', error);
      setError('Failed to fetch temperatures data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Button type="button" onClick={handleSelect}>
        Select
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        <h2>Temperaturen:</h2>
        <ul>
          <li>Paris: {isNaN(temperatures.Paris) ? 'Laden...' : `${temperatures.Paris} °C`}</li>
          <li>Berlin: {isNaN(temperatures.Berlin) ? 'Laden...' : `${temperatures.Berlin} °C`}</li>
        </ul>
      </div>
    </div>
  );
};

export default InputWithButton;
