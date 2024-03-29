import React from 'react';
import 'aos/dist/aos.css';

function PageOne() {
  return (
    <div className="relative w-full h-screen flex justify-start items-center z-30 font-visbyRoundCFBold">
      <div className="md:ml-32 p-8 md:w-1/3" data-aos="fade-up">
        <div className="text-6xl mb-4">Welcome To Space Game Community ID</div>
        <button className="text-xl border py-2 px-5 rounded-md hover:bg-white hover:text-[#10054d] transition-all duration-300">Join Now</button>
      </div>
    </div>
  );
}

export default PageOne;
