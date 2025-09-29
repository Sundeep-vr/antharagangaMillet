'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Kolar, Karnataka', 'India - 563101'],
      description: 'Visit our office for in-person assistance'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '+91 9876543211'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@antharaganga.com', 'support@antharaganga.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      description: 'We are closed on Sundays and public holidays'
    }
  ];

  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@antharaganga.com',
      phone: '+91 9876543210',
      description: 'For general questions about our FPO and services'
    },
    {
      name: 'Farmer Support',
      email: 'farmers@antharaganga.com',
      phone: '+91 9876543211',
      description: 'For existing farmers and membership-related queries'
    },
    {
      name: 'Business Development',
      email: 'business@antharaganga.com',
      phone: '+91 9876543212',
      description: 'For partnerships and business opportunities'
    },
    {
      name: 'Technical Support',
      email: 'technical@antharaganga.com',
      phone: '+91 9876543213',
      description: 'For technical assistance and training programs'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
          <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We have received your message and will get back to you 
            within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Send Another Message
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with Antharaganga Millet FPO. We're here to help with your questions, 
              support your farming journey, and build lasting partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us. Our team is always ready to assist you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <info.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                <p className="text-gray-600">
                  Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Information</option>
                      <option value="products">Product Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Kolar, Karnataka, India</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Call Now</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Email Us</p>
                      <p className="text-gray-600">info@antharaganga.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Office Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Contact by Department</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for faster and more specialized assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our FPO and services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I become a member of Antharaganga Millet FPO?",
                answer: "You can apply for membership by filling out our online application form on the Join Us page, or by visiting our office in Kolar. We'll review your application and contact you within 2-3 business days."
              },
              {
                question: "What are the benefits of joining the FPO?",
                answer: "Members enjoy better prices for their produce, direct market access, training programs, quality seeds at subsidized rates, financial support, and access to our farmer community network."
              },
              {
                question: "Do you provide training for farmers?",
                answer: "Yes, we regularly conduct training programs on modern farming techniques, sustainable agriculture practices, millet cultivation, and business skills. These programs are free for our members."
              },
              {
                question: "How do you ensure fair prices for farmers?",
                answer: "We use collective bargaining power to negotiate better prices, eliminate middlemen, and provide direct market access. We also offer transparent pricing and regular market updates to our members."
              },
              {
                question: "Can I buy millets directly from your FPO?",
                answer: "Yes, you can purchase our premium millets through our online platform or by visiting our office. We offer various millet varieties at competitive prices with quality assurance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
