import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <meta name="robots" content="noindex" />
      <div className="min-h-screen bg-[#1a1a1a] pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={goBack}
            className="flex items-center text-[#468869] hover:text-[#3a6b54] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="bg-[#212121] rounded-lg p-8 border border-[#2c2c2c]">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            
            <p className="text-gray-300 mb-8">
              <strong>Effective Date:</strong> [01/05/2025]
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sidekick Systems ("we", "our", "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Personal details you provide (name, email address, phone number, company name).</li>
                <li>• Information submitted via our website forms, booking system, or LinkedIn forms.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• To respond to inquiries and provide requested services.</li>
                <li>• To improve our website, services, and customer experience.</li>
                <li>• To send service-related updates where you have provided consent.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Storage & Security</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• We store data securely and take reasonable steps to protect it.</li>
                <li>• We do not sell, trade, or rent your personal information to others.</li>
                <li>• Third-party services we use (e.g., Setmore, Stripe, LinkedIn) have their own privacy policies.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• You can request a copy of your personal data we hold.</li>
                <li>• You can ask us to update or delete your information at any time.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions, contact us at:<br />
                📧 hello@sidekicksystems.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;