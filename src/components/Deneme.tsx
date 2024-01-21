// Deneme.tsx

import React, { useEffect, useState } from 'react';
import ChipSlider from '../components/ChipsSlider';
import { motion } from 'framer-motion';
import ApiFetcher from './ApiFetcher';
import '../styles/Deneme.scss';

interface Item {
  Id: number;
  Name: string;
  IconUrl: string;
  Rank: number;
}

const Deneme: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<Item[]>([]);
  const [isApiCallMade, setIsApiCallMade] = useState(false);

  const handleDataFetched = (data: Item[]) => {
    setFetchedData(data);
    setIsApiCallMade(true);
  };

  return (
    <div className="deneme-container">
      {!isApiCallMade && (
        <ApiFetcher
          endpoint="https://api.extrazone.com/tags/list"
          onDataFetched={handleDataFetched}
        />
      )}
      <div className="slider-container">
        {isApiCallMade && <ChipSlider chipsData={fetchedData} />}
      </div>
    </div>
  );
};

export default Deneme;
