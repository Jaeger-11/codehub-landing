import CustomHeader from "./CustomHeader";
import Teacher from "../assets/teacher.svg";
import Lesson from "../assets/lesson.svg";
import Mentor from "../assets/mentor.svg";
import Environment from "../assets/environment.svg"

const AboutSection = () => {
  return (
    <div className="py-6 md:py-10 bg-lightGray border-b">
        <section data-aos="fade-up" className="cont grid lg:grid-cols-2 gap-8 md:gap-4">
            <section data-aos="fade-up" className="flex justify-end relative">
                <div className="max-w-[60%] aspect-[4/5] overflow-hidden border-white border-8 shadow-md rounded-xl">
                    <img className="w-full" src="https://plus.unsplash.com/premium_photo-1661962628974-7ec489554e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFmcmljYW4lMjB0ZWFjaGVyfGVufDB8fDB8fHww" alt="teacher-1" />
                </div>

                <div className="w-[60%] absolute bottom-10 rotate-6 left-0 aspect-[3/2] overflow-hidden border-white border-8 shadow-md rounded-xl">
                    <img src="https://plus.unsplash.com/premium_photo-1683140757395-ba8af5aa185f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFmcmljYW4lMjB0ZWFjaGVyfGVufDB8fDB8fHww" alt="" />
                </div>
            </section>
            <article data-aos="zoom-in" className="flex flex-col gap-3 text-darkBlue sm:p-4">
                <CustomHeader text={'get to know about us'} />
                <h2 className="capitalize text-2xl font-bold md:text-3xl xlg:text-4xl lh font-pt">
                    Learn from top skilled <span className="text-customBlue">instructors</span> 
                </h2>
                <p className="text-base">
                    Treat yourself to an in-depth grasp of the tech universe, through programs led by our seasoned team of experts. Our goal is to transform you into a proficient software engineer, adept at tackling intricate challenges and driving innovative solutions.
                </p>

                <section className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="points" data-aos="fade-up">
                        <div className="bg-purple-200">
                            <img src={Teacher} alt="tutor" className="w-8" />
                        </div>
                        <p>Expert Tutors</p>
                    </div>
                    <div className="points" data-aos="fade-up">
                        <div className="bg-white">
                            <img src={Lesson} alt="tutor" className="w-8" />
                        </div>
                        <p>Comprehensive Lessons</p>
                    </div>
                    <div className="points" data-aos="fade-up">
                        <div className="bg-green-200">
                            <img src={Environment} alt="tutor" className="w-8" />
                        </div>
                        <p>Conducive Learning Environment</p>
                    </div>
                    <div className="points" data-aos="fade-up">
                        <div className="bg-yellow-200">
                            <img src={Mentor} alt="tutor" className="w-8" />
                        </div>
                        <p>Mentorship</p>
                    </div>
                </section>
            </article>
        </section>
    </div>
  )
}

export default AboutSection