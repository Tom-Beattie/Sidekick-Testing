import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to streamline your scheduling and payment systems? Book a consultation to get started.
          </p>
        </div>

        <div className="w-full">
          <iframe
            src="https://sidekicksystems.setmore.com/"
            width="100%"
            height="1100"
            frameBorder="0"
            className="rounded-lg"
            title="Book a consultation with Sidekick Systems"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;