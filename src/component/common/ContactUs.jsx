import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div id='contact' className="mt-10 md:mt-20 text-center px-4">
        <h2 className="text-2xl md:text-5xl font-semibold text-red-500">
          Contact Us
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-4"></div>
      </div>

      <div className="bg-white py-10 px-4 md:px-10 text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Questions or Comments?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          We know that our clients have unique needs. Send us a message, and we
          will get back to you soon.
        </p>

        <div className="mb-6">
          <h3 className="text-base md:text-lg font-semibold">
            Softcore Technologies
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            4629 3 Avenue, Edson, Alberta T7E 1C2, Canada
          </p>
          <a
            href="tel:+17807283026"
            className="text-orange-600 font-semibold block mt-1"
          >
            +1 780-728-3026
          </a>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-gray-700 text-sm md:text-base">
            Hours
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Open today{' '}
            <span className="text-orange-600 font-medium">
              09:00 a.m. – 05:00 p.m.
            </span>
          </p>
        </div>

        <button className="bg-orange-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition mb-10">
          GET IN TOUCH
        </button>

        <div className="w-full h-80 md:h-96">
          <iframe
            title="Softcore Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.2829306660183!2d-116.441073!3d53.5831544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539ff58a60c6f935%3A0x52d8fd65d9a4fccc!2s4629%203%20Ave%2C%20Edson%2C%20AB%20T7E%201C2%2C%20Canada!5e0!3m2!1sen!2sin!4v1686059327638!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
