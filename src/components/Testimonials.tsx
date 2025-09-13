import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Owner",
      content: "Tom helped me fix my calendar issues in a jiffy — he even improved the setup in under 30 minutes.",
      rating: 5,
      company: "Local Service Business"
    },
    {
      name: "Michael R.",
      role: "Operations Manager",
      content: "Fantastic onboarding support. Tom made the whole thing feel easy and took the time to ensure I was confident using the system.",
      rating: 5,
      company: "Healthcare Practice"
    },
    {
      name: "Emma T.",
      role: "Salon Owner",
      content: "Tom explained the tools in plain English and tailored the setup to suit our business perfectly.",
      rating: 5,
      company: "Beauty & Wellness"
    },
    {
      name: "David K.",
      role: "Fitness Center Manager",
      content: "Tom always surpasses my expectations — professional, positive, and solution-driven every time.",
      rating: 5,
      company: "Fitness & Recreation"
    },
    {
      name: "Lisa C.",
      role: "Consultant",
      content: "Amiable, knowledgeable, and reassuring. He brought clarity to something that felt overwhelming.",
      rating: 5,
      company: "Professional Services"
    },
    {
      name: "James W.",
      role: "Restaurant Owner",
      content: "The payment integration was seamless and the booking system has transformed how we handle reservations.",
      rating: 5,
      company: "Food & Hospitality"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses have streamlined their operations with expert setup and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#2c2c2c] p-8 rounded-lg border border-[#2c2c2c] hover:border-[#468869] transition-colors">
              <Quote className="w-8 h-8 text-[#468869] mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#468869] fill-current" />
                ))}
              </div>
              
              <div className="border-t border-[#2c2c2c] pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                <div className="text-[#468869] text-sm font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-[#2c2c2c] px-8 py-4 rounded-lg border border-[#2c2c2c]">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#468869] fill-current" />
              ))}
            </div>
            <div className="text-white">
              <span className="font-bold">4.9/5</span> average rating from 1,500+ clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;