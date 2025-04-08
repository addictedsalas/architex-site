
interface FAQItem {
  id: string;
  title: string;
  content: React.ReactNode;
  size: 'small' | 'medium' | 'large';
}

const faqItems: FAQItem[] = [
  {
    id: 'why-us',
    title: 'WHY US',
    content: (
      <>
        <p>Our work speaks for itself. We&apos;re a team of product builders and design fanatics who bring your digital dreams to life—minus the <span className="text-yellow-400 font-semibold">coding nightmares</span>.</p>
        <p className="mt-3">We <span className="text-yellow-400 font-semibold">analyze, research, and select the best tech and design</span> for your product, refining it through every iteration.</p>
      </>
    ),
    size: 'large'
  },
  {
    id: 'team',
    title: 'WHO IS THE TEAM',
    content: (
      <>
        <p><span className="text-yellow-400 font-semibold">Top Talent</span> with 5+ years of experience in building products</p>
      </>
    ),
    size: 'medium'
  },
  {
    id: 'ghost',
    title: 'WILL YOU GHOST US?',
    content: (
      <>
        <p>Ask our 20+ previous clients and you will know :)</p>
        <p className="mt-2 text-sm italic">Hint: We believe in client relations</p>
      </>
    ),
    size: 'medium'
  },
  {
    id: 'pricing',
    title: 'PRICING',
    content: (
      <>
        <p>First, we dive into your project to map out your needs and the unique requirements. From there, we offer two flexible payment options.</p>
        <div className="mt-4">
          <h4 className="text-lg font-bold text-white mb-2">Do you offer payment plans?</h4>
          <p>Yes, we understand that budget flexibility is important. We typically work with a 50% upfront payment and the remaining 50% upon project completion.</p>
        </div>
      </>
    ),
    size: 'medium'
  },
  {
    id: 'tech',
    title: 'TECH USED',
    content: (
      <>
        <p>We specialize in modern web technologies including:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>React, Next.js, Vue.js</li>
          <li>Node.js, Python, PHP</li>
          <li>AWS, Firebase, Vercel</li>
          <li>Web3 technologies</li>
        </ul>
      </>
    ),
    size: 'large'
  }
];

const FAQ = () => {

  return (
    <section className="py-24 relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-none font-display">
              FAQS
            </h2>
            <svg className="absolute -top-6 right-0 w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg mt-4">
            FAQ Attack! The Answers You&apos;ve Been Secretly Wondering About!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* WHY US - Large (spans 3 columns) */}
          <div className="md:col-span-3 bg-dark-900 rounded-lg p-8 hover:bg-dark-800 transition-colors duration-300 border border-dark-700 hover:border-yellow-400">
            <h3 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 font-display">
              {faqItems[0]?.title}
            </h3>
            <div className="text-gray-300">
              {faqItems[0]?.content}
            </div>
          </div>

          {/* WHO IS THE TEAM - Medium (spans 3 columns) */}
          <div className="md:col-span-3 bg-dark-900 rounded-lg p-8 hover:bg-dark-800 transition-colors duration-300 border border-dark-700 hover:border-yellow-400">
            <h3 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 font-display">
              {faqItems[1]?.title}
            </h3>
            <div className="text-gray-300">
              {faqItems[1]?.content}
            </div>
          </div>

          {/* WILL YOU GHOST US? - Medium (spans 3 columns) */}
          <div className="md:col-span-3 bg-dark-900 rounded-lg p-8 hover:bg-dark-800 transition-colors duration-300 border border-dark-700 hover:border-yellow-400">
            <h3 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 font-display">
              {faqItems[2]?.title}
            </h3>
            <div className="text-gray-300">
              {faqItems[2]?.content}
            </div>
          </div>

          {/* PRICING - Medium (spans 3 columns) */}
          <div className="md:col-span-3 bg-dark-900 rounded-lg p-8 hover:bg-dark-800 transition-colors duration-300 border border-dark-700 hover:border-yellow-400">
            <h3 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 font-display">
              {faqItems[3]?.title}
            </h3>
            <div className="text-gray-300">
              {faqItems[3]?.content}
            </div>
          </div>

          {/* WE ARE HIRING! - Small (spans 2 columns) */}
          <div className="md:col-span-6 bg-dark-900 rounded-lg p-8 hover:bg-dark-800 transition-colors duration-300 border border-dark-700 hover:border-yellow-400">
            <h3 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 font-display">
              {faqItems[4]?.title}
            </h3>
            <div className="text-gray-300">
              {faqItems[4]?.content}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
