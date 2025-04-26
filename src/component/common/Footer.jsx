import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="py-10 bg-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-4">
          Social
        </h2>
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-2xl md:text-3xl p-3 rounded-full hover:bg-blue-800 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white text-2xl md:text-3xl p-3 rounded-full hover:bg-pink-700 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-2xl md:text-3xl p-3 rounded-full hover:bg-gray-800 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white text-2xl md:text-3xl p-3 rounded-full hover:bg-blue-900 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="bg-orange-600 py-10 md:py-12 text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe</h2>
        <p className="mb-6 text-sm md:text-base">
          Get 10% off your first purchase when you sign up for our newsletter!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto flex-1 px-4 py-2 text-white bg-transparent border border-white rounded placeholder:text-sm placeholder:text-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            SIGN UP
          </button>
        </form>
      </div>

      <div className="bg-white text-gray-600 text-sm py-6 px-4">
        <p className="font-semibold mb-1 text-base">Softcore Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
