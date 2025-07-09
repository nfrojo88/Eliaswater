import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, Users, CheckCircle, Star, Quote, Play } from 'lucide-react';

const Home = () => {
  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Excellence",
      description: "Grade I Water Well Drilling Contractor with proven track record"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art Super Rock RS-5000 drilling rig with 1000m+ capability"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted Partnership",
      description: "Serving NGOs, private clients, and government projects across Ethiopia"
    }
  ];

  const featuredServices = [
    {
      title: "Deep Well Drilling",
      description: "Professional drilling services up to 1000m depth with advanced equipment",
      image: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Well Rehabilitation",
      description: "Comprehensive diagnosis and reactivation of existing water wells",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Water Quality Testing",
      description: "Complete physicochemical and biological analysis for safe water",
      image: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  const testimonials = [
    {
      quote: "Reliable and efficient service with great after-support. The team's professionalism and technical expertise made our water access project a complete success.",
      author: "Amref Project Coordinator",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "Outstanding drilling capabilities and professional service delivery. They completed our 300m well ahead of schedule with excellent water yield.",
      author: "Miskir Abate",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const projectGallery = [
    "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <div>
      {/* Hero Section with Large Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Water well drilling operation"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                Empowering Development with{' '}
                <span className="text-primary-red">Precision Water Well Solutions</span>
              </h1>
              
              <p className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-3xl">
                Professional water well drilling services across Ethiopia with state-of-the-art equipment and certified expertise
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link
                  to="/contact"
                  className="bg-primary-red hover:bg-deep-red text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-2xl"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  to="/projects"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Play className="h-5 w-5" />
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-primary-red mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
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

      {/* Featured Services with Large Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Featured <span className="text-primary-red">Services</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive water well solutions from drilling to quality testing
            </p>
          </div>

          <div className="image-grid-3">
            {featuredServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="image-overlay rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="featured-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-primary-red">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Professional Service</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/services"
              className="bg-primary-red hover:bg-deep-red text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors duration-300 inline-flex items-center space-x-3"
            >
              <span>View All Services</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Project <span className="text-primary-red">Gallery</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              A visual showcase of our drilling operations and successful projects
            </p>
          </div>

          <div className="masonry-grid">
            {projectGallery.map((image, index) => (
              <div key={index} className="masonry-item">
                <div className="image-overlay rounded-xl overflow-hidden group cursor-pointer">
                  <img 
                    src={image} 
                    alt={`Project ${index + 1}`}
                    className="gallery-image"
                  />
                  <div className="absolute inset-0 bg-primary-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/projects"
              className="bg-primary-red hover:bg-deep-red text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors duration-300 inline-flex items-center space-x-3"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Client Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Client <span className="text-primary-red">Testimonials</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Hear what our satisfied clients say about our services
            </p>
          </div>

          <div className="image-grid-2 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 p-12 rounded-2xl shadow-lg">
                <Quote className="h-12 w-12 text-primary-red mb-8" />
                <p className="text-gray-800 mb-8 italic text-xl leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="font-bold text-gray-900">— {testimonial.author}</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators with Visual Stats */}
      <section className="image-section-spacing bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Equipment background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-300">We've successfully completed projects for various clients across Ethiopia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold text-primary-red mb-4">50+</div>
              <div className="text-gray-300 text-lg">Wells Drilled</div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold text-primary-red mb-4">95%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold text-primary-red mb-4">1000m</div>
              <div className="text-gray-300 text-lg">Max Depth</div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-5xl font-bold text-primary-red mb-4">8+</div>
              <div className="text-gray-300 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Water well project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Start Your Water Well Project?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Contact our experts today for a comprehensive consultation and detailed project proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-3"
            >
              <span>Get Free Quote</span>
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

export default Home;