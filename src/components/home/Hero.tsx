import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Main headline */}
          <div className="flex flex-col items-start">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none font-display"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DESIGN
              </motion.h1>

              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none font-display"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                DEVELOP
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-black tracking-tighter leading-none bg-yellow-300 py-2 px-6 -rotate-6 inline-block transform shadow-lg font-display"
                  initial={{ y: 100, opacity: 0, rotate: 0 }}
                  animate={{ y: 0, opacity: 1, rotate: -6 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  DEPLOY
                </motion.h1>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-300 text-lg md:text-xl font-medium font-sans">
                No fluff, no jargon, just clean, elegant code and designs that pop.<br />
                Get your own <span className="text-yellow-300 font-bold font-sans">custom digital solution</span> right now!
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-300 uppercase font-black tracking-wider text-base font-display"
                >
                  BOOK A CALL
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-right">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="text-yellow-300 font-extrabold text-2xl font-display">You think it, we ship it</div>
              </motion.div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-white font-black text-6xl font-display">22+</div>
                <div className="text-gray-300 uppercase text-xs tracking-widest font-bold font-sans">IDEAS SHIPPED</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="text-white font-black text-6xl font-display">48+</div>
                <div className="text-gray-300 uppercase text-xs tracking-widest font-bold font-sans">DESIGNS SHIPPED</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 left-1/4 top-1/4 bg-[#FF5722] rounded-full blur-[150px] opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 right-1/4 bottom-1/4 bg-purple-500 rounded-full blur-[150px] opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
