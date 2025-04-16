
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { openCalendlyPopup } from '@/utils/calendly';

interface PricingPlan {
  name: string;
  description: string;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Foundation Suite',
    description: 'Kickstart your project with essential development and an AI readiness roadmap.',
    popular: false,
    features: [
      'Discovery & Strategy Workshop',
      'MVP Web/App Development (Core Functionality)',
      'AI Readiness Assessment & Consultation',
      'Standard UI/UX Design',
      'Basic Deployment & Setup',
      'Standard Support'
    ],
    ctaText: 'Book Free Consultation',
    ctaLink: '#contact'
  },
  {
    name: 'Growth Accelerator',
    description: 'Develop custom solutions and integrate AI to enhance your business processes.',
    popular: true,
    features: [
      'Everything in Foundation Suite, plus:',
      'Full Custom Software Development',
      'AI Model Integration (Pre-built or Custom)',
      'Business Process Automation',
      'Advanced UI/UX Design & Prototyping',
      'Scalable Cloud Architecture',
      'Enhanced Support & Maintenance'
    ],
    ctaText: 'Book Free Consultation',
    ctaLink: '#contact'
  },
  {
    name: 'Scale Partnership',
    description: 'End-to-end development of complex systems with cutting-edge AI capabilities.',
    popular: false,
    features: [
      'Everything in Growth Accelerator, plus:',
      'Large-Scale Application Development',
      'Proprietary AI Model Development & Training',
      'Advanced Data Analytics & Visualization',
      'Dedicated Development Team Option',
      'Enterprise-Grade Security & Compliance',
      'Priority Support & Strategic Consulting'
    ],
    ctaText: 'Book Free Consultation',
    ctaLink: '#contact'
  }
];

const Pricing = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none font-display mb-4">
            The right <span className="text-green-500">Plans</span> for <span className="relative">your <span className="text-green-500">Ideas</span>
              <svg className="absolute -top-6 -right-8 w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-400 text-lg italic">
            Custom Solutions Tailored to Your Business Needs and Goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden flex flex-col ${plan.popular ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-dark-800 border border-dark-700'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-green-700 text-black font-bold py-1 px-4 text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>

                <p className={`mb-8 ${plan.popular ? 'text-black' : 'text-gray-300'}`}>
                  {plan.description}
                </p>

                {plan.popular && <hr className="border-black/20 my-6" />}
                {!plan.popular && <hr className="border-dark-600 my-6" />}

                <div className="mb-8 flex-grow">
                  <h4 className={`text-lg font-bold mb-4 ${plan.popular ? 'text-black' : 'text-white'}`}>
                    KEY FEATURES INCLUDE:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-green-500'
                          }`} />
                        <span className={plan.popular ? 'text-black' : 'text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button stays at the bottom - updated styles & onClick */}
                <button
                  onClick={openCalendlyPopup}
                  className={`inline-flex items-center justify-center px-8 py-3 border-2 transition-all duration-300 uppercase font-black tracking-wider text-base font-display mt-auto ${plan.popular
                      ? 'border-black text-black hover:bg-black hover:text-white'
                      : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
                    }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Added pricing clarification note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-md max-w-3xl mx-auto">
            Need something different? All plans are fully customizable. Pricing is determined based on your specific project scope after your <span className="text-white font-semibold">free initial consultation</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
