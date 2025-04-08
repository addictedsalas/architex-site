import { motion } from 'framer-motion';

const Clients = () => {
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
            Trusted by Top teams & orgs in the world
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
        >
          {/* Logo 1 */}
          <motion.div 
            variants={itemVariants}
            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/clients/client-logo-1.svg" 
              alt="Client Logo" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          {/* Logo 2 */}
          <motion.div 
            variants={itemVariants}
            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/clients/client-logo-2.svg" 
              alt="Client Logo" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          {/* Logo 3 */}
          <motion.div 
            variants={itemVariants}
            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/clients/client-logo-3.svg" 
              alt="Client Logo" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          {/* Logo 4 */}
          <motion.div 
            variants={itemVariants}
            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/clients/client-logo-4.svg" 
              alt="Client Logo" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>

          {/* Logo 5 */}
          <motion.div 
            variants={itemVariants}
            className="w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/clients/client-logo-5.svg" 
              alt="Client Logo" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
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

export default Clients;
