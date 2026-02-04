import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import TechnicalDifference from '../components/TechnicalDifference';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-cyan selection:text-white relative">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Offers />
            <TechnicalDifference />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;
