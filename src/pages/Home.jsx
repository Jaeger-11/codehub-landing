import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import LearningTracks from '../components/LearningTracks'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'
import Academy from '../components/Academy'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <LearningTracks/>
        <Academy/>
        <Testimonials/>
        <Newsletter/>
        <JoinUs/>
        <Footer/>
    </>
  )
}

export default Home