import aboutVideo from "../assets/aboutHeroVideo.mp4";
import CustomHeader from "../components/CustomHeader";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const data = [
    {
        title: "Access to Experienced Professionals",
        text: "Gain insights and guidance from seasoned professionals who have successfully navigated the tech industry."
    },
    {
        title: "Real-World Project Experience",
        text: "Enhance your skills by working on live projects, gaining practical experience."
    },
    {
        title: "Collaborative Growth",
        text: "Develop your interpersonal and communication skills through collaboration with peers."
    },
    {
        title: "Targeted Upskilling",
        text: "Acquire the essential skills and knowledge required to excel in the tech space."
    },
]

const About = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000,
          once: true
        });
      }, []);
  return (
    <div className=" border-b">
        <main className="about-hero">
            <video className=" about-video" src={aboutVideo} loop muted autoPlay></video>
            <div className="cont flex flex-col justify-center text-darkBlue min-h-[40vh] lg:min-h-[40vw] lg:max-h-[50vw]">
                <h1 className="md:w-3/4 text-3xl text-white capitalize font-bold lh font-pt md:text-4xl lg:text-5xl">
                 Your Journey to Mastery Begins at CodeHub: <br /> <span className="text-customBlue">Upskill, Collaborate & Excel</span>
                </h1>
            </div>
        </main>
        <section  className="py-6 cont border-b p-4 text-black">
            <article data-aos="fade-up">
                <p className="md:w-3/4">Technology is the hallmark of this decade, significantly impacting every industry and driving a surge in demand for specialized skills. However, the real challenge lies not just in learning these skills through tutorials but in effectively applying them, understanding your proficiency, and gauging your employability and marketability.</p>
                <div className="py-6">
                    <CustomHeader text={'What we hope to achieve'}/>
                    <p className="pt-4">CodeHub aims to narrow the divide between individuals' current technical skills and the expertise needed to thrive in the competitive tech industry, facilitating professional growth and advancement.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                        {data.map((item) => {
                            return(
                                <li data-aos="zoom-in" className="">
                                    <h6 className="text-base text-customBlue font-semibold mb-2">{item.title}</h6>
                                    <p className="">{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </article>
        </section>
    </div>
  )
}

export default About