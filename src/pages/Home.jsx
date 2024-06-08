import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import LearningTracks from '../components/LearningTracks'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'
import Academy from '../components/Academy'
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000,
          once: true
        });
      }, []);

  return (
    <>
        <Hero/>
        <AboutSection/>
        <LearningTracks/>
        <Academy/>
        <Testimonials/>
        <Newsletter/>
        <JoinUs/>
    </>
  )
}

export default Home