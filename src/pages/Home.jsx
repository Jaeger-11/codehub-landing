import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import LearningTracks from '../components/LearningTracks'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <LearningTracks/>
        <Testimonials/>
    </>
  )
}

export default Home