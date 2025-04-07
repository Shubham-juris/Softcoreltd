import React from "react";
import logo from "../../assets/navbar/logo.png";
import img from "../../assets/navbar/img1.jpg";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('/src/assets/navbar/img.jpg')",
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
          <button className="bg-white mb-2 mt-5 text-black font-semibold py-2 px-5 md:py-3 md:px-6 rounded hover:bg-gray-200 transition">
            GET STARTED TODAY
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-10 md:mt-20 px-4 md:px-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-red-500">
          About Softcore Technologies
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-4"></div>
      </div>

      <div className="flex flex-col mt-15 md:flex-row items-center justify-center gap-8 px-4 md:px-10 mb-10">
        <img
          src={img}
          alt="Development"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-lg md:text-xl text-center font-semibold">
            Our Mission
          </h3>
          <p className="mt-2 text-sm md:text-base"style={{ color: '#32CD32' }}>
            Soft Core Technology": "Empowering businesses through innovative and
            reliable software solutions. We strive to deliver cutting-edge
            technology that drives digital transformation."Soft Core Technology,
            we craft smart, scalable tech solutions to simplify complex
            challenges. Our mission is to fuel progress through innovation and
            integrity.

            
          </p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div
  className="relative w-full h-[20vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/src/assets/navbar/img2.jpg')",
  }}
>

  <div className="relative text-center text-white px-4 md:px-6">
  <h1 className="text-xl md:text-5xl font-bold drop-shadow-lg mb-30  px-4 py-2 rounded">
  Customer satisfaction is  our top priority
</h1>
  <h1 className=" md:text-1xl font-bold drop-shadow-lg bg-black bg-opacity-10 px-4 py-2 rounded">
  Review coming soon
</h1>

  </div>
</div>

    </>
  );
};

export default Home;
