import React from 'react';
import { MapPin, Ruler, Circle, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      client: "Miskir Abate",
      depth: "250m",
      diameter: "10\"",
      area: "Addisu Gebeya",
      status: "Productive",
      statusColor: "bg-green-500"
    },
    {
      client: "Amref",
      depth: "300m",
      diameter: "14\"",
      area: "Awash Sebat",
      status: "Productive",
      statusColor: "bg-green-500"
    },
    {
      client: "Ato Tadesse",
      depth: "230m",
      diameter: "12\"",
      area: "Arsi Sire",
      status: "Productive",
      statusColor: "bg-green-500"
    },
    {
      client: "Government Project",
      depth: "180m",
      diameter: "10\"",
      area: "Oromia Region",
      status: "Completed",
      statusColor: "bg-blue-500"
    },
    {
      client: "Private Client",
      depth: "320m",
      diameter: "12\"",
      area: "Amhara Region",
      status: "Productive",
      statusColor: "bg-green-500"
    },
    {
      client: "NGO Partnership",
      depth: "275m",
      diameter: "14\"",
      area: "SNNPR",
      status: "Productive",
      statusColor: "bg-green-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Wells Drilled", icon: <Ruler className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "1000m", label: "Max Depth", icon: <Circle className="h-6 w-6" /> },
    { number: "3", label: "Regions Covered", icon: <MapPin className="h-6 w-6" /> }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our successful water well drilling projects across Ethiopia
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <div className="text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-bold">Recent Projects</h3>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Client</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Depth</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Diameter</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Area</th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">{project.client}</td>
                    <td className="px-6 py-4 text-gray-600">{project.depth}</td>
                    <td className="px-6 py-4 text-gray-600">{project.diameter}</td>
                    <td className="px-6 py-4 text-gray-600">{project.area}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{project.client}</h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-gray-500">Depth:</span> {project.depth}</div>
                  <div><span className="text-gray-500">Diameter:</span> {project.diameter}</div>
                  <div className="col-span-2"><span className="text-gray-500">Area:</span> {project.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-blue-300 mb-4">"</div>
            <p className="text-xl md:text-2xl mb-6 italic">
              Reliable and efficient service with great after-support. The team's professionalism 
              and technical expertise made our water access project a complete success.
            </p>
            <div className="font-semibold text-blue-100">— Amref Project Coordinator</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;