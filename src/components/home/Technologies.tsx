import { motion } from 'framer-motion';

const Technologies = () => {
  // Animation variants for the logos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white font-display">
            Mastering Cutting-Edge Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our team stays at the forefront of modern development tools and frameworks
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
        >
          {/* React Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/react.svg" 
              alt="React" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">React</p>
          </motion.div>

          {/* Next.js Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/nextjs.svg" 
              alt="Next.js" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">Next.js</p>
          </motion.div>

          {/* Node.js Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/nodejs.svg" 
              alt="Node.js" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">Node.js</p>
          </motion.div>

          {/* Tailwind CSS Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/tailwindcss.svg" 
              alt="Tailwind CSS" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">Tailwind CSS</p>
          </motion.div>

          {/* Vue.js Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/vue.svg" 
              alt="Vue.js" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">Vue.js</p>
          </motion.div>
          
          {/* TypeScript Logo */}
          <motion.div 
            variants={itemVariants}
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <img 
              src="/images/tech/typescript.svg" 
              alt="TypeScript" 
              className="w-full h-auto transition-all duration-300"
            />
            <p className="text-center text-sm mt-2 text-white font-medium">TypeScript</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
    </section>
  );
};

export default Technologies;
