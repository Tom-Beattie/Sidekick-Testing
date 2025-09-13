import React from 'react';
import { Settings, CreditCard, Globe, RefreshCw, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Scheduling Software Setup",
      description: "Complete setup and configuration of scheduling platforms tailored to your business workflow.",
      features: [
        "Platform selection & configuration",
        "Custom branding & settings",
        "Staff training & documentation",
        "Integration with existing tools"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Seamless payment processing setup with Stripe, Square, PayPal, and other leading providers.",
      features: [
        "Multi-provider setup & testing",
        "Secure payment flow configuration",
        "Fee optimization strategies",
        "Compliance & security setup"
      ]
    },
    {
      icon: Globe,
      title: "Booking Widget Embeds & Website Support",
      description: "Integrate booking functionality directly into your website with custom widgets and forms.",
      features: [
        "Custom booking widget creation",
        "Website integration support",
        "Mobile-responsive design",
        "Brand-consistent styling"
      ]
    },
    {
      icon: RefreshCw,
      title: "Migration & System Optimization",
      description: "Smooth transitions between platforms and ongoing optimization for peak performance.",
      features: [
        "Data migration & preservation",
        "Performance optimization",
        "Workflow streamlining",
        "System health monitoring"
      ]
    },
    {
      icon: Users,
      title: "Business Onboarding Guidance",
      description: "Comprehensive onboarding support to ensure your team is confident and productive from day one.",
      features: [
        "Team training sessions",
        "Best practices guidance",
        "Ongoing support & troubleshooting",
        "Process documentation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial setup to ongoing optimization, I provide end-to-end solutions 
            designed to get your systems aligned and running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#212121] p-8 rounded-lg border border-[#2c2c2c] hover:border-[#468869] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="bg-[#468869] p-3 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#468869] mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#468869] to-[#3a6b54] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Streamline Your Setup?</h3>
            <p className="text-green-100 mb-6">
              Let's get your scheduling and payment systems aligned and optimized for your business needs.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#468869] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105"
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;