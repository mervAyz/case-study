import React from "react";
import "../styles/CarouselCard.scss";
import { useNavigate } from "react-router-dom";
import images from "../assets";


interface CarouselCardProps {
  imageUrl: string;
  title: string;
  id: number;
  brandIconUrl: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  imageUrl,
  title,
  id,
  brandIconUrl,
}) => {
  console.log("brand-", brandIconUrl);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="carousel-card-container">
      <img className="shape" src={images?.rectangle} />
    <div className="carousel-card" onClick={handleClick}>
      <div className="carousel-img">
        <img width={50} src={imageUrl} alt={`carousel-image-${id}`} />
      </div>
      <div className="brand-image">
        <img src={brandIconUrl} alt={`carousel-image-${id}`} />
      </div>
      <div className="carousel-text">
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <h3>Daha Daha</h3>
      </div>
    </div>
    </div>
  );
};

export default CarouselCard;
