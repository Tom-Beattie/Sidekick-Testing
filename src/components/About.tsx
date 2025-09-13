import React from 'react';
import { Award, TrendingUp, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Customers Supported", value: "1,500+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: TrendingUp, label: "Setup Success Rate", value: "99.8%" },
    { icon: Award, label: "Client Satisfaction", value: "98%" }
  ];

  return (
    <section id="about" className="py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About Sidekick Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bringing clarity and precision to scheduling software and payment integrations for businesses of all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Your Setup & Integration Expert</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 5 years of hands-on experience, I've supported more than 1,500 customers with scheduling 
              software setup and training. As a former onboarding team lead at one of the top 10 global scheduling 
              platforms, I understand the intricacies of getting systems right from the start.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise spans deep integration knowledge across Stripe, Square, PayPal, and comprehensive 
              scheduling workflows. I specialize in making complex setups feel simple and ensuring your business 
              systems work seamlessly together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#468869] rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Payment Integration Mastery</h4>
                  <p className="text-gray-400">Deep expertise in Stripe, Square, PayPal, and integrated workflows</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#468869] rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Proven Track Record</h4>
                  <p className="text-gray-400">1,500+ customers supported with 99.8% setup success rate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#468869] rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Business-First Approach</h4>
                  <p className="text-gray-400">Solutions tailored to your workflow, explained in plain English</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#2c2c2c] p-6 rounded-lg text-center border border-[#2c2c2c] hover:border-[#468869] transition-colors">
                <stat.icon className="w-8 h-8 text-[#468869] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;