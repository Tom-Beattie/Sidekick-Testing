import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Reducing No-Shows with Smarter Scheduling",
      excerpt: "Discover proven strategies and automated features that can cut your no-show rate by up to 60% while improving customer satisfaction.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      featured: true
    },
    {
      title: "Stripe vs PayPal: What's Right for Your Business?",
      excerpt: "A comprehensive comparison of payment processors to help you choose the best solution for your scheduling and booking needs.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Payment Solutions"
    },
    {
      title: "How to Embed Your Booking Page into Any Website",
      excerpt: "Step-by-step guide to seamlessly integrate booking widgets into your existing website without technical headaches.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Technical Guides"
    },
    {
      title: "5 Signs It's Time to Upgrade Your Scheduling System",
      excerpt: "Recognize the warning signs that your current booking system is holding your business back and what to do about it.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Business Strategy"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Industry Insights & Tips
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest scheduling and payment integration best practices, 
            technical guides, and expert insights to keep your business running smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className={`bg-[#212121] rounded-lg border border-[#2c2c2c] hover:border-[#468869] transition-all duration-300 hover:transform hover:scale-[1.02] ${
                post.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className="p-8">
                {post.featured && (
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-4 h-4 text-[#468869] mr-2" />
                    <span className="text-[#468869] text-sm font-semibold">Featured Post</span>
                  </div>
                )}
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="mb-4">
                  <span className="bg-[#468869]/20 text-[#468869] px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                
                <h3 className={`font-bold text-white mb-4 ${post.featured ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center text-[#468869] hover:text-[#3a6b54] font-semibold transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#468869] hover:bg-[#3a6b54] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;