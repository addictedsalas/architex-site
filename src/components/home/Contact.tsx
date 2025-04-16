import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setStatusMessage('Sending...');

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          setFormData({ user_name: '', user_email: '', phone: '', message: '' });
          form.current?.reset();
          setTimeout(() => setStatusMessage(''), 5000);
        },
        (error) => {
          // Use a type assertion to safely access the error text
          const errorMessage = typeof error === 'object' && error !== null ? String((error as Record<string, unknown>).text ?? error) : String(error);
          console.error('EmailJS Error:', errorMessage);
          setStatusMessage('Failed to send message. Please try again.');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative pt-16 md:pt-24 bg-black">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "Still have more questions" text */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-xl">Still have more questions? Contact us Below</p>
        </div>

        {/* Large CONTACT US text */}
        <div className="text-center">
          <h2 className="text-8xl md:text-9xl lg:text-[180px] xl:text-[220px] font-extrabold text-green-500 tracking-tighter leading-none font-display">
            CONTACT US
          </h2>
        </div>

        {/* Two-column contact section */}
        <div className="mt-16 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Company Information */}
          <div className="bg-[#1E1E1E] p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-green-500 mb-6 font-display">GET IN TOUCH</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href="mailto:boringprojects@gmail.com" className="text-gray-300 hover:text-green-500 transition-colors">boringprojects@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-green-500 transition-colors">(786) 302-9144</a>
                </div>
              </div>
            
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/boringprojects" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/boringprojects" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/boringprojects" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Restore Contact Form */}
          <div className="bg-[#1E1E1E] p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-green-500 mb-6 font-display">SEND US A MESSAGE</h3>
            
            {/* Restore the original form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-white font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-white font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-bold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-colors uppercase tracking-wider"
              >
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {statusMessage && (
                <p className={`text-center text-sm ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
        
        {/* Bottom section with links */}
        <div className="py-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/BoringLogo.png" 
                alt="Boring Projects Logo" 
                width={280} 
                height={80} 
                className="h-auto" 
              />
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#work" className="text-gray-300 hover:text-green-500 font-bold">Work</Link>
            <Link href="#services" className="text-gray-300 hover:text-green-500 font-bold">Services</Link>
            <Link href="#faq" className="text-gray-300 hover:text-green-500 font-bold">FAQs</Link>
            <Link href="#contact" className="text-gray-300 hover:text-green-500 font-bold">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
