import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";
import OurWork from "@/components/home/OurWork";
import Services from "@/components/home/Services";
import CallToAction from "@/components/home/CallToAction";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import MarqueeBanner from "@/components/layout/MarqueeBanner";

const Home = () => {
  // Add dark class to HTML element for dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <>
      <Head>
        <title>Architex Creative</title>
        <meta name="description" content="Architex Creative - Design, Develop, Deploy" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add Calendly Assets */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>

      <div className="min-h-screen text-light-100 flex flex-col">
        <MarqueeBanner />
        <div className="flex-grow flex flex-col relative">
          <Navbar />
          <main className="flex-grow relative z-10">
            <div className="relative">
              <Hero />
            </div>
            <div className="bg-[#272727]">
              <Technologies />
              <OurWork />
              <Services />
              <CallToAction />
              <Pricing />
              <FAQ />
              <Contact />
            </div>
            {/* Other sections will be added here */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
