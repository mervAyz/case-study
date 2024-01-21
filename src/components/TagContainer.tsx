import React, { useEffect, useState } from 'react';
import ChipSlider from './ChipsSlider';
import { motion } from 'framer-motion';
import ApiFetcher from './ApiFetcher';
import '../styles/TagContainer.scss';

interface Item {
  Id: number;
  Name: string;
  IconUrl: string;
  Rank: number;
}

const TagContainer: React.FC = () => {
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

export default TagContainer;
