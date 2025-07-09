import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, HelpCircle, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [showFAQ, setShowFAQ] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+251-44-27-82-28",
      description: "Call us during business hours",
      action: "tel:+251442782828"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "eliassuperrockdrilling@co.za",
      description: "Send us your project details",
      action: "mailto:eliassuperrockdrilling@co.za"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      details: "Kelela Building, 3rd Floor",
      description: "Addis Ababa, Jemo",
      action: "#"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+251-44-27-82-28",
      description: "Quick messaging support",
      action: "https://wa.me/251442782828"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" }
  ];

  const faqs = [
    {
      question: "What is the typical timeline for a water well drilling project?",
      answer: "Project timelines vary based on depth and geological conditions. Shallow wells (up to 100m) typically take 3-5 days, while deep wells (300m+) can take 1-2 weeks. We provide detailed timelines during project planning."
    },
    {
      question: "Do you provide water quality testing services?",
      answer: "Yes, we offer comprehensive water quality testing including physicochemical and biological analysis. We work with certified partner laboratories to ensure accurate results and compliance with WHO standards."
    },
    {
      question: "What areas do you serve in Ethiopia?",
      answer: "We serve all regions of Ethiopia. Our primary operations are based in Addis Ababa, but we have successfully completed projects in Oromia, Amhara, SNNPR, and other regions across the country."
    },
    {
      question: "Do you offer maintenance services for existing wells?",
      answer: "Absolutely! We provide well rehabilitation, pump testing, maintenance services, and performance optimization for existing wells. Our team can diagnose issues and restore well productivity."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms based on project scope. Typically, we require 30% advance payment, 40% at project milestones, and 30% upon completion. We can discuss customized payment plans for larger projects."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are a certified Grade I Water Well Drilling Contractor licensed by the Ethiopian Ministry of Water Resources. We carry comprehensive insurance coverage for all our operations and equipment."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Large Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Get in Touch"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Get in <span className="text-primary-red">Touch</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
              Ready to start your water well project? Contact our experts for a comprehensive consultation
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <Clock className="h-8 w-8 text-primary-red mx-auto mb-4" />
                <div className="font-bold text-lg">24 Hour Response</div>
                <div className="text-gray-300">Quick project assessment</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <CheckCircle className="h-8 w-8 text-primary-red mx-auto mb-4" />
                <div className="font-bold text-lg">Free Consultation</div>
                <div className="text-gray-300">No obligation quote</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <MapPin className="h-8 w-8 text-primary-red mx-auto mb-4" />
                <div className="font-bold text-lg">Site Visits</div>
                <div className="text-gray-300">On-location assessment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods with Large Visual Elements */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Multiple Ways to <span className="text-primary-red">Reach Us</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="image-grid-4 gap-12 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 block group"
              >
                <div className="bg-primary-red p-6 rounded-full w-fit mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-primary-red font-bold mb-3 text-lg">{method.details}</p>
                <p className="text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Business Hours */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Business Hours</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {businessHours.map((schedule, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl">
                  <div className="font-bold text-gray-900 mb-3 text-lg">{schedule.day}</div>
                  <div className="text-primary-red font-semibold text-lg">{schedule.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                  >
                    <option value="">Select project type</option>
                    <option value="deep-well">Deep Well Drilling</option>
                    <option value="shallow-well">Shallow Well Drilling</option>
                    <option value="rehabilitation">Well Rehabilitation</option>
                    <option value="testing">Water Quality Testing</option>
                    <option value="consultation">Consultation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
                    placeholder="Tell us about your project requirements, location, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-red text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-deep-red transition-colors duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="h-6 w-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Office Info */}
            <div className="space-y-10">
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="bg-red-50 p-4 rounded-xl">
                      <MapPin className="h-8 w-8 text-primary-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Main Office</h4>
                      <p className="text-gray-600 text-lg">
                        Kelela Building, 3rd Floor<br />
                        Jemo, Addis Ababa<br />
                        Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-red-50 p-4 rounded-xl">
                      <MapPin className="h-8 w-8 text-primary-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Workshop & Garage</h4>
                      <p className="text-gray-600 text-lg">
                        Dalatti<br />
                        Gelan Gudo Sub City<br />
                        Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="font-bold text-lg">Interactive Map</p>
                  <p>Addis Ababa Office Location</p>
                  <p className="text-sm mt-2">Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Frequently Asked <span className="text-primary-red">Questions</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Find answers to common questions about our water well drilling services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <button
                    onClick={() => setShowFAQ(showFAQ === index ? false : index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-xl font-bold text-gray-900 pr-6">{faq.question}</h3>
                    <HelpCircle className={`h-6 w-6 text-primary-red transform transition-transform ${showFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  {showFAQ === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
              <a
                href="tel:+251442782828"
                className="bg-primary-red hover:bg-deep-red text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors duration-300 inline-flex items-center space-x-3"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Emergency services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Emergency Services</h2>
          <p className="text-2xl mb-10">
            Need urgent well repair or emergency water services?
          </p>
          <a
            href="tel:+251442782828"
            className="bg-white text-primary-red px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-3"
          >
            <Phone className="h-6 w-6" />
            <span>Emergency Hotline: +251-44-27-82-28</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;