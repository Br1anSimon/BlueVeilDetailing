import React from 'react';
import { Car, Sparkles, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Exterior Detailing',
      description: 'Complete exterior wash, wheel and tire cleaning, clear windows, and protective wax application.',
      features: ['Foam Cannon', 'Wheel & Tire Care', 'Window Cleaning' , 'Protective Wax'],
      image: 'exterior'
    },
    {
      icon: Sparkles,
      title: 'Interior Detailing',
      description: 'Deep cleaning and conditioning of all interior surfaces, upholstery, and trim .',
      features: ['Interior Vaccum', 'Dashboard Care', 'Window Cleaning' , 'Odor Elimination'],
      image: 'interior'
    },
    {
      icon: Shield,
      title: 'Paint Correction & Protection',
      description: 'Advanced decontamination, ceramic coatings and paint protection films to clean and preserve your vehicle\'s finish.',
      features: ['Ceramic Coating', 'Paint Protection Film', 'UV Protection', 'Clay Bar'],
      image: 'protection'
    },
    {
      icon: Clock,
      title: 'Express Services',
      description: 'Quick turnaround services for busy schedules without compromising on quality.',
      features: ['Quick Wash', 'Interior Refresh', 'Tire Shine', 'Same Day Service'],
      image: 'express'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-blue-500">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From comprehensive detailing packages to specialized treatments, we offer a complete range 
            of services to keep your vehicle looking its absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  service.title === 'Paint Correction & Protection' ? 'relative' : ''
                }`}
              >
                {service.title === 'Paint Correction & Protection' && (
                  <div className="absolute inset-0 bg-gray-900/80 rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400 mb-2">Coming Soon</div>
                      <div className="text-gray-500">Advanced services launching soon</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-6 text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;