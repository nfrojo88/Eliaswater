import React from 'react';
import { Target, Eye, Award, Users, Cog, BookOpen, MapPin, Calendar, Trophy } from 'lucide-react';

const About = () => {
  const goals = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Increase Certified Technical Staff",
      description: "Expand our team with BSc/MSc holders"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Foster Innovation",
      description: "Advance through R&D and modern technology"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Training Excellence",
      description: "Build strong internal training programs"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Modernize Operations",
      description: "Upgrade tools and local fabrication"
    }
  ];

  const teamMembers = [
    {
      name: "Elias Abaw",
      position: "Founder & Managing Director",
      bio: "Over 15 years of experience in water well drilling and project management across Ethiopia.",
      image: " ?auto=compress&cs=tinysrgb&w=800",
      expertise: ["Project Management", "Business Development", "Strategic Planning"]
    },
    {
      name: "Dr. Tadesse Mekuria",
      position: "Chief Hydrogeologist",
      bio: "PhD in Hydrogeology with extensive experience in groundwater assessment and aquifer analysis.",
      image: " ?auto=compress&cs=tinysrgb&w=800",
      expertise: ["Hydrogeology", "Aquifer Testing", "Water Resource Management"]
    },
    {
      name: "Eng. Meseret Bekele",
      position: "Operations Manager",
      bio: "Civil Engineer specializing in drilling operations and equipment management.",
      image: " ?auto=compress&cs=tinysrgb&w=800",
      expertise: ["Drilling Operations", "Equipment Management", "Quality Control"]
    },
    {
      name: "Ato Girma Wolde",
      position: "Senior Drilling Superintendent",
      bio: "20+ years of hands-on drilling experience with expertise in complex geological formations.",
      image: " ?auto=compress&cs=tinysrgb&w=800",
      expertise: ["Field Operations", "Drilling Techniques", "Site Supervision"]
    }
  ];

  const certifications = [
    {
      title: "Grade I Water Well Drilling Contractor",
      issuer: "Ethiopian Ministry of Water Resources",
      year: "2016"
    },
    {
      title: "ISO 9001:2015 Quality Management",
      issuer: "International Organization for Standardization",
      year: "2020"
    },
    {
      title: "Environmental Management Certification",
      issuer: "Ethiopian Environmental Authority",
      year: "2019"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in every project we undertake"
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices in all our dealings"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methods to improve our services"
    },
    {
      title: "Sustainability",
      description: "Environmentally responsible practices for long-term water security"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Large Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046386/photo_2025-07-06_12-54-31_eunlzk.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Elias Water Well"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              About <span className="text-primary-red">Elias Water Well</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
              Building Ethiopia's water infrastructure with precision, innovation, and unwavering commitment to excellence
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Calendar className="h-8 w-8 text-primary-red" />
                <div>
                  <div className="font-bold text-lg">Established 2016</div>
                  <div className="text-gray-300">Years of Excellence</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-primary-red" />
                <div>
                  <div className="font-bold text-lg">Addis Ababa</div>
                  <div className="text-gray-300">Ethiopia</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Trophy className="h-8 w-8 text-primary-red" />
                <div>
                  <div className="font-bold text-lg">Grade I Certified</div>
                  <div className="text-gray-300">Professional Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story with Large Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
                <p>
                  Established in 2016, Elias Water Well Drilling & Machineries Importer began with a simple yet powerful vision: 
                  to provide reliable access to clean water across Ethiopia through professional drilling services.
                </p>
                <p>
                  Founded by Elias Abaw, our company started as a small operation with big dreams. Recognizing the critical 
                  need for water infrastructure in Ethiopia, we invested in state-of-the-art equipment and assembled a team 
                  of experienced professionals dedicated to excellence.
                </p>
                <p>
                  Today, we are proud to be a certified Grade I Water Well Drilling Contractor, having successfully completed 
                  over 50 projects across multiple regions. Our commitment to quality, innovation, and client satisfaction 
                  has made us a trusted partner for NGOs, private clients, and government projects.
                </p>
              </div>
            </div>
            <div className="image-grid-2 gap-6">
              <img 
                src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046369/photo_2025-07-06_12-52-17_2_fb8rml.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Drilling operations" 
                className="featured-image"
              />
              <img 
                src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048816/4_di3evi.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Workshop facility" 
                className="featured-image mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-primary-red">Foundation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="bg-white p-12 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-50 p-6 rounded-full w-fit mx-auto mb-8">
                <Target className="h-12 w-12 text-primary-red" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver superior water well services through modern technology, skilled manpower, 
                and unwavering commitment to client satisfaction.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-50 p-6 rounded-full w-fit mx-auto mb-8">
                <Eye className="h-12 w-12 text-primary-red" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become Africa's leading, most admired, and environmentally responsible 
                water well drilling contractor.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-50 p-6 rounded-full w-fit mx-auto mb-8">
                <Award className="h-12 w-12 text-primary-red" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Excellence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Committed to the highest standards of quality, safety, and environmental 
                responsibility in all our operations.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h3>
            <div className="image-grid-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members with Large Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Meet Our <span className="text-primary-red">Team</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our experienced professionals bring decades of combined expertise to every project
            </p>
          </div>

          <div className="image-grid-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="image-overlay">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-red font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-red-50 text-primary-red text-sm px-3 py-1 rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Certifications & <span className="text-primary-red">Awards</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our commitment to excellence is recognized through various certifications and industry awards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-12 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-yellow-50 p-6 rounded-full w-fit mx-auto mb-8">
                  <Trophy className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 mb-3 text-lg">{cert.issuer}</p>
                <p className="text-primary-red font-bold text-xl">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Strategic <span className="text-primary-red">Goals</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Continuous improvement and growth to better serve our clients and communities
            </p>
          </div>

          <div className="image-grid-4 gap-12">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary-red p-4 rounded-xl w-fit mb-6">
                  <div className="text-white">
                    {goal.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h4>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Equipment background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">What Makes Us Unique</h2>
            <p className="text-2xl max-w-4xl mx-auto">
              Our combination of advanced technology, experienced team, and commitment to excellence sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-white/10 backdrop-blur-sm p-12 rounded-2xl">
              <div className="text-6xl font-bold mb-4">1000m+</div>
              <div className="text-2xl font-semibold mb-3">Drilling Capability</div>
              <div className="text-red-100">Advanced Super Rock RS-5000 rig</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-12 rounded-2xl">
              <div className="text-6xl font-bold mb-4">95%</div>
              <div className="text-2xl font-semibold mb-3">Success Rate</div>
              <div className="text-red-100">Proven track record of productive wells</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-12 rounded-2xl">
              <div className="text-6xl font-bold mb-4">24/7</div>
              <div className="text-2xl font-semibold mb-3">Support</div>
              <div className="text-red-100">Continuous project monitoring and support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;