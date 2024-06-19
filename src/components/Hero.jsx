import hero1 from "../assets/hero1.png";
import periscope from "../assets/periscope.png";
import adebimpe from "../assets/P.A.Adebimpe-Co.png";
import aggregate from "../assets/aggregate.png";
import CustomHeader from "./CustomHeader";
import greenarrow from "../assets/arrow-green.png";
import bluearrow from "../assets/arrow-blue.png";
import world from "../assets/world.png";
import redmarks from "../assets/redmarks.png";

const Hero = () => {
  return (
    <main className=" border-b bg-lightGray">
        <section data-aos="fade-down" className="cont grid lg:grid-cols-2 lg:py-10 gap-4 lg:items-center">
            <article data-aos="zoom-in" className="flex flex-col gap-4 text-darkBlue my-6 lg:my-0">
                <CustomHeader text={'100% Satisfaction Guarantee'} />
                <h2 className="capitalize text-3xl font-bold md:text-4xl xlg:text-5xl lh font-pt">
                    {/* learn <span className="text-customBlue">skills</span> from our top instructors */}
                    become a professional <span className="text-customBlue">software engineer</span> 
                </h2>
                <p className="text-base md:max-w-[90%]">Our comprehensive program is designed to take you on a transformative journey in the world of software development. Join us today and embark on a rewarding career journey!</p>
                <section className="mt-2 flex items-center gap-2 md:gap-4 flex-wrap">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScnKTTPoGrtdyPpRux5LZ01alZdAvneHGR0E4MPxy4a447_ow/viewform"><button className="btn">Register Now</button></a>
                    <div className="flex text-darkBlue gap-2 items-center">
                        <svg className="w-6 aspect-square" fill="#203354" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" stroke="#203354"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M507.917,414.949L382.62,331.433c-3.164-2.108-7.299-2.047-10.398,0.155l-63.656,45.258 c-30.493-18.096-64.47-45.293-96.295-77.138c-31.853-31.853-59.043-65.821-77.116-96.273l45.258-63.657 c2.203-3.099,2.264-7.235,0.155-10.398L97.029,4.083c-2.523-3.786-7.445-5.147-11.556-3.2L43.714,20.671 c-2.061,0.977-3.684,2.686-4.552,4.795l-38.47,93.422c-1.094,2.654-0.882,5.667,0.575,8.14l24.457,41.584 c4.233,7.196,8.727,14.523,13.361,21.781c2.725,4.269,8.392,5.519,12.663,2.795c4.268-2.725,5.52-8.395,2.794-12.663 c-4.513-7.069-8.89-14.206-13.01-21.21l-22.148-37.657l30.111-73.12l83.043,126.928l-15.75,22.15 c-2.065,2.904-2.263,6.742-0.503,9.841c18.783,33.101,48.268,70.468,83.016,105.216c34.715,34.738,72.091,64.23,105.242,83.042 c3.099,1.759,6.938,1.561,9.841-0.504l22.151-15.75l24.373,15.947c1.549,1.014,3.29,1.498,5.013,1.498 c2.989,0,5.922-1.461,7.682-4.151c2.773-4.238,1.584-9.922-2.653-12.693l-18.363-12.013l25.113-17.855l113.452,75.62 l-11.894,25.111l-82.366-53.888c-4.239-2.774-9.922-1.586-12.694,2.653c-2.773,4.238-1.585,9.92,2.653,12.693l76.609,50.123 l-73.116,30.111l-37.659-22.17c-49.465-29.095-101.344-68.584-150.028-114.199c-48.264-45.222-92.499-95.61-127.924-145.715 c-2.923-4.134-8.641-5.118-12.781-2.193c-4.135,2.923-5.118,8.646-2.193,12.781C134.262,326.5,240.292,425.617,343.385,486.254 l41.585,24.479c1.428,0.841,3.036,1.268,4.652,1.268c1.183,0,2.369-0.229,3.491-0.691l93.421-38.471 c2.11-0.868,3.819-2.493,4.796-4.554l19.788-41.779C513.065,422.392,511.702,417.473,507.917,414.949z M61.074,32.739 l25.092-11.89l75.64,113.451l-17.855,25.113L61.074,32.739z"></path> </g> </g> <g> <g> <path d="M274.976,138.761c-5.065,0-9.17,4.106-9.17,9.17c0,5.064,4.106,9.17,9.17,9.17c49.256,0,89.328,40.073,89.328,89.328 c0,5.064,4.104,9.17,9.17,9.17c5.065,0,9.17-4.106,9.17-9.17C382.644,187.061,334.345,138.761,274.976,138.761z"></path> </g> </g> <g> <g> <path d="M274.976,64.905c-5.065,0-9.17,4.106-9.17,9.17s4.106,9.17,9.17,9.17c89.981,0,163.186,73.205,163.186,163.185 c0,5.064,4.104,9.17,9.17,9.17c5.065,0,9.17-4.106,9.17-9.17C456.502,146.337,375.07,64.905,274.976,64.905z"></path> </g> </g> </g></svg>
                        <div>
                            <span className="text-sm">Got any Question?</span>
                            <p className="font-bold">+234 929 134 08</p>
                        </div>
                    </div>
                </section>
            </article>

            <section data-aos="fade-up relative">
                <img src={bluearrow} alt="" className="absolute bottom-4 right-6 w-12 md:w-20 rotate-180" />
                {/* <img src={greenarrow} alt="" className="absolute top-4 left-6 w-12 md:w-20" /> */}
                <img src={world} alt="" className="absolute bottom-4 left-0 w-12 md:w-20" />
                <img src={redmarks} alt="" className="absolute -top-4 -right-2 w-12 md:w-20" />
                <div>
                    <img src={hero1} alt="hero" />
                    {/* <img src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/banner_img.png" alt="" /> */}
                </div>
            </section>
        </section>

        <section className="bg-white py-4">
            <div className="cont flex justify-center mb-4"><CustomHeader text={'powered by'}/></div>
            <div className="grid sm:grid-cols-3 gap-6 justify-center text-center mb-4">
                <img src={periscope} data-aos="fade-up" alt="periscope" className="h-16 mx-auto" />
                <img src={aggregate} data-aos="fade-up" alt="aggregate" className="h-16 mx-auto" />
                <img src={adebimpe} data-aos="fade-up" alt="adebimpe" className="h-16 mx-auto" />
            </div>
        </section>
    </main>
  )
}

export default Hero