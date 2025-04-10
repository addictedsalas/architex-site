const MarqueeBanner = () => {
  const items = ['CREATE', '•', 'INNOVATE', '•', 'AUTOMATE', '•', 'ELEVATE', '•'];
  
  return (
    <div className="w-full bg-accent text-black font-sans text-sm md:text-base flex items-center justify-center select-none h-8 overflow-hidden z-10 relative">
      <div className="marquee-container">
        <div className="marquee">
          {/* Repeat items many times to ensure the marquee is filled */}
          {Array(20).fill(items).flat().map((item, index) => (
            <div key={index} className="marquee-item font-bold uppercase text-sm font-sans tracking-tight">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
