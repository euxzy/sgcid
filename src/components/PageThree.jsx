import React from 'react';
import 'aos/dist/aos.css';
import imgTwo from '../assets/img/2.jpg';

function PageThree() {
  return (
    <div className="relative w-full h-screen flex flex-wrap justify-evenly items-center z-30">
      <div className="w-96 md:w-1/3 p-8">
        <div className="relative text-6xl mb-7 z-30 font-visbyRoundCFBold" data-aos="fade-up">
          Who Can Join?
        </div>
        <div className="relative text-xl z-30" data-aos="fade-up">
          Anyone who plays the game, be it on pc, console or even mobile devices can join this community
        </div>
        <div className="absolute w-96 h-96 rounded-full bg-[#10054d] bg-opacity-30 p-8 backdrop-filter backdrop-blur-sm -left-1/3 md:left-5 -top-1 md:top-48 z-0"></div>
      </div>
      <div className="w-96 md-w-1/3 bg-black bg-opacity-30 border border-r-0 border-t-0 border-opacity-5 backdrop-filter backdrop-blur-sm rounded-md" data-aos="fade-up">
        <img src={imgTwo} alt="img" className="relative rounded-md opacity-25 left-0 top-0 hover:opacity-100 hover:left-7 hover:-top-10 transition-all duration-500" />
      </div>
    </div>
  );
}

export default PageThree;
