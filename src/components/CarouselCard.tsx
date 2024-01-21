import React from 'react';
import '../styles/CarouselCard.scss';
import { useNavigate } from 'react-router-dom';

interface CarouselCardProps {
    imageUrl: string;
    title: string;
    id: number;
  }

  
const CarouselCard: React.FC<CarouselCardProps> = ({ imageUrl, title, id }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
      };

    return (
      <div className='carousel-card' onClick={handleClick}>
        <div className='carousel-img'>
            <img width={50} src={imageUrl} alt={`carousel-image-${id}`} />
        </div>
        <div className='carousel-text'>
            <div dangerouslySetInnerHTML={{ __html: title }} />
            <h3>Daha Daha</h3>
        </div>
      </div>
    );
  };
  
  export default CarouselCard;