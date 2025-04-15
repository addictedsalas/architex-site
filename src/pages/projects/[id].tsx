import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Ensure ArrowRightIcon is imported
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MarqueeBanner from '@/components/layout/MarqueeBanner';

// This would typically come from a CMS or API
interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  clientName: string;
  clientIndustry: string;
  projectDuration: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  media: {
    type: 'image' | 'video';
    url: string;
    alt?: string;
  }[];
  nextProject?: {
    id: string;
    title: string;
  };
  liveUrl?: string; // Added liveUrl field
}

// Sample project data - in a real app, this would be fetched from an API
const projects: Record<string, ProjectData> = {
  'boring-tees': {
    id: 'boring-tees',
    title: 'Boring Tees',
    // Updated description
    description: 'Custom apparel printing (Screen Printing, DTF, Embroidery) for the DMV area.', 
    // Updated fullDescription
    fullDescription: 'A modern e-commerce platform built for Boring Tees Co., a DMV-based custom apparel company specializing in Screen Printing, DTF, and Embroidery. This T3 stack application turns client ideas into vibrant designs on various garments.',
    clientName: 'Boring Tees Co.',
    clientIndustry: 'Fashion & E-commerce',
    projectDuration: '8 weeks',
    services: ['Web Design', 'Web Development', 'E-commerce Integration', 'Payment Processing'],
    // Updated technologies
    technologies: ['T3 Stack', 'Next.js', 'TypeScript', 'tRPC', 'Full-Stack', 'Shopify API', 'Stripe'],
    // Refined challenge
    challenge: 'Boring Tees needed a robust, modern web application to handle custom apparel orders, showcasing their DTF, screen printing, and embroidery services. The platform required a seamless user experience for order customization and efficient backend processing.',
    // Refined solution
    solution: 'We built a full-stack application using the T3 stack (Next.js, TypeScript, tRPC) for optimal performance and type safety. A custom API handles order logic, integrating with Shopify for product management and Stripe for payments. The frontend provides an intuitive interface for customers to upload designs and configure their orders.',
    // Refined results
    results: [
      'Increased conversion rate by 35% compared to previous website',
      'Reduced cart abandonment by 28%',
      'Streamlined order processing, reducing manual effort by 40%', 
      'Mobile sales increased by 42% in the first month after launch'
    ],
    testimonial: {
      quote: "Architex Creative understood our brand from day one. They delivered a website that perfectly captures our minimalist aesthetic while providing an exceptional shopping experience for our customers.",
      author: "Jane Smith",
      position: "Founder, Boring Tees Co."
    },
    media: [
      {
        type: 'video',
        url: '/videos/BoringTeesSite.mp4',
        alt: 'Boring Tees website showcase'
      },
      {
        type: 'image',
        url: '/images/projects/boring-tees-mobile.jpg',
        alt: 'Boring Tees mobile view'
      },
      {
        type: 'image',
        url: '/images/projects/boring-tees-checkout.jpg',
        alt: 'Boring Tees checkout process'
      }
    ],
    nextProject: {
      id: 'tees-the-moment',
      title: 'Tees The Moment'
    },
    liveUrl: 'https://www.boringtees.co' // Added Live URL
  },
  'dabalina': {
    id: 'dabalina',
    title: 'Dabalina',
    // Updated description
    description: 'Elegant Shopify e-commerce store for handcrafted jewelry.',
    // Updated fullDescription
    fullDescription: 'An elegant Shopify e-commerce website for Dabalina Jewelry, a boutique brand specializing in handcrafted, sustainable pieces. The site provides a seamless online shopping experience.',
    clientName: 'Dabalina Jewelry',
    clientIndustry: 'Jewelry & Luxury Goods',
    projectDuration: '10 weeks',
    services: ['Brand Strategy', 'Web Design', 'Web Development', 'E-commerce Integration'],
    // Updated technologies
    technologies: ['Shopify', 'React', 'Tailwind CSS', 'Framer Motion', 'E-commerce'],
    // Refined challenge
    challenge: 'Dabalina required an elegant Shopify store to reflect their brand identity and effectively showcase their handcrafted, sustainable jewelry. Key requirements included a high-end aesthetic, telling the story behind each piece, and a personalized shopping experience integrated with Shopify\'s ecosystem.',
    // Refined solution
    solution: 'We leveraged Shopify\'s powerful e-commerce features and customized a premium theme using React, Tailwind CSS, and Framer Motion for sophisticated animations. Product pages were enhanced with detailed imagery, zoom capabilities, and dedicated sections for storytelling, creating a luxurious and engaging user journey.',
    results: [
      'Average order value increased by 42%',
      'Time spent on product pages increased by 65%',
      'Email newsletter sign-ups increased by 78%',
      'Social media referral traffic increased by 120%'
    ],
    testimonial: {
      quote: "The team at Architex Creative transformed our online presence. Our customers constantly compliment our website, and we have seen a significant increase in sales since the launch.",
      author: "Maria Rodriguez",
      position: "Creative Director, Dabalina Jewelry"
    },
    media: [
      {
        type: 'video',
        url: '/videos/DabalinaWebsite.mp4',
        alt: 'Dabalina website showcase'
      },
      {
        type: 'image',
        url: '/images/projects/dabalina-product.jpg',
        alt: 'Dabalina product page'
      },
      {
        type: 'image',
        url: '/images/projects/dabalina-collection.jpg',
        alt: 'Dabalina collection page'
      }
    ],
    nextProject: {
      id: 'ionq-data',
      title: 'IONQ Data Project'
    },
    liveUrl: 'https://dabalina.com' // Added Live URL
  },
  'tees-the-moment': {
    id: 'tees-the-moment',
    title: 'Tees The Moment',
    // Updated description
    description: 'Custom t-shirt design and ordering platform (Miami-Based).',
    // Updated fullDescription
    fullDescription: 'An innovative platform based in Miami that allows customers to design, customize, and order their own t-shirts with an intuitive interface. Built using the T3 Stack.',
    clientName: 'Tees The Moment',
    clientIndustry: 'Custom Apparel & E-commerce',
    projectDuration: '12 weeks',
    services: ['UX/UI Design', 'Web Development', 'Custom Tool Integration', 'E-commerce Platform'],
    // Updated technologies
    technologies: ['T3 Stack', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Full-Stack App', 'Miami-Based'],
    challenge: 'The client wanted to create a platform that would allow customers with no design experience to easily create custom t-shirts. They needed a solution that was both powerful enough for complex designs but simple enough for anyone to use.',
    solution: 'We developed a custom design tool with intuitive drag-and-drop functionality, pre-made templates, and real-time preview capabilities. The platform includes an advanced color picker, text editor with custom fonts, and the ability to upload personal images. We also implemented a streamlined checkout process and order tracking system.',
    results: [
      'Platform launched with over 10,000 sign-ups in the first month',
      'Average time spent on the design tool: 15 minutes per session',
      'Customer satisfaction rating of 4.8/5 stars',
      '65% of customers complete their purchase after starting a design'
    ],
    testimonial: {
      quote: "Architex Creative delivered exactly what we envisioned - a fun, easy-to-use platform that makes custom t-shirt design accessible to everyone. Our customers love the experience, and our business has grown exponentially since launch.",
      author: "Marcus Johnson",
      position: "CEO, Tees The Moment"
    },
    media: [
      {
        type: 'video',
        url: '/videos/TeesTheMomentSite.mp4',
        alt: 'Tees The Moment website showcase'
      },
      {
        type: 'image',
        url: '/images/projects/tees-the-moment-designer.jpg',
        alt: 'T-shirt designer tool'
      },
      {
        type: 'image',
        url: '/images/projects/tees-the-moment-mobile.jpg',
        alt: 'Mobile view of the platform'
      }
    ],
    nextProject: {
      id: 'dabalina',
      title: 'Dabalina'
    }
    // No liveUrl for this one yet
  },
  'ionq-data': {
    id: 'ionq-data',
    title: 'IONQ Data Project',
    // Updated description
    description: 'Interactive dashboard visualizing quantum computing metrics via SolidWorks & Swagger APIs.',
    // Updated fullDescription
    fullDescription: 'A sophisticated data visualization platform designed for IONQ, enabling analysis and presentation of complex quantum computing performance metrics. It integrates with SolidWorks via a C# backend and utilizes a Swagger API, all presented through a T3 Stack frontend.',
    clientName: 'IONQ Technologies',
    clientIndustry: 'Quantum Computing & Technology',
    projectDuration: '16 weeks',
    services: ['Data Visualization', 'Dashboard Design', 'API Integration', 'Performance Optimization'],
    // Updated technologies
    technologies: ['T3 Stack', 'C#', 'SolidWorks API', 'Swagger API', 'Data Visualization', 'Next.js', 'TypeScript'],
    challenge: 'IONQ needed a way to visualize extremely complex quantum computing metrics in a way that was both technically accurate for researchers and accessible for potential investors and clients. The data sets were massive and required real-time processing and visualization.',
    solution: 'We created a custom dashboard with interactive 3D visualizations of quantum states and operations. The platform features real-time data processing, comparative analysis tools, and the ability to generate comprehensive reports. We implemented WebGL for handling complex 3D visualizations and optimized the backend for processing large datasets efficiently.',
    results: [
      'Reduced data analysis time by 75% for research team',
      'Increased investor understanding of quantum metrics by 60%',
      'Platform handles over 10 million data points with sub-second response time',
      'Used in 12 major investor presentations resulting in $40M in new funding'
    ],
    testimonial: {
      quote: "The data visualization platform developed by Architex Creative has transformed how we communicate our quantum computing advances. Complex concepts that were previously difficult to explain are now immediately understandable through the interactive visualizations.",
      author: "Dr. Sarah Chen",
      position: "Chief Research Officer, IONQ Technologies"
    },
    media: [
      {
        type: 'video',
        url: '/videos/IONQComparisonTool.mp4',
        alt: 'IONQ Data Project dashboard showcase'
      },
      {
        type: 'image',
        url: '/images/projects/ionq-data-visualization.jpg',
        alt: 'Quantum data visualization example'
      },
      {
        type: 'image',
        url: '/images/projects/ionq-data-reporting.jpg',
        alt: 'Reporting feature screenshot'
      }
    ],
    nextProject: {
      id: 'boring-tees',
      title: 'Boring Tees'
    }
    // No liveUrl for this one yet
  }
};

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add dark class to HTML element for dark mode
    document.documentElement.classList.add('dark');
    
    // Fetch project data based on ID from query param
    if (id && typeof id === 'string') {
      const projectData = projects[id];
      if (projectData) {
        setProject(projectData);
      } else {
        // Redirect if project doesn't exist
        router.push('/404'); 
      }
      setLoading(false);
    }
  }, [id, router]);

  if (loading || !project) {
    // Loading state
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Architex Creative</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="min-h-screen text-light-100 flex flex-col bg-black">
        <MarqueeBanner />
        <div className="flex-grow flex flex-col relative">
          <Navbar />
          
          <main className="flex-grow relative z-10">
            {/* Hero Section - Original Layout */}
            <section className="relative py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <Link href="/#work" className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors">
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                    Back to Projects
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none font-display mb-6">
                      {project.title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                      {project.fullDescription} {/* Uses updated fullDescription */}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-green-500 font-bold mb-2">Client</h3>
                        <p className="text-white">{project.clientName}</p>
                      </div>
                      <div>
                        <h3 className="text-green-500 font-bold mb-2">Industry</h3>
                        <p className="text-white">{project.clientIndustry}</p>
                      </div>
                      <div>
                        <h3 className="text-green-500 font-bold mb-2">Timeline</h3>
                        <p className="text-white">{project.projectDuration}</p>
                      </div>
                      <div>
                        <h3 className="text-green-500 font-bold mb-2">Services</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, index) => (
                            <span key={index} className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                     {/* <<< Added Visit Live Site Button Here >>> */}
                     {project.liveUrl && (
                      <div className="mt-8">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                          Visit Live Site
                          <ArrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                    {/* <<< End Button >>> */}
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg shadow-xl h-96 lg:h-auto"> {/* Added fixed height for smaller screens */} 
                    {project.media && project.media.length > 0 && project.media[0]?.url && ( // Added check for media[0] existence
                      project.media[0].type === 'video' ? (
                        <video 
                          src={project.media[0].url} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={project.media[0].url} 
                          alt={(project.media[0].alt || project.title)} 
                          className="w-full h-full object-cover"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Challenge & Solution Section */}
            <section className="py-20 bg-[#111]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-display">The Challenge</h2>
                    <p className="text-gray-300">{project.challenge} {/* Uses updated challenge */}</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-display">Our Solution</h2>
                    <p className="text-gray-300">{project.solution} {/* Uses updated solution */}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Technologies Section */}
            <section className="py-20 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 font-display text-center">Technologies Used</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {project.technologies.map((tech, index) => ( // Uses updated technologies
                    <div key={index} className="px-6 py-4 bg-[#1E1E1E] rounded-lg">
                      <span className="text-green-500 font-bold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Results Section */}
            <section className="py-20 bg-[#111]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-12 font-display text-center">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid for potentially 4 results */} 
                  {project.results.map((result, index) => ( // Uses updated results
                    <div key={index} className="p-6 bg-[#1E1E1E] rounded-lg flex items-start">
                      <div className="flex-shrink-0 bg-green-500 p-2 rounded-full mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Testimonial Section - Kept Original */}
            {project.testimonial && (
              <section className="py-20 bg-[#111]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-2xl text-white italic mb-8">{project.testimonial.quote}</p>
                  <div>
                    <p className="text-green-500 font-bold">{project.testimonial.author}</p>
                    <p className="text-gray-400">{project.testimonial.position}</p>
                  </div>
                </div>
              </section>
            )}
            
            {/* Next Project Section - Kept Original */}
            {project.nextProject?.id && project.nextProject?.title && ( // Added optional chaining
              <section className="py-20 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-gray-400 uppercase tracking-wider mb-2">Next Project</p>
                  <h2 className="text-5xl font-bold text-white mb-8 font-display">{project.nextProject.title}</h2>
                  <Link 
                    href={`/projects/${project.nextProject.id}`}
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 uppercase font-black tracking-wider text-base font-display"
                  >
                    View Project
                  </Link>
                </div>
              </section>
            )}
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
