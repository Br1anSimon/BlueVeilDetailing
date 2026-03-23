import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '25+', label: 'Happy Customers' },
    { icon: Award, value: '1+', label: 'Year Experience' },
    { icon: Clock, value: '24h', label: 'Average Turnaround' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only premium products and proven techniques to deliver exceptional results every time.',
      icon: Award
    },
    {
      title: 'Attention to Detail',
      description: 'Every surface, every corner, every detail matters. We take pride in our meticulous approach.',
      icon: Heart
    },
    {
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen, adapt, and deliver exactly what you need.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-blue-500">Sapphire Shine</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another detailing service. We're passionate professionals dedicated to 
            transforming your vehicle with precision, care, and uncompromising quality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-600/20 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-blue-600/20 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Sapphire Shine Detailing was born from a passion for automotive excellence and a commitment
                  to providing unparalleled service quality. What started as a small operation has grown
                  into a trusted name in premium vehicle care.
                </p>
                <p>
                  Our team of certified professionals brings years of experience and genuine enthusiasm 
                  to every project. We believe that every vehicle deserves the highest level of care, 
                  whether it's a daily driver or a luxury collectible.
                </p>
                <p>
                  Today, we continue to innovate and refine our techniques, staying at the forefront 
                  of detailing technology while maintaining the personal touch that sets us apart.
                </p>
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn More About Us
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto">
                      <Award className="h-10 w-10 text-blue-500" />
                    </div>
                    <p className="text-gray-400">Professional Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;