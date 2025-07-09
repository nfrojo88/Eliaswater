import React from 'react';
import { ArrowRight, Award, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Development with{' '}
            <span className="text-blue-300">Precision Water Well Solutions</span>
          </h1>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Award className="h-8 w-8 text-blue-300 mb-2" />
              <h3 className="font-semibold text-lg">Certified Grade I</h3>
              <p className="text-blue-100">Water Well Drilling Contractor</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Zap className="h-8 w-8 text-blue-300 mb-2" />
              <h3 className="font-semibold text-lg">1000m+ Capability</h3>
              <p className="text-blue-100">Deep Well Drilling Capacity</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Users className="h-8 w-8 text-blue-300 mb-2" />
              <h3 className="font-semibold text-lg">Trusted Partner</h3>
              <p className="text-blue-100">NGOs, Private & Government</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;