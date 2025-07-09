import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Deep Well Drilling',
    'Shallow Well Drilling',
    'Well Rehabilitation',
    'Water Quality Testing',
    'Hydrogeological Studies',
    'Project Supervision'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048829/6_emwdwc.jpg?auto=compress&cs=tinysrgb&w=1920"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="bg-primary-red p-3 rounded-full">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Elias Water Well</span>
                <span className="text-gray-400">Drilling & Machineries</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Certified Grade I Water Well Drilling Contractor providing professional, 
              efficient, and innovative deep and shallow water well drilling services across Ethiopia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-red p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span>Addis Ababa, Jemo, Kelela Building 3rd Floor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-red p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span>+251-44-27-82-28</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-red p-2 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span>eliassuperrockdrilling@co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-red transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary-red rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-red rounded-full"></span>
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications and Social */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-primary-red to-deep-red text-white px-8 py-4 rounded-xl inline-block">
                <span className="font-bold">Certified Grade I Water Well Drilling Contractor</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Elias Water Well Drilling & Machineries Importer. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-red font-bold">
                "Building Access to Life Through Water"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;