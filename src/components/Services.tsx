import React from 'react';
import { Drill, Wrench, Search, Users, Beaker, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Deep & Shallow Water Well Drilling",
      description: "Drilling up to 1000m depth with advanced Super Rock RS-5000 rig",
      features: ["Up to 1000m drilling capability", "Advanced Super Rock RS-5000 rig", "Both shallow and deep well expertise"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Well Rehabilitation & Pump Testing",
      description: "Diagnosis, development, and reactivation of existing wells",
      features: ["Well diagnosis and assessment", "Development and reactivation", "Comprehensive pump testing"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Hydrogeological & Geophysical Investigations",
      description: "Site investigation, logging, formation sampling, aquifer testing",
      features: ["Site investigation services", "Formation sampling and logging", "Aquifer testing and analysis"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultancy & Supervision",
      description: "End-to-end project oversight with geological reporting",
      features: ["Project oversight and management", "Geological reporting", "Technical recommendations"]
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Water Quality Analysis",
      description: "Complete physicochemical & biological testing",
      features: ["Physicochemical testing", "Biological analysis", "Quick turnaround with partner labs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water well solutions from initial site investigation to final water quality testing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our experts for a comprehensive consultation
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;