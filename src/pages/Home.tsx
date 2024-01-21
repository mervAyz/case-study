// Home.tsx
import React from 'react';
import '../styles/Home.scss';
import Top from '../components/Top';
import '../styles/Top.scss';
import CarouselMain from '../components/Carousel';
import Navbar from '../components/NavBar'; 
import TagContainer from '../components/TagContainer';


const Home: React.FC = () => {
  return (
    <div>
      <Top />
      <TagContainer />
      <CarouselMain />
      <Navbar /> 
    </div>
  );
};

export default Home;

