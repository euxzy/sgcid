import React from 'react';
import 'aos/dist/aos.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="relative w-full h-screen z-50">
        <div className="relative container mx-auto my-20 w-3/4 md:w-1/3 border border-purple-500 bg-[#10054d] bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-md z-50" data-aos="fade-up">
          <div className="relative p-5 space-y-5 shadow-xl z-50">
            <h4 className="text-center text-3xl relative z-50">Contact Us</h4>

            <form className="relative z-40">
              <div className="grid grid-cols-2 gap-5 relative z-50">
                <input type="text" className="bg-transparent border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md" placeholder="Name" />
                <input type="email" className="bg-transparent border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md" placeholder="Email" />
                <input type="tel" className="bg-transparent border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md" placeholder="Phone" />
                <textarea cols="10" rows="5" className="bg-transparent border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 rounded-md" placeholder="Write your message..."></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="border border-gray-500 focus:outline-none mt-5 hover:bg-purple-500 px-4 py-2 text-white font-bold w-full rounded-md cursor-pointer transition-all duration-300 ease-in-out"
              />
            </form>
          </div>
        </div>
        <div className="absolute w-96 h-96 rounded-full bg-[#10054d] bg-opacity-20 p-8 backdrop-filter backdrop-blur-sm left-2/3 md:left-600 -top-32 md:-top-56 z-10"></div>
        <div className="absolute w-100 h-100 rounded-full bg-[#10054d] bg-opacity-20 p-8 backdrop-filter backdrop-blur-sm -left-96 md:-left-40 md:top-44 top-96 z-10"></div>
      </div>
    </div>
  );
}

export default Contact;
