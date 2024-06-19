import CustomHeader from "./CustomHeader";
import analytics from "../assets/analytics.svg"
import frontend from "../assets/frontend.svg"
import product from "../assets/product.svg"
import backend from "../assets/backend.svg"
import mobile from "../assets/mobile.svg"
import design from "../assets/design.svg"

const data = [
    {
        name: "Frontend Development",
        image: frontend
    },
    {
        name: "Backend Development",
        image: backend
    },
    {
        name: "UI / UX Designer",
        image: design
    },
    {
        name: "Mobile Development",
        image: mobile
    },
    {
        name: "Data Analytics",
        image: analytics
    },
    {
        name: "Product Management",
        image: product
    },
]

const LearningTracks = () => {
  return (
    <div className=" py-6 md:py-10 border-b">
        <main data-aos="fade-up" className="cont grid lg:grid-cols-3 gap-8 md:gap-4">
            <article data-aos="zoom-in" className="flex flex-col gap-3 lg:col-span-1 text-darkBlue sm:p-4">
                <CustomHeader text={'Our Learning tracks'}/>
                <h2 className="capitalize text-2xl font-bold md:text-3xl xlg:text-4xl lh font-pt">
                    our comprehensive <span className="text-customBlue">courses</span> 
                </h2>
                <p className="text-base ">
                    Enroll at codehub for a rewarding learning journey and enhance your skillset in the tech space.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScnKTTPoGrtdyPpRux5LZ01alZdAvneHGR0E4MPxy4a447_ow/viewform"><button className="btn">Register now</button></a>
            </article>

            <section className="lg:col-span-2 flex md:gap-4 flex-wrap md:justify-center">
                { data.map((item, index) => {
                    return (
                        <article key={index} data-aos="fade-up" className="md:min-w-[30%] md:bg-[#F4F7FB] md:p-4 flex md:flex-col gap-4 items-center md:justify-center md:rounded-md md:shadow-sm">
                            <div className="p-2 bg-white rounded-full">
                                <img className="w-10" src={item.image} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold text-center">{item.name}</h3>
                        </article>
                    )
                }) }
            </section>
        </main>
    </div>
  )
}

export default LearningTracks