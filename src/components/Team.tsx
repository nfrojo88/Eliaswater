import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';

const Team = () => {
  const roles = [
    {
      title: "Hydrogeologists",
      description: "Expert groundwater assessment and aquifer analysis",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Civil Engineers",
      description: "Project design and structural engineering",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Drilling Superintendents",
      description: "On-site drilling operations management",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Electricians & Mechanics",
      description: "Equipment maintenance and electrical systems",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Welders & Support Crew",
      description: "Fabrication and field support services",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const strengths = [
    {
      title: "10+ Years Experience",
      description: "Each staff member brings over a decade of industry experience",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Permanent & Freelance",
      description: "Combination of permanent staff and expert freelance professionals",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Certified Professionals",
      description: "All technical staff hold relevant certifications and qualifications",
      icon: <Award className="h-8 w-8" />
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Professional <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skilled professionals dedicated to delivering exceptional water well drilling services
          </p>
        </div>

        {/* Professional Roles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Staff</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                  <div className="text-white">
                    {role.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{role.title}</h4>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Strengths */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <div className="text-blue-600">
                    {strength.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{strength.title}</h4>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for skilled professionals to join our mission of providing 
            access to clean water across Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View Openings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;