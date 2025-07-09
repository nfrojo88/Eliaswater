import React from 'react';
import { Link } from 'react-router-dom';
import { Drill, Wrench, Search, Users, Beaker, CheckCircle, ArrowRight, Clock, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Deep & Shallow Water Well Drilling",
      description: "Professional drilling services up to 1000m depth using advanced Super Rock RS-5000 rig technology",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Up to 1000m drilling capability",
        "Advanced Super Rock RS-5000 rig",
        "Both shallow and deep well expertise",
        "Dual-mode drilling (Mud/DTH)",
        "High torque capability"
      ],
      process: [
        "Site geological assessment",
        "Equipment mobilization",
        "Drilling operation execution",
        "Well construction and casing",
        "Testing and commissioning"
      ],
      pricing: "Contact for detailed quote based on depth and specifications"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Well Rehabilitation & Pump Testing",
      description: "Comprehensive diagnosis, development, and reactivation of existing water wells",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046385/photo_2025-07-06_12-52-17_uszk6l.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Well diagnosis and assessment",
        "Development and reactivation",
        "Comprehensive pump testing",
        "Performance optimization",
        "Equipment replacement"
      ],
      process: [
        "Initial well inspection",
        "Diagnostic testing",
        "Rehabilitation planning",
        "Implementation of solutions",
        "Performance verification"
      ],
      pricing: "Starting from $2,000 depending on well condition and requirements"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Hydrogeological & Geophysical Investigations",
      description: "Comprehensive site investigation, logging, formation sampling, and aquifer testing services",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048809/1_uiw0ra.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Site investigation services",
        "Formation sampling and logging",
        "Aquifer testing and analysis",
        "Groundwater mapping",
        "Geological reporting"
      ],
      process: [
        "Desktop study and planning",
        "Field investigation",
        "Data collection and analysis",
        "Report preparation",
        "Recommendations delivery"
      ],
      pricing: "Package deals available from $1,500 for basic investigations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultancy & Supervision",
      description: "End-to-end project oversight with professional geological reporting and technical recommendations",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/3_fyqzvp.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Project oversight and management",
        "Geological reporting",
        "Technical recommendations",
        "Quality assurance",
        "Progress monitoring"
      ],
      process: [
        "Project planning and design",
        "Implementation supervision",
        "Quality control monitoring",
        "Progress reporting",
        "Final documentation"
      ],
      pricing: "Hourly rates from $50 or project-based packages available"
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Water Quality Analysis",
      description: "Complete physicochemical and biological testing to ensure safe and potable water supply",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046369/photo_2025-07-06_12-52-17_2_fb8rml.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Physicochemical testing",
        "Biological analysis",
        "Quick turnaround with partner labs",
        "Comprehensive reporting",
        "Compliance verification"
      ],
      process: [
        "Sample collection",
        "Laboratory analysis",
        "Results interpretation",
        "Report generation",
        "Recommendations provision"
      ],
      pricing: "Basic testing from $150, comprehensive analysis from $300"
    }
  ];

  const testimonials = [
    {
      service: "Deep Well Drilling",
      quote: "Exceptional drilling service with professional execution. Our 300m well was completed ahead of schedule.",
      author: "Amref Project Manager",
      project: "Awash Sebat Water Project",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752050226/photo_2024-12-19_00-51-56_bw4ktg.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      service: "Well Rehabilitation",
      quote: "They successfully rehabilitated our old well, increasing water yield by 200%. Outstanding technical expertise.",
      author: "Miskir Abate",
      project: "Addisu Gebeya Well Rehabilitation",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752050226/photo_2024-12-19_00-51-56_bw4ktg.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      service: "Water Quality Testing",
      quote: "Comprehensive testing and detailed reporting helped us ensure safe water for our community.",
      author: "Local Government Official",
      project: "Community Water Safety Project",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752050226/photo_2024-12-19_00-51-56_bw4ktg.jpg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Excellence",
      description: "Grade I certified contractor with proven expertise"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Delivery",
      description: "Consistent on-time project completion"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Large Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046386/photo_2025-07-06_12-54-31_eunlzk.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Services"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Our <span className="text-primary-red">Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
              Comprehensive water well solutions from initial site investigation to final water quality testing
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-primary-red">{item.icon}</div>
                  <div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-gray-300">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services with Large Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="image-overlay rounded-2xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="featured-image"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-red-50 p-4 rounded-xl w-fit mb-8">
                    <div className="text-primary-red">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 text-xl leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-4">
                          <div className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700 text-lg">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Pricing</h3>
                    <p className="text-gray-600 text-lg">{service.pricing}</p>
                  </div>

                  <Link 
                    to="/contact"
                    className="bg-primary-red hover:bg-deep-red text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 inline-flex items-center space-x-3"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Testimonials with Images */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Client Success <span className="text-primary-red">Stories</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Hear what our clients say about our specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-50 text-primary-red px-4 py-2 rounded-full text-sm font-bold w-fit mb-6">
                  {testimonial.service}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Service <span className="text-primary-red">Packages</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive packages designed to meet different project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white border-2 border-gray-200 p-10 rounded-2xl hover:border-primary-red transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Basic Package</h3>
              <div className="text-4xl font-bold text-primary-red mb-8">From $5,000</div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Site investigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Shallow well drilling (up to 100m)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Basic water quality testing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Project documentation</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-300 block text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-primary-red text-white p-10 rounded-2xl transform scale-105 shadow-2xl">
              <div className="bg-yellow-400 text-primary-red px-4 py-2 rounded-full text-sm font-bold w-fit mb-6">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold mb-6">Professional Package</h3>
              <div className="text-4xl font-bold mb-8">From $15,000</div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-200" />
                  <span className="text-lg">Comprehensive site investigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-200" />
                  <span className="text-lg">Deep well drilling (up to 500m)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-200" />
                  <span className="text-lg">Complete water quality analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-200" />
                  <span className="text-lg">Pump testing and optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-200" />
                  <span className="text-lg">6-month warranty</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-white text-primary-red py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 block text-center"
              >
                Choose Professional
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 p-10 rounded-2xl hover:border-primary-red transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Premium Package</h3>
              <div className="text-4xl font-bold text-primary-red mb-8">From $30,000</div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Full hydrogeological study</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Ultra-deep drilling (up to 1000m)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Advanced water treatment setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">Complete project supervision</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-lg">12-month warranty & support</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-300 block text-center"
              >
                Contact for Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046395/photo_2025-07-06_12-55-04_ma8k3d.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ready to start"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Get in touch with our experts for a comprehensive consultation and detailed project proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-3"
            >
              <span>Request Consultation</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            <Link 
              to="/projects"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-red px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;