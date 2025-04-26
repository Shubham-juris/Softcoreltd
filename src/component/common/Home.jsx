import React from "react";
import logo from "../../assets/navbar/logo.png";
import img from "../../assets/navbar/img1.jpg";
import img1 from "../../assets/navbar/img.jpg";
import img2 from "../../assets/navbar/img2.jpg";

const Home = () => {
  return (
    <>
      <div
        className=" bg-cover h-[100vh] bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-white text-center px-4 md:px-8">
          <img
            src={logo}
            alt="Softcore Technologies Logo"
            className="mx-auto mb-6 w-32 md:w-40"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Transform Your Business <br className="hidden sm:block" /> with
            Technology
          </h1>
          <p className="mb-6 text-base md:text-lg">
            Discover innovative software solutions for your business needs.
          </p>
        <a href='#contact'>
        <button className="bg-white mb-2 mt-5 text-black font-semibold py-2 px-5 md:py-3 md:px-6 rounded hover:bg-gray-200 transition">
            GET STARTED TODAY
          </button>
        </a> 
        </div>
      </div>
<div className="max-w-7xl flex flex-col mx-auto">


      <div className="mt-10 md:mt-20 px-4 md:px-10 text-center flex flex-col mx-auto justify-center max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-semibold text-red-500">
          About Softcore Technologies
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-4"></div>
      </div>

      <div className="flex flex-col  md:flex-row items-center justify-center gap-8 px-4 md:px-10 mb-10">
        <img
          src={img}
          alt="Development"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-lg md:text-xl text-center font-semibold">
            Our Mission
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: "#32CD32" }}>
            Soft Core Technology": "Empowering businesses through innovative and
            reliable software solutions. We strive to deliver cutting-edge
            technology that drives digital transformation."Soft Core Technology,
            we craft smart, scalable tech solutions to simplify complex
            challenges. Our mission is to fuel progress through innovation and
            integrity.
          </p>
        </div>
      </div>
      </div>
   {/* customer Service section */}
   <div
  className="w-full flex items-center justify-center bg-cover bg-center py-12 px-4 md:py-24 md:px-10 text-white text-center"
  style={{
    backgroundImage: `url(${img2})`,
  }}
>
  <div className="max-w-4xl w-full">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
      Customer satisfaction is our top priority
    </h1>
    <button className="bg-black bg-opacity-80 text-white px-6 py-3 text-sm sm:text-base rounded hover:bg-opacity-100 transition">
      Review coming soon
    </button>
  </div>
</div>


    </>
  );
};

export default Home;
