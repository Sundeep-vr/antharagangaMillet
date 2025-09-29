'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    farmSize: '',
    experience: '',
    interests: [] as string[],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const membershipBenefits = [
    {
      icon: '💰',
      title: 'Better Prices',
      description: 'Get fair and competitive prices for your produce through collective bargaining'
    },
    {
      icon: '🛒',
      title: 'Market Access',
      description: 'Direct access to online and offline markets without middlemen'
    },
    {
      icon: '📚',
      title: 'Training & Support',
      description: 'Regular training programs on modern farming techniques and best practices'
    },
    {
      icon: '🌱',
      title: 'Quality Seeds',
      description: 'Access to high-quality seeds and agricultural inputs at subsidized rates'
    },
    {
      icon: '💳',
      title: 'Financial Support',
      description: 'Credit facilities and financial assistance for farming activities'
    },
    {
      icon: '🤝',
      title: 'Community Network',
      description: 'Connect with fellow farmers and share knowledge and experiences'
    }
  ];

  const membershipTypes = [
    {
      name: 'Individual Farmer',
      description: 'For individual farmers with small to medium landholdings',
      requirements: [
        'Minimum 1 acre of cultivable land',
        'Valid land ownership documents',
        'Interest in millet cultivation',
        'Commitment to sustainable farming practices'
      ],
      benefits: [
        'Access to all FPO services',
        'Training and technical support',
        'Market linkage assistance',
        'Input procurement support'
      ]
    },
    {
      name: 'Farmer Group',
      description: 'For groups of farmers working together',
      requirements: [
        'Minimum 5 farmers in the group',
        'Collective landholding of 10+ acres',
        'Formal group registration',
        'Shared commitment to millet farming'
      ],
      benefits: [
        'Bulk procurement advantages',
        'Group training programs',
        'Collective marketing support',
        'Priority access to resources'
      ]
    },
    {
      name: 'Partner Organization',
      description: 'For NGOs, cooperatives, and other organizations',
      requirements: [
        'Valid organization registration',
        'Experience in rural development',
        'Alignment with FPO objectives',
        'Commitment to farmer welfare'
      ],
      benefits: [
        'Collaborative programs',
        'Resource sharing opportunities',
        'Joint training initiatives',
        'Policy advocacy support'
      ]
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your application has been submitted successfully. Our team will review your application 
            and contact you within 2-3 business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Become part of Antharaganga Millet FPO and transform your farming journey. 
              Together, we can achieve better prices, access to markets, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Why Join Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the numerous benefits of becoming a member of Antharaganga Millet FPO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Membership Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership type that best fits your needs and farming situation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{type.name}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Apply for Membership</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to start your journey with Antharaganga Millet FPO.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location/Village *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Enter your location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (Acres)
                  </label>
                  <select
                    id="farmSize"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select farm size</option>
                    <option value="1-2">1-2 acres</option>
                    <option value="3-5">3-5 acres</option>
                    <option value="6-10">6-10 acres</option>
                    <option value="10+">10+ acres</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Farming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Millet Cultivation',
                    'Organic Farming',
                    'Market Access',
                    'Training Programs',
                    'Financial Support',
                    'Technology Adoption'
                  ].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange(interest)}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Tell us more about your farming background and why you want to join our FPO..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Need Help?</h2>
            <p className="text-xl text-gray-600">
              Our team is here to help you with any questions about membership or the application process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+91 9876543210</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@antharaganga.com</p>
              <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">Kolar, Karnataka</p>
              <p className="text-sm text-gray-500">India - 563101</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
