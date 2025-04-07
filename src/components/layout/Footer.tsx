import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-light-100 py-16 border-t border-dark-600">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold uppercase mb-4">Trusted by top teams & orgs in the world</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {/* Replace with actual client logos */}
            <div className="w-24 h-12 bg-dark-700 rounded flex items-center justify-center">Logo 1</div>
            <div className="w-24 h-12 bg-dark-700 rounded flex items-center justify-center">Logo 2</div>
            <div className="w-24 h-12 bg-dark-700 rounded flex items-center justify-center">Logo 3</div>
            <div className="w-24 h-12 bg-dark-700 rounded flex items-center justify-center">Logo 4</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase">ARCHITEX</h3>
            <p className="text-light-400">
              No fluff, no jargon, just clean, elegant code and designs that pop.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-light-400 hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-light-400 hover:text-accent transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="text-light-400 hover:text-accent transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-light-400 hover:text-accent transition-colors">
                  Technical Consulting
                </Link>
              </li>
            </ul>
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
            <h4 className="text-lg font-semibold mb-6 uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-light-400">
                <span className="block">Email:</span>
                <a href="mailto:hello@architex.com" className="text-accent hover:underline">hello@architex.com</a>
              </li>
              <li className="text-light-400">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="text-accent hover:underline">+1 (234) 567-890</a>
              </li>
              <li className="text-light-400">
                <span className="block">Address:</span>
                <address className="not-italic">123 Design Street<br />Creative City, CA 90210</address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Architex Creative. All rights reserved.
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
