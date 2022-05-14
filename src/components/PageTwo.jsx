import React from 'react';
import 'aos/dist/aos.css';
import imgOne from '../assets/img/1.jpg';

function PageTwo() {
  return (
    <div className="PageTwo">
      <div className="relative w-full h-screen flex flex-wrap justify-evenly items-center z-30">
        <div className="relative w-96 md-w-1/3 bg-black bg-opacity-30 border border-l-0 border-t-0 border-opacity-5 backdrop-filter backdrop-blur-sm rounded-md" data-aos="fade-up">
          <img src={imgOne} alt="img" className="relative rounded-md opacity-25 left-0 top-0 hover:opacity-100 hover:-left-7 hover:-top-10 transition-all duration-500" />
        </div>
        <div className="w-96 md:w-1/3 p-8">
          <div className="relative text-6xl mb-7 z-30" data-aos="fade-up">
            What is SGC ID?
          </div>
          <div className="relative text-xl z-30" data-aos="fade-up">
            SGC ID a.k.a Space Game Comunity ID is a comunity for gamers in Indonesia
          </div>
          <div className="absolute w-80 h-80 rounded-full bg-[#10054d] bg-opacity-20 p-8 backdrop-filter backdrop-blur-sm left-[45%] top-[425px] md:left-2/3 md:top-52 z-0"></div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
