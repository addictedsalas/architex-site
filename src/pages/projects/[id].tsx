import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
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
}

// Sample project data - in a real app, this would be fetched from an API
const projects: Record<string, ProjectData> = {
  'boring-tees': {
    id: 'boring-tees',
    title: 'Boring Tees',
    description: 'E-commerce platform for minimalist t-shirt designs',
    fullDescription: 'A modern e-commerce platform built for a minimalist clothing brand that specializes in simple, high-quality t-shirts with subtle designs.',
    clientName: 'Boring Tees Co.',
    clientIndustry: 'Fashion & E-commerce',
    projectDuration: '8 weeks',
    services: ['Web Design', 'Web Development', 'E-commerce Integration', 'Payment Processing'],
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Shopify API'],
    challenge: 'The client needed a clean, minimalist e-commerce platform that reflected their brand aesthetic while providing a seamless shopping experience. They wanted to stand out in a crowded market with a unique, user-friendly interface that would appeal to their target demographic of design-conscious consumers.',
    solution: 'We created a custom e-commerce solution with a focus on simplicity and user experience. The design emphasizes white space and typography, allowing the products to be the focal point. We integrated Stripe for secure payments and built a custom product filtering system that makes it easy for customers to find exactly what they are looking for.',
    results: [
      'Increased conversion rate by 35% compared to previous website',
      'Reduced cart abandonment by 28%',
      'Mobile sales increased by 42% in the first month after launch',
      'Average page load time decreased by 2.3 seconds'
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
      id: 'dabalina',
      title: 'Dabalina'
    }
  },
  'dabalina': {
    id: 'dabalina',
    title: 'Dabalina',
    description: 'Handcrafted jewelry e-commerce platform',
    fullDescription: 'An elegant e-commerce website for a boutique jewelry brand specializing in handcrafted, sustainable pieces.',
    clientName: 'Dabalina Jewelry',
    clientIndustry: 'Jewelry & Luxury Goods',
    projectDuration: '10 weeks',
    services: ['Brand Strategy', 'Web Design', 'Web Development', 'E-commerce Integration'],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Shopify'],
    challenge: 'Dabalina needed a website that would showcase their handcrafted jewelry in an elegant, high-end digital environment. They wanted to tell the story behind each piece while making the shopping experience feel personal and exclusive.',
    solution: 'We designed a luxurious digital experience with rich animations and micro-interactions that highlight the craftsmanship of each jewelry piece. The product pages feature detailed zoom functionality and 360-degree views, allowing customers to examine the intricate details of each item. We also created a custom "story" section for each product that explains its inspiration and creation process.',
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
      id: 'boring-tees',
      title: 'Boring Tees'
    }
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
    
    // In a real app, you would fetch project data from an API
    // For this template, we're using the sample data
    if (id && typeof id === 'string') {
      const projectData = projects[id];
      if (projectData) {
        setProject(projectData);
      } else {
        // If project doesn't exist, redirect to 404 or projects page
        router.push('/404');
      }
      setLoading(false);
    }
  }, [id, router]);

  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
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
            {/* Hero Section */}
            <section className="relative py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <Link href="/#work" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
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
                      {project.fullDescription}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-yellow-400 font-bold mb-2">Client</h3>
                        <p className="text-white">{project.clientName}</p>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-bold mb-2">Industry</h3>
                        <p className="text-white">{project.clientIndustry}</p>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-bold mb-2">Timeline</h3>
                        <p className="text-white">{project.projectDuration}</p>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-bold mb-2">Services</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, index) => (
                            <span key={index} className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    {project.media[0].type === 'video' ? (
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
                        alt={project.media[0].alt || project.title} 
                        className="w-full h-full object-cover"
                      />
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
                    <p className="text-gray-300">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-display">Our Solution</h2>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Technologies Section */}
            <section className="py-20 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 font-display text-center">Technologies Used</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="px-6 py-4 bg-[#1E1E1E] rounded-lg">
                      <span className="text-yellow-400 font-bold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Results Section */}
            <section className="py-20 bg-[#111]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-12 font-display text-center">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-6 bg-[#1E1E1E] rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-yellow-400 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-white">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Additional Media Section */}
            {project.media.length > 1 && (
              <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl font-bold text-white mb-12 font-display text-center">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.media.slice(1).map((media, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg shadow-xl">
                        {media.type === 'video' ? (
                          <video 
                            src={media.url} 
                            controls 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img 
                            src={media.url} 
                            alt={media.alt || `${project.title} image ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            
            {/* Testimonial Section */}
            {project.testimonial && (
              <section className="py-20 bg-[#111]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <svg className="w-12 h-12 text-yellow-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-2xl text-white italic mb-8">{project.testimonial.quote}</p>
                  <div>
                    <p className="text-yellow-400 font-bold">{project.testimonial.author}</p>
                    <p className="text-gray-400">{project.testimonial.position}</p>
                  </div>
                </div>
              </section>
            )}
            
            {/* Next Project Section */}
            {project.nextProject && (
              <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-gray-400 mb-4">Next Project</p>
                  <h2 className="text-5xl font-bold text-white mb-8 font-display">{project.nextProject.title}</h2>
                  <Link 
                    href={`/projects/${project.nextProject.id}`}
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase font-black tracking-wider text-base font-display"
                  >
                    View Project
                  </Link>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
