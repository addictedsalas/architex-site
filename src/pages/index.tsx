import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import OurWork from "@/components/home/OurWork";
import Services from "@/components/home/Services";
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
      </Head>

      <div className="min-h-screen text-light-100 flex flex-col">
        <MarqueeBanner />
        <div className="flex-grow flex flex-col relative">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('/images/black-gradient-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <Navbar />
          <main className="flex-grow relative z-10">
            <Hero />
            <Clients />
            <OurWork />
            <Services />
            <Pricing />
            <FAQ />
            <Contact />
            {/* Other sections will be added here */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
