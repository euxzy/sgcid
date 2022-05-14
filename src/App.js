import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1500,
      easing: 'ease',
    });
  });
  return (
    <div className="App relative bg-[#10054d] text-white w-full overflow-hidden bg-gradient-to-br from-[#10054d] via-[#3d065f] to-[#45108a]">
      <div className="w-full h-screen fixed z-10"></div>

      <div className="w-full h-screen absolute">
        <div className="fixed w-96 h-96 rounded-full bg-[#10054d] bg-opacity-20 p-8 backdrop-filter backdrop-blur-sm -left-1/3 md:-left-24 -top-48 z-40"></div>
        <div className="absolute w-100 h-100 rounded-full bg-[#10054d] bg-opacity-20 p-8 backdrop-filter backdrop-blur-sm left-1/3 md:left-3/4 top-80 z-20"></div>
      </div>

      <PageOne />

      <PageTwo />

      <PageThree />

      <Contact />
    </div>
  );
}

export default App;
