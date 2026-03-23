import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium Auto
                <span className="text-blue-500"> Detailing</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Redefined
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience unparalleled precision and care for your vehicle. Our expert team delivers 
                exceptional interior and exterior detailing services that restore your car's beauty and protect its value.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <span className="text-gray-300">Professional-grade equipment & products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <span className="text-gray-300">Certified detailing specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <span className="text-gray-300">100% satisfaction guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Book Your Service</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button className="border border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury car detailing showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-md border border-gray-700 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">25+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-md border border-gray-700 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1+</div>
                <div className="text-sm text-gray-400">Year Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;