import React from 'react';
import { motion } from 'framer-motion';
import { openCalendlyPopup } from '@/utils/calendly';

const CallToAction = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Something Amazing?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss how Architex Creative can bring your software or AI project to life. Schedule a free consultation to explore your ideas with our experts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={openCalendlyPopup}
            className="inline-flex items-center justify-center px-10 py-4 bg-green-500 hover:bg-green-400 border-2 border-green-500 hover:border-green-400 text-black font-bold rounded-lg transition-colors uppercase tracking-wider text-lg font-display shadow-lg"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
