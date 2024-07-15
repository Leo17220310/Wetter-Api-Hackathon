import { useState } from "react";
import Chart from "../sections/chart";
import InputWithButton from "../sections/inputField"; // Passe den Pfad entsprechend an
import Delete from "../sections/deleteButton"; // Passe den Pfad entsprechend an
import Header   from "../sections/header";

interface CityData {
  city: string;
  temperature: number;
}

export default function Home() {
  const [cityData, setCityData] = useState<CityData[]>([]);

  const addCityData = (data: CityData) => {
    setCityData((prevData) => {
      if (prevData.length >= 6) {
        return prevData; // Verhindere das Hinzufügen, wenn bereits 6 Städte vorhanden sind
      }
      return [...prevData, data];
    });
  };

  const deleteLastCity = () => {
    setCityData((prevData) => prevData.slice(0, -1));
  };

  return (
    <>
    <div>
      <Header></Header>
    </div>
     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl">
        <Chart data={cityData} />
        <div className="m-4"></div>

        <div className="flex justify-center">
          <InputWithButton
            addCityData={addCityData}
            cityCount={cityData.length}
          />
          <Delete deleteLastCity={deleteLastCity} />
        </div>

        
      </div>
    </div>
    
    </>
   
  );
}
