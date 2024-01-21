// Tags.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ApiFetcher from './ApiFetcher';
import '../styles/Tags.scss';

interface Item {
  Id: number;
  Name: string;
  IconUrl: string;
  Rank: number;
}

const Tags: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<Item[]>([]);
  const [isApiCallMade, setIsApiCallMade] = useState(false);

  const handleDataFetched = (data: Item[]) => {
    setFetchedData(data);
    setIsApiCallMade(true); 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className='tag-container'
      variants={containerVariants}
      initial="hidden"
      animate={isApiCallMade ? "visible" : "hidden"}
    >
      {!isApiCallMade && (
        <ApiFetcher endpoint="https://api.extrazone.com/tags/list" onDataFetched={handleDataFetched} />
      )}
      {fetchedData.length > 0 && (
        <motion.ul 
          className="tag-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {fetchedData.map((item) => (
            <motion.li 
              key={item.Id} 
              className="tag-item"
              variants={itemVariants}
            >
              <motion.div 
                className="tag-content"
              >
                <img className="tag-icon" src={item.IconUrl} alt={`Icon for ${item.Name}`} />
                <div className="tag-name">{item.Name}</div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Tags;
