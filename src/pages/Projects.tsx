import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Ruler, Circle, CheckCircle, Calendar, User, ArrowRight, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      client: "Amref Health Africa",
      title: "Awash Sebat Community Water Project",
      depth: "300m",
      diameter: "14\"",
      area: "Awash Sebat, Oromia Region",
      status: "Productive",
      category: "NGO",
      completionDate: "March 2024",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046385/photo_2025-07-06_12-52-17_uszk6l.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Large-scale community water project providing clean water access to over 5,000 residents",
      specifications: {
        depth: "300 meters",
        diameter: "14 inches",
        casingType: "API Standard Steel Casing",
        pumpType: "Submersible Pump - 50HP",
        waterYield: "25 liters/second",
        waterQuality: "WHO Standards Compliant"
      },
      challenges: "Rocky geological formations required specialized DTH drilling techniques",
      outcome: "Successfully completed 2 weeks ahead of schedule with excellent water yield",
      testimonial: "Exceptional service delivery with professional execution. The project exceeded our expectations in both quality and timeline.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048816/4_di3evi.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046381/photo_2025-07-06_12-53-41_kuzow2.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046372/photo_2025-07-06_12-54-53_bc63ju.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 2,
      client: "Miskir Abate",
      title: "Private Agricultural Well",
      depth: "250m",
      diameter: "10\"",
      area: "Addisu Gebeya, Addis Ababa",
      status: "Productive",
      category: "Private",
      completionDate: "January 2024",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/3_fyqzvp.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Agricultural irrigation well for large-scale farming operations",
      specifications: {
        depth: "250 meters",
        diameter: "10 inches",
        casingType: "PVC Casing with Steel Reinforcement",
        pumpType: "Submersible Pump - 30HP",
        waterYield: "18 liters/second",
        waterQuality: "Suitable for Irrigation"
      },
      challenges: "Seasonal water table variations required careful aquifer analysis",
      outcome: "Consistent water supply supporting 50 hectares of agricultural land",
      testimonial: "Outstanding technical expertise and reliable service. Our farm productivity has increased significantly.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 3,
      client: "Ministry of Water Resources",
      title: "Rural Water Supply Project",
      depth: "180m",
      diameter: "12\"",
      area: "Arsi Zone, Oromia Region",
      status: "Completed",
      category: "Government",
      completionDate: "November 2023",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Government-funded rural water supply project serving multiple villages",
      specifications: {
        depth: "180 meters",
        diameter: "12 inches",
        casingType: "API Standard Steel Casing",
        pumpType: "Solar-Powered Submersible",
        waterYield: "15 liters/second",
        waterQuality: "Potable Water Standards"
      },
      challenges: "Remote location required careful logistics planning and equipment transportation",
      outcome: "Reliable water supply established for 3 rural communities",
      testimonial: "Professional execution of a complex rural project with excellent results.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/3_fyqzvp.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 4,
      client: "Tadesse Agricultural Enterprise",
      title: "Commercial Irrigation Well",
      depth: "320m",
      diameter: "12\"",
      area: "Amhara Region",
      status: "Productive",
      category: "Private",
      completionDate: "September 2023",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752051936/8_gd3mew.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Deep commercial well for large-scale agricultural irrigation",
      specifications: {
        depth: "320 meters",
        diameter: "12 inches",
        casingType: "Steel Casing with Corrosion Protection",
        pumpType: "High-Capacity Submersible - 75HP",
        waterYield: "30 liters/second",
        waterQuality: "Agricultural Grade"
      },
      challenges: "Deep drilling through multiple geological formations",
      outcome: "High-yield well supporting extensive agricultural operations",
      testimonial: "Exceptional drilling capabilities and professional service delivery.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752051938/9_ioy39c.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 5,
      client: "World Vision Ethiopia",
      title: "Community Health Center Water Supply",
      depth: "275m",
      diameter: "14\"",
      area: "SNNPR",
      status: "Productive",
      category: "NGO",
      completionDate: "July 2023",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752051938/9_ioy39c.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Water supply system for health center and surrounding community",
      specifications: {
        depth: "275 meters",
        diameter: "14 inches",
        casingType: "Stainless Steel Casing",
        pumpType: "Variable Speed Submersible",
        waterYield: "22 liters/second",
        waterQuality: "Medical Grade Standards"
      },
      challenges: "Strict water quality requirements for medical facility use",
      outcome: "Clean, reliable water supply for health center and 2,000 community members",
      testimonial: "Outstanding project management and technical execution. Critical for our health services.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 6,
      client: "Regional Water Bureau",
      title: "Urban Water Supply Extension",
      depth: "400m",
      diameter: "16\"",
      area: "Hawassa, SNNPR",
      status: "In Progress",
      category: "Government",
      completionDate: "Expected May 2024",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "Major urban water supply project to support city expansion",
      specifications: {
        depth: "400 meters",
        diameter: "16 inches",
        casingType: "Heavy-Duty Steel Casing",
        pumpType: "Industrial Submersible - 100HP",
        waterYield: "40 liters/second (projected)",
        waterQuality: "Municipal Water Standards"
      },
      challenges: "Urban environment drilling with minimal disruption requirements",
      outcome: "Project ongoing - 75% complete",
      testimonial: "Professional approach to complex urban drilling project.",
      gallery: [
        "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ];

  const categories = ['All', 'NGO', 'Private', 'Government'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "50+", label: "Wells Drilled", icon: <Ruler className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "1000m", label: "Max Depth", icon: <Circle className="h-6 w-6" /> },
    { number: "3", label: "Regions Covered", icon: <MapPin className="h-6 w-6" /> }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-4xl font-bold text-gray-900">{project.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-3xl p-2"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="image-overlay rounded-xl overflow-hidden mb-6">
                  <img 
                    src={project.gallery[selectedImageIndex]} 
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                {/* Image Gallery */}
                {project.gallery.length > 1 && (
                  <div className="flex space-x-2 mb-8">
                    {project.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          selectedImageIndex === index ? 'border-primary-red' : 'border-gray-200'
                        }`}
                      >
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize text-lg">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Feedback</h3>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">"{project.testimonial}"</p>
                  <p className="text-primary-red font-bold text-lg">— {project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Large Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Projects"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Our <span className="text-primary-red">Projects</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
              A showcase of our successful water well drilling projects across Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="text-primary-red bg-white p-4 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Filter className="h-6 w-6 text-gray-600 mt-3" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-red text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-primary-red border border-gray-200 hover:border-primary-red'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid with Large Images */}
          <div className="image-grid-3 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="image-overlay rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 right-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                      project.status === 'Productive' ? 'bg-green-500 text-white' :
                      project.status === 'Completed' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm mb-3 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.client}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">{project.client}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Ruler className="h-5 w-5 text-primary-red" />
                      <span className="font-semibold">{project.depth}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Circle className="h-5 w-5 text-primary-red" />
                      <span className="font-semibold">{project.diameter}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 col-span-2">
                      <MapPin className="h-5 w-5 text-primary-red" />
                      <span className="text-sm">{project.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{project.completionDate}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-primary-red hover:text-deep-red font-bold flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study with Large Image */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center image-container-spacing">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Featured Case <span className="text-primary-red">Study</span>
              </h2>
              <p className="text-2xl text-gray-600">Deep dive into one of our most challenging and successful projects</p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-96 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-12">
                  <div className="bg-red-50 text-primary-red px-4 py-2 rounded-full text-sm font-bold w-fit mb-6">
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{projects[0].title}</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{projects[0].description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Client:</span>
                      <span className="font-semibold text-lg">{projects[0].client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Depth:</span>
                      <span className="font-semibold text-lg">{projects[0].depth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Water Yield:</span>
                      <span className="font-semibold text-lg">{projects[0].specifications.waterYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Completion:</span>
                      <span className="font-semibold text-lg">{projects[0].completionDate}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(projects[0])}
                    className="bg-primary-red hover:bg-deep-red text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 flex items-center space-x-3"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              What Our Clients <span className="text-primary-red">Say</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Feedback from our satisfied clients across different project types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="text-sm text-primary-red font-bold mb-1">{project.title}</div>
                  <div className="text-xs text-gray-500">{project.category} Project</div>
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{project.testimonial}"</p>
                <div className="font-bold text-gray-900 text-lg">— {project.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ready to start"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Join our growing list of satisfied clients. Let's discuss your water well project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            <Link 
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-red px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;