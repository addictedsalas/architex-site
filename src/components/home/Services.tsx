import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { openCalendlyPopup } from '@/utils/calendly';

interface Service {
  id: number;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'FULLSTACK DEV',
    description: 'From enterprise-scale applications to innovative MVPs, we architect and develop fully functional solutions that transform your vision into reality.',
    color: 'bg-green-300'
  },
  {
    id: 2,
    title: 'UI/UX',
    description: 'Create intuitive, engaging, and accessible user experiences that delight your customers and keep them coming back for more.',
    color: 'bg-green-400'
  },
  {
    id: 3,
    title: 'WEB3',
    description: 'Harness the power of blockchain technology with our cutting-edge Web3 development services for decentralized applications and smart contracts.',
    color: 'bg-green-500'
  },
  {
    id: 4,
    title: 'AI & AUTOMATION',
    description: 'Leverage artificial intelligence and automation to streamline your workflows, gain insights from your data, and create intelligent applications.',
    color: 'bg-green-600'
  },
  {
    id: 5,
    title: 'BRAND BUILDING',
    description: 'Establish a strong, cohesive brand identity that resonates with your audience and sets you apart from the competition.',
    color: 'bg-green-700'
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-center mb-16">
          <div className="relative">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-none font-display">
              <span className="text-green-500">{'{'}</span> OUR SERVICES <span className="text-green-500">{'}'}</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.id} className={`${service.color} relative`}>
              <div
                className="flex justify-between items-center px-8 md:px-16 py-8 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center">
                  <span className="text-4xl md:text-6xl font-black mr-4 md:mr-8">{service.id}.</span>
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black ml-auto font-display">
                  {service.title}
                </h3>
                <div className="ml-6 md:ml-12">
                  <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 md:px-32 pb-12 pt-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <p className="text-lg md:text-xl text-black max-w-3xl mb-6 md:mb-0">
                      {service.description}
                    </p>
                    <button
                      onClick={openCalendlyPopup}
                      className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold rounded-full text-sm whitespace-nowrap transition-colors hover:bg-gray-800"
                    >
                      BOOK A CALL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
