import React, { useState } from 'react';
import ApiFetcher from './ApiFetcher';
import CarouselCard from './CarouselCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CarouselMain.scss'

const CarouselMain: React.FC = () => {

    const [fetchedData, setFetchedData] = useState<any[]>([]);
    const [isApiCallMade, setIsApiCallMade] = useState(false);

    const handleDataFetched = (data: any[]) => {
        setFetchedData(data);
        setIsApiCallMade(true);
    };

    return (
        <div className='carousel-main'>
            {
                !isApiCallMade && (
                    <ApiFetcher endpoint="https://api.extrazone.com/promotions/list?Channel=PWA" onDataFetched={handleDataFetched} />
                )
            }
            {fetchedData.length > 0 && (
                <Carousel width={300} showArrows={false} showStatus={false} showThumbs={false}>
                {fetchedData.map((item) => (
                    <CarouselCard key={item.id} imageUrl={item.ImageUrl} title={item.Title} id={item.Id} />
                ))}
                </Carousel>
            )}
        </div>
    );

};

export default CarouselMain;