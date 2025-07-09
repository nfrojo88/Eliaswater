import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cog, Zap, Wrench, Truck, Settings, Building, Shield, Clock, Award, ArrowRight, X } from 'lucide-react';

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const mainEquipment = [
    {
      id: 1,
      name: "Super Rock RS-5000",
      origin: "Germany",
      capability: "1000m depth",
      category: "Primary Drilling Rig",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "High torque capability up to 50,000 Nm",
        "Dual-mode drilling (Mud/DTH)",
        "Advanced hydraulic system",
        "Automated drilling controls",
        "GPS positioning system"
      ],
      specifications: {
        "Max Drilling Depth": "1000 meters",
        "Drilling Diameter": "4\" to 24\"",
        "Engine Power": "450 HP Caterpillar",
        "Torque": "50,000 Nm",
        "Pull-back Force": "200 kN",
        "Weight": "35 tons",
        "Mobility": "Truck-mounted"
      },
      maintenance: "Monthly preventive maintenance with certified technicians",
      safety: "Equipped with emergency stop systems and safety interlocks"
    }
  ];

  const supportEquipment = [
    {
      icon: <Zap className="h-6 w-6" />,
      name: "Atlas Copco Compressor",
      specs: "1200 CFM – 24 BAR",
      category: "Air Compression",
      description: "High-capacity air compressor for DTH drilling operations",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752051938/9_ioy39c.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "1200 CFM air delivery",
        "24 BAR operating pressure",
        "Fuel-efficient operation",
        "Low noise design",
        "Automatic controls"
      ]
    },
    {
      icon: <Cog className="h-6 w-6" />,
      name: "Mud Pumps",
      specs: "2000 l/m capacity",
      category: "Drilling Support",
      description: "High-pressure mud circulation pumps for drilling operations",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048820/5_gstrd5.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "2000 liters/minute capacity",
        "Variable pressure control",
        "Duplex piston design",
        "Corrosion-resistant materials",
        "Easy maintenance access"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      name: "Power Generators",
      specs: "250KVA & 85KVA",
      category: "Power Supply",
      description: "Reliable power generation for remote drilling sites",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048809/1_uiw0ra.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "250KVA primary generator",
        "85KVA backup generator",
        "Automatic start/stop",
        "Fuel monitoring system",
        "Weather-resistant enclosure"
      ]
    },
    {
      icon: <Truck className="h-6 w-6" />,
      name: "Transport Fleet",
      specs: "Pickups, Crane Trucks, Forklifts",
      category: "Logistics",
      description: "Complete fleet for equipment transportation and site logistics",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048829/6_emwdwc.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Heavy-duty pickup trucks",
        "Crane trucks for equipment handling",
        "Forklifts for material handling",
        "Specialized trailers",
        "GPS tracking systems"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      name: "Deep Well Meters",
      specs: "Up to 500m capability",
      category: "Testing Equipment",
      description: "Precision instruments for well depth and water level measurement",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752051936/8_gd3mew.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "500m measurement range",
        "Digital display",
        "Water level detection",
        "Depth accuracy ±1cm",
        "Portable design"
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      name: "Drilling Accessories",
      specs: "Complete drilling tool set",
      category: "Drilling Tools",
      description: "Comprehensive set of drilling accessories and consumables",
      image: "https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048818/2_s9zrjv.jpg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Stabilizers and drill collars",
        "Rock bits and DTH bits",
        "Casing and screens",
        "Drilling fluids",
        "Safety equipment"
      ]
    }
  ];

  const maintenanceProtocols = [
    {
      title: "Daily Inspections",
      description: "Pre-operation safety and functionality checks",
      frequency: "Every operational day"
    },
    {
      title: "Weekly Maintenance",
      description: "Lubrication, filter changes, and system checks",
      frequency: "Every 7 days"
    },
    {
      title: "Monthly Service",
      description: "Comprehensive maintenance by certified technicians",
      frequency: "Every 30 days"
    },
    {
      title: "Annual Overhaul",
      description: "Complete equipment inspection and refurbishment",
      frequency: "Yearly"
    }
  ];

  const safetyFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Emergency Stop Systems",
      description: "Immediate shutdown capability for all equipment"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Continuous equipment performance monitoring"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Operations",
      description: "All operators certified and regularly trained"
    }
  ];

  const EquipmentModal = ({ equipment, onClose }) => {
    if (!equipment) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-4xl font-bold text-gray-900">{equipment.name}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-3xl p-2"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {equipment.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-red rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(equipment.specifications || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 text-lg">{key}:</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h3>
                    <p className="text-gray-600 text-lg">{equipment.maintenance}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Safety</h3>
                    <p className="text-gray-600 text-lg">{equipment.safety}</p>
                  </div>
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
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046395/photo_2025-07-06_12-55-04_ma8k3d.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Equipment"
            className="hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Our <span className="text-primary-red">Equipment</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
              State-of-the-art drilling equipment and machinery for professional water well services
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-4xl font-bold mb-3">1000m</div>
                <div className="text-red-100">Max Drilling Depth</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-4xl font-bold mb-3">450HP</div>
                <div className="text-red-100">Engine Power</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-4xl font-bold mb-3">24/7</div>
                <div className="text-red-100">Equipment Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Equipment - Super Rock RS-5000 */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Featured <span className="text-primary-red">Equipment</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our flagship drilling rig represents the pinnacle of modern drilling technology
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={mainEquipment[0].image} 
                  alt="Super Rock RS-5000 Drilling Rig" 
                  className="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-12">
                <div className="bg-red-50 text-primary-red px-4 py-2 rounded-full text-sm font-bold w-fit mb-6">
                  Primary Drilling Rig
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">{mainEquipment[0].name}</h3>
                <p className="text-gray-600 mb-3 text-lg">Origin: {mainEquipment[0].origin}</p>
                <div className="text-3xl font-bold text-primary-red mb-8">{mainEquipment[0].capability}</div>
                
                <div className="space-y-4 mb-10">
                  {mainEquipment[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedEquipment(mainEquipment[0])}
                  className="bg-primary-red hover:bg-deep-red text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 flex items-center space-x-3"
                >
                  <span>View Full Specifications</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Equipment Grid with Large Images */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Support <span className="text-primary-red">Equipment</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive support equipment ensuring efficient and reliable drilling operations
            </p>
          </div>

          <div className="image-grid-3 gap-12">
            {supportEquipment.map((equipment, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="image-overlay rounded-xl overflow-hidden mb-6">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="equipment-image"
                  />
                </div>
                <div className="bg-red-50 p-4 rounded-xl w-fit mb-6">
                  <div className="text-primary-red">
                    {equipment.icon}
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                  {equipment.category}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{equipment.name}</h4>
                <p className="text-primary-red font-bold mb-4 text-lg">{equipment.specs}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{equipment.description}</p>
                
                <div className="space-y-3">
                  {equipment.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section with Large Images */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Workshop & Garage Facility</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our fully equipped workshop and garage facility in Dalatti (Gelan Gudo Sub City) ensures 
                optimal equipment performance and reliability.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <Wrench className="h-10 w-10 text-primary-red mx-auto mb-4" />
                  <div className="font-bold text-gray-900 text-lg">Maintenance</div>
                  <div className="text-gray-600">Equipment servicing and repair</div>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <Cog className="h-10 w-10 text-primary-red mx-auto mb-4" />
                  <div className="font-bold text-gray-900 text-lg">Fabrication</div>
                  <div className="text-gray-600">Custom parts and components</div>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <Building className="h-10 w-10 text-primary-red mx-auto mb-4" />
                  <div className="font-bold text-gray-900 text-lg">Storage</div>
                  <div className="text-gray-600">Equipment and parts inventory</div>
                </div>
              </div>

              <Link 
                to="/contact"
                className="bg-primary-red hover:bg-deep-red text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 inline-flex items-center space-x-3"
              >
                <span>Visit Our Facility</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="image-grid-2 gap-6">
              <img 
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Workshop tools" 
                className="featured-image"
              />
              <img 
                src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752048823/7_u3rv2r.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipment maintenance" 
                className="featured-image mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Safety Protocols */}
      <section className="image-section-spacing bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Maintenance & <span className="text-primary-red">Safety</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Rigorous maintenance schedules and safety protocols ensure optimal equipment performance and operator safety
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Maintenance Protocols */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-10">Maintenance Schedule</h3>
              <div className="space-y-8">
                {maintenanceProtocols.map((protocol, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{protocol.title}</h4>
                      <span className="bg-red-50 text-primary-red px-3 py-1 rounded-full text-sm font-bold">
                        {protocol.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">{protocol.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Features */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-10">Safety Features</h3>
              <div className="space-y-8">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start space-x-6">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="text-green-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600 text-lg">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="image-section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center image-container-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Technical <span className="text-primary-red">Capabilities</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our equipment specifications demonstrate our capability to handle the most challenging drilling projects
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-red to-deep-red rounded-2xl p-16 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">1000m</div>
                <div className="text-red-100 mb-3 text-xl">Maximum Depth</div>
                <div className="text-red-200">Super Rock RS-5000 capability</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">24"</div>
                <div className="text-red-100 mb-3 text-xl">Maximum Diameter</div>
                <div className="text-red-200">Large diameter drilling capacity</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">50,000</div>
                <div className="text-red-100 mb-3 text-xl">Nm Torque</div>
                <div className="text-red-200">High torque for tough formations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">24/7</div>
                <div className="text-red-100 mb-3 text-xl">Operations</div>
                <div className="text-red-200">Continuous drilling capability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752046395/photo_2025-07-06_12-55-04_ma8k3d.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Experience our equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-red/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Experience Our Equipment in Action</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            See how our state-of-the-art equipment can deliver exceptional results for your water well project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-3"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            <Link 
              to="/projects"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-red px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Equipment in Action
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Modal */}
      <EquipmentModal 
        equipment={selectedEquipment} 
        onClose={() => setSelectedEquipment(null)} 
      />
    </div>
  );
};

export default Equipment;