import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-[#1a1a1a] to-[#212121] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Streamline Your Business with
              <span className="text-[#468869] block">Scheduling & Payment Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert setup and optimization for scheduling software, payment integrations, and booking workflows. 
              Get your systems aligned and running smoothly from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-[#468869] hover:bg-[#3a6b54] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="border border-[#468869] hover:border-[#3a6b54] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#212121]"
              >
                Book Consultation
              </button>
            </div>

            <div className="space-y-3">
              {[
                "Payment integration expertise (Stripe, Square, PayPal)",
                "Booking widget embeds & website support",
                "Migration & system optimization"
              ].map((item, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#468869] mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#212121] rounded-lg p-8 border border-[#2c2c2c] shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#2c2c2c] rounded-lg">
                  <span className="text-gray-300">Setup Success Rate</span>
                  <span className="text-[#468869] font-bold">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#2c2c2c] rounded-lg">
                  <span className="text-gray-300">Customers Supported</span>
                  <span className="text-[#468869] font-bold">1,500+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#2c2c2c] rounded-lg">
                  <span className="text-gray-300">Average Setup Time</span>
                  <span className="text-[#468869] font-bold">&lt; 30 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;