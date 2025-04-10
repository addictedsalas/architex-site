import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface PricingPlan {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Launchpad Plan',
    price: '$1999',
    originalPrice: '$2499',
    discount: '20% OFF',
    description: 'To Deliver a fast, functional, and impactful MVP to kickstart your product journey',
    popular: false,
    features: [
      'Project ready within in 3-4 weeks',
      'Responsive design',
      'Pleasant Visual design matching your brand',
      'Essential Features Only',
      'Basic SEO optimization',
      '30 days of support'
    ],
    ctaText: 'Launch Your Site NOW!',
    ctaLink: '/contact'
  },
  {
    name: 'Full Process Monthly Plan',
    price: '$2999',
    originalPrice: '$4499',
    discount: '33% OFF',
    description: 'End-to-end product development with an iterative approach to create a polished, feature-rich product.',
    popular: true,
    features: [
      '1 Developer dedicated to your project',
      'One-of-a-kind crazy Lander design tailored to your brand',
      'High-quality, modern visuals',
      'Continuous Iterations',
      'Attention to detail in every section',
      'Advanced SEO optimization',
      'Priority maintenance and updates',
      'Content management system'
    ],
    ctaText: 'Book a call NOW!',
    ctaLink: '/contact'
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
            Get The Quality and Speed of Big Agencies at <span className="text-white font-semibold">Best Prices</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden ${plan.popular ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-dark-800 border border-dark-700'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-green-700 text-black font-bold py-1 px-4 text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>

                <div className="flex items-baseline mb-2">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-black' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 line-through text-lg ${plan.popular ? 'text-black/70' : 'text-gray-500'}`}>
                    {plan.originalPrice}
                  </span>
                </div>

                <div className="inline-block bg-black text-green-500 text-xs font-bold px-2 py-1 rounded mb-4">
                  {plan.discount}
                </div>

                <p className={`mb-8 ${plan.popular ? 'text-black' : 'text-gray-300'}`}>
                  {plan.description}
                </p>

                {plan.popular && <hr className="border-black/20 my-6" />}
                {!plan.popular && <hr className="border-dark-600 my-6" />}

                <div className="mb-8">
                  <h4 className={`text-lg font-bold mb-4 ${plan.popular ? 'text-black' : 'text-white'}`}>
                    DELIVERABLES INCLUDE :
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

                <Link
                  href={plan.ctaLink}
                  className={`block text-center py-3 px-6 rounded-full font-bold transition-all ${plan.popular
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-green-500 text-black hover:bg-green-600'
                    }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
