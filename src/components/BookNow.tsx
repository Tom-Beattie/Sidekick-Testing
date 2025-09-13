import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookNow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={goBack}
          className="flex items-center text-[#468869] hover:text-[#3a6b54] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to streamline your scheduling and payment systems? Select a time that works for you below.
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
    </div>
  );
};

export default BookNow;