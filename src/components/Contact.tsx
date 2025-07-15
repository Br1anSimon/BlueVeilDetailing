import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check for service parameter in URL hash
    const hash = window.location.hash;
    if (hash.includes('service=')) {
      const serviceParam = hash.split('service=')[1];
      if (serviceParam) {
        setFormData(prev => ({
          ...prev,
          service: serviceParam
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = 'service_yfx18er';
      const templateId = 'template_nxft1lo';
      const publicKey = 'tDkOSfZdq3tVJaQmo';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_package: formData.service,
        message: formData.message,
        to_email: 'bsimon2005@gmail.com', // Replace with your business email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Auto Care Lane', 'Detailing District, DD 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-BLUE', '(555) 123-2583']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@blueveildetailing.com', 'booking@blueveildetailing.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8AM - 6PM', 'Sat-Sun: 9AM - 5PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="text-blue-500">Appointment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the BlueVeil difference? Get in touch with us today to schedule 
            your premium detailing service or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Package
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  >
                    <option value="">Select a package</option>
                    <option value="essential">Essential - $89</option>
                    <option value="premium">Premium - $149</option>
                    <option value="elite">Elite - $249</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="Tell us about your vehicle and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-center">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-center">
                    Sorry, there was an error sending your message. Please try again or call us directly.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600/20 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">Need Immediate Service?</h4>
              <p className="text-gray-300 mb-4">
                Call our priority booking line for same-day or emergency detailing services.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Call Now: (555) 123-RUSH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;