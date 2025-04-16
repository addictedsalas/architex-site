import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Image 
              src="/images/BoringLogo.png" 
              alt="Boring Projects Logo" 
              width={280} 
              height={80} 
              className="h-auto mb-4" 
            />
            <p className="text-light-400">
              No fluff, no jargon, just clean, elegant code and designs that pop.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/work" className="text-light-400 hover:text-accent transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-light-400 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                  <FiMail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href="mailto:architexcreative@gmail.com" className="text-gray-300 hover:text-green-500 transition-colors">architexcreative@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                  <FiPhone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-green-500 transition-colors">+1 (786) 302-9144</a>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-8">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-green-500 text-white hover:text-black p-3 rounded-full transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Boring Projects. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-light-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-light-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
