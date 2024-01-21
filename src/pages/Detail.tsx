import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiFetcher from '../components/ApiFetcher';
import '../styles/Detail.scss'
import images from '../assets';

const Detail: React.FC = () => {

  const [fetchedData, setFetchedData] = useState<any>();
  const [isApiCallMade, setIsApiCallMade] = useState(false);

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleDataFetched = (data: any) => {
    setFetchedData(data);
    setIsApiCallMade(true); 
  };


  const handleGoBack = () => {
    navigate(-1); 
  };

  useEffect(() => {
    document.body.classList.add('detail-page');

    return () => {
        document.body.classList.remove('detail-page');
    };
}, []);


  return (
    <div>
      {
        !isApiCallMade && (
          <ApiFetcher endpoint={`https://api.extrazone.com/promotions?Id=${id}`} onDataFetched={handleDataFetched} />
        )
      }
      {fetchedData && (

        <div className='detail-container'>
          <div className="icon-back-oval" onClick={handleGoBack}>
            <img src={images.oval} alt="oval"/>
            <img src={images.path} alt="profile" />
          </div>
          <div className='detail-header-img'>
            <img src={fetchedData?.ImageUrl} alt={`Icon for ${fetchedData.Name}`} />
          </div>
          <div className='detail-context'>
            <div dangerouslySetInnerHTML={{ __html: fetchedData?.Title }} />
            <div className='detail-context-description' dangerouslySetInnerHTML={{ __html: fetchedData?.Description }} />
          </div>
          <div className='join-button'>
            <div className='join-button-container'>
              <div className='join-button-inner'>Hemen Katıl</div>
            </div>
          </div>
        </div>


      )}
    </div>
  );
};

export default Detail;
