import React from 'react';
import { Cog, Zap, Wrench, Truck, Settings, Building } from 'lucide-react';

const Equipment = () => {
  const mainEquipment = [
    {
      name: "Super Rock RS-5000",
      origin: "Germany",
      capability: "1000m depth",
      features: ["High torque capability", "Dual-mode (Mud/DTH)", "Advanced drilling technology"],
      image: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const supportEquipment = [
    {
      icon: <Zap className="h-6 w-6" />,
      name: "Atlas Copco Compressor",
      specs: "1200 CFM – 24 BAR"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      name: "Mud Pumps",
      specs: "2000 l/m capacity"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      name: "Generators",
      specs: "250KVA & 85KVA"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      name: "Transport Fleet",
      specs: "Pickups, Crane Trucks, Forklifts"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      name: "Deep Meters",
      specs: "Up to 500m capability"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      name: "Drilling Accessories",
      specs: "Stabilizers, Drill Collars, Rock Bits, DTH Bits"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Equipment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art drilling equipment and machinery for professional water well services
          </p>
        </div>

        {/* Main Equipment - Super Rock RS-5000 */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={mainEquipment[0].image} 
                  alt="Super Rock RS-5000 Drilling Rig" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                  Featured Equipment
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{mainEquipment[0].name}</h3>
                <p className="text-gray-600 mb-4">Origin: {mainEquipment[0].origin}</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">{mainEquipment[0].capability}</div>
                <div className="space-y-3">
                  {mainEquipment[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Equipment Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Support Equipment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportEquipment.map((equipment, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">
                    {equipment.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{equipment.name}</h4>
                <p className="text-gray-600">{equipment.specs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-12 w-12 text-blue-300" />
          </div>
          <h3 className="text-3xl font-bold text-center mb-4">Workshop & Garage</h3>
          <p className="text-xl text-blue-100 text-center mb-8">
            Fully equipped workshop and garage facility located in Dalatti (Gelan Gudo Sub City)
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Maintenance</div>
              <div className="text-blue-100">Equipment servicing and repair</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Fabrication</div>
              <div className="text-blue-100">Custom parts and components</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Storage</div>
              <div className="text-blue-100">Equipment and parts inventory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;