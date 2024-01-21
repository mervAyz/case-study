// Home.tsx
import React from 'react';
import '../styles/Home.scss';
import Top from '../components/Top';
import '../styles/Top.scss';
import Tags from '../components/Tags';
import CarouselMain from '../components/Carousel';
import Navbar from '../components/NavBar'; 
import Deneme from '../components/Deneme';


const Home: React.FC = () => {
  return (
    <div>
      <Top />
      <Deneme />
      {/* <Tags /> */}
      <CarouselMain />
      <Navbar /> 
    </div>
  );
};

export default Home;

