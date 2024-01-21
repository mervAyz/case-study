// ApiFetcher.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiFetcherProps {
  endpoint: string;
  onDataFetched: (data: any) => void;
}

const ApiFetcher: React.FC<ApiFetcherProps> = ({ endpoint, onDataFetched }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("burada")
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            "X-Country-Id": 'TR',
            "X-Language-Id": 'TR',
          },
        });
        console.log("RESP",response)
        setData(response.data);
        onDataFetched(response.data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, onDataFetched]);

  return null;
};

export default ApiFetcher;
