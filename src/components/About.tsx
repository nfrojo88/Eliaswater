import React from 'react';
import { Target, Eye, Award, Users, Cog, BookOpen } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Elias Water Well</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2016, Elias Water Well Drilling & Machineries Importer is a certified Ethiopian contractor 
            dedicated to providing professional, efficient, and innovative deep and shallow water well drilling services.
          </p>
        </div>

        {/* Establishment & Location */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Foundation</h3>
            <p className="text-gray-700 mb-4">
              Based in Addis Ababa, around Jemo, Kelela Building 3rd floor, we have been serving 
              Ethiopia's water infrastructure needs since 2016.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Certified Grade I Water Well Drilling Contractor</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Vision</h4>
                <p className="text-gray-600">
                  To become Africa's leading, most admired, and environmentally responsible 
                  water well drilling contractor.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Mission</h4>
                <p className="text-gray-600">
                  To deliver superior water well services through modern technology, skilled manpower, 
                  and unwavering commitment to client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Strategic Goals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">
                    {goal.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{goal.title}</h4>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Elias Water Well?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000m+</div>
              <div className="text-blue-100">Drilling Capability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Grade I</div>
              <div className="text-blue-100">Certified Contractor</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2016</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;