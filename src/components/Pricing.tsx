import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Essential',
      price: '$89',
      duration: '2-3 hours',
      description: 'Perfect for regular maintenance',
      features: [
        'Exterior wash & dry',
        'Wheel cleaning',
        'Interior vacuum',
        'Dashboard wipe down',
        'Window cleaning',
        'Tire shine'
      ],
      popular: false,
      icon: Check
    },
    {
      name: 'Premium',
      price: '$149',
      duration: '4-5 hours',
      description: 'Our most popular package',
      features: [
        'Everything in Essential',
        'Paint decontamination',
        'Interior deep clean',
        'Leather conditioning',
        'Engine bay cleaning',
        'Paint sealant application',
        '30-day protection guarantee'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Elite',
      price: '$249',
      duration: '6-8 hours',
      description: 'Ultimate protection & restoration',
      features: [
        'Everything in Premium',
        'Paint correction',
        'Ceramic coating application',
        'Headlight restoration',
        'Carpet shampooing',
        'Odor elimination treatment',
        '90-day protection guarantee',
        'Free maintenance wash'
      ],
      popular: false,
      icon: Zap
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-blue-500">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your vehicle. All prices include our satisfaction guarantee 
            and premium products from trusted brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-gray-900 to-black border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? 'border-blue-500 shadow-blue-500/20 scale-105'
                    : 'border-gray-800 hover:border-blue-500/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    pkg.popular ? 'bg-blue-600/20' : 'bg-gray-800'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${pkg.popular ? 'text-blue-400' : 'text-gray-400'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-400">{pkg.price}</span>
                    <span className="text-gray-400 ml-2">per service</span>
                  </div>
                  
                  <div className="text-sm text-gray-500">{pkg.duration}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-gray-600 hover:border-blue-500 text-white hover:bg-blue-600/10'
                  }`}
                >
                  Book {pkg.name} Package
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom package? We offer tailored solutions for fleets and special vehicles.
          </p>
          <button className="text-blue-400 hover:text-blue-300 font-medium underline">
            Contact us for custom pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;