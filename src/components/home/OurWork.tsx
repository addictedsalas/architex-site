import { useState } from 'react';
// import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 'boring-tees',
    title: 'Boring Tees',
    description: 'E-commerce platform for minimalist t-shirt designs',
    videoSrc: '/videos/BoringTeesSite.mp4',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Shopify API'],
    link: '/projects/boring-tees'
  },
  {
    id: 'dabalina',
    title: 'Dabalina',
    description: 'Handcrafted jewelry e-commerce platform',
    videoSrc: '/videos/DabalinaWebsite.mp4',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Shopify'],
    link: '/projects/dabalina'
  },
  {
    id: 'tees-the-moment',
    title: 'Tees The Moment',
    description: 'Custom t-shirt design and ordering platform',
    videoSrc: '/videos/TeesTheMomentSite.mp4',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '/projects/tees-the-moment'
  },
  {
    id: 'ionq-data',
    title: 'IONQ Data Project',
    description: 'Interactive data visualization dashboard for quantum computing metrics',
    videoSrc: '/videos/IONQComparisonTool.mp4',
    tags: ['Vue.js', 'D3.js', 'Python', 'Flask'],
    link: '/projects/ionq-data'
  }
];

const OurWork = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="relative">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-none font-display">
                OUR WORK
              </h2>
              <div
                className="absolute -bottom-4 left-0 h-2 bg-red-500 w-24"
              // initial={{ width: 0 }}
              // animate={{ width: 80 }}
              // transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-lg italic mt-4 md:mt-0">
            Our projects aren&apos;t just cool, they are <span className="text-white font-semibold">freezing-cold</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden bg-dark-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative" style={{ height: '400px' }}>
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    style={{ objectPosition: 'center center' }}
                  />

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/75 flex flex-col justify-between p-8 transition-all duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        {project.description}
                      </h3>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-dark-700 text-white text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={project.link}
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-400 text-black font-bold rounded-full text-sm"
                      >
                        Explore your next move
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project title below image */}
              <div className="mt-5 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white transition-colors hover:text-green-400">{project.title}</h3>
                <Link
                  href={project.link}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
