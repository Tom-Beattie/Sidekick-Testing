import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set page title and meta tags properly
    document.title = 'Privacy Policy - Sidekick Systems';
    
    // Add noindex meta tag to prevent search engine indexing
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    // Cleanup function to remove the meta tag when component unmounts
    return () => {
      document.head.removeChild(metaRobots);
      document.title = 'Sidekick Systems - Scheduling & Payment Solutions';
    };
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
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
            <strong>Effective Date:</strong> January 5, 2025
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sidekick Systems ("we", "our", "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We collect information you provide directly to us, including:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2 pl-4">
                <li>• Personal details you provide (name, email address, phone number, company name)</li>
                <li>• Information submitted via our website forms, booking system, or contact methods</li>
                <li>• Communication records when you contact us for support or services</li>
                <li>• Technical information such as IP address and browser type for website functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2 pl-4">
                <li>• Provide and deliver the services you request</li>
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Improve our website, services, and customer experience</li>
                <li>• Send service-related updates and communications (with your consent)</li>
                <li>• Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Third Parties</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2 pl-4">
                <li>• Service providers who assist us in operating our business (e.g., Setmore for booking, payment processors)</li>
                <li>• Legal authorities when required by law or to protect our rights</li>
                <li>• Third-party services have their own privacy policies that govern their use of your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage & Security</h2>
              <ul className="text-gray-300 mb-6 space-y-2 pl-4">
                <li>• We implement appropriate technical and organizational measures to protect your data</li>
                <li>• Your information is stored securely and access is limited to authorized personnel</li>
                <li>• We retain your information only as long as necessary to provide services or as required by law</li>
                <li>• While we strive to protect your information, no method of transmission over the internet is 100% secure</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2 pl-4">
                <li>• Request access to the personal data we hold about you</li>
                <li>• Request correction of inaccurate or incomplete information</li>
                <li>• Request deletion of your personal data (subject to legal requirements)</li>
                <li>• Withdraw consent for marketing communications at any time</li>
                <li>• Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="bg-[#2c2c2c] p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> hello@sidekicksystems.uk<br />
                  <strong>Phone:</strong> (+44) 738-717-1185
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;