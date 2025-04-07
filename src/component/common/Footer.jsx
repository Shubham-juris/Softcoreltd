import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center">
      {/* Social Section */}
      <div className="py-10 bg-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
          Social
        </h2>
        <div className="flex justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl md:text-3xl hover:text-blue-800 transition mb-5 mt-2"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-orange-600 py-10 md:py-12 text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe</h2>
        <p className="mb-6 text-sm md:text-base">
          Get 10% off your first purchase when you sign up for our newsletter!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto flex-1 px-4 py-2 text-black rounded placeholder:text-sm focus:outline-none"
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

      {/* Copyright Section */}
      <div className="bg-white text-gray-600 text-sm py-6 px-4">
        <p className="font-semibold mb-1 text-base">Softcore Technologies</p>
        <p>© 2024 Softcore Technologies - All Rights Reserved.</p>
        <p className="mt-2">
          Powered by <span className="font-semibold">Tech</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
