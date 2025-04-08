import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="relative pt-16 md:pt-24 bg-black">
      <div className="max-w-[1920px] mx-auto">
        {/* "Still have more questions" text */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-xl">Still have more questions? Contact us Below</p>
        </div>

        {/* Large CONTACT US text */}
        <div className="text-center">
          <h2 className="text-8xl md:text-9xl lg:text-[180px] xl:text-[220px] font-extrabold text-yellow-400 tracking-tighter leading-none font-display">
            CONTACT US
          </h2>
        </div>

        {/* Bottom section with CTA and links */}
        <div className="mt-16 bg-[#FFF8E7] py-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left side with CTA button and arrow */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-black font-bold rounded-full text-lg transition-all hover:bg-yellow-300"
            >
              BOOK FREE CALL
            </Link>

            {/* Arrow image */}
            <div className="mt-4 md:ml-16">
              <Image
                src="/images/arrow.svg"
                alt="Arrow"
                width={100}
                height={100}
                className="transform -rotate-45"
              />
            </div>
          </div>

          {/* Right side with quote and links */}
          <div className="flex flex-col items-center md:items-end">
            {/* Quote */}
            <p className="text-black italic mb-8 text-right max-w-md">
              * We are not just code ninjas; we are bug whisperers and pixel perfectionists for whatever the quote goes *
            </p>

            {/* Navigation links */}
            <div className="flex flex-col items-end space-y-2">
              <Link href="/work" className="text-black hover:text-yellow-600 font-bold">Work</Link>
              <Link href="/services" className="text-black hover:text-yellow-600 font-bold">Services</Link>
              <Link href="/faqs" className="text-black hover:text-yellow-600 font-bold">FAQs</Link>
              <Link href="/contact" className="text-black hover:text-yellow-600 font-bold">Book a Call</Link>
            </div>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="mailto:info@architexcreative.com" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link href="https://twitter.com/architexcreative" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com/company/architexcreative" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
