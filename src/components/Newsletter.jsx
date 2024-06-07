import NewsletterImage from "../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div className="py-10 border-b">
        <main className="cont grid lg:grid-cols-2 items-center gap-4 text-darkBlue">
            <div className="grid md:grid-cols-2 items-center">
                <div className="mb-4 md:mb-0">
                    <img src={NewsletterImage} alt="" className=""/>
                </div>
                <h2 className="capitalize text-2xl font-bold md:text-3xl xlg:text-4xl lh font-pt">
                    Lets Join You To Our <span className="text-customBlue"> Newsletter</span>
                </h2>
            </div>
            <div className="md:flex items-center gap-2 md:bg-blue-100 md:rounded-full p-1 md:pl-4">
                <input type="text" placeholder="Enter your email" className="p-3 w-full bg-blue-100 rounded-md md:rounded-none flex-1 md:bg-transparent outline-none placeholder:text-darkBlue"/>
                <button className="uppercase rounded-md mt-2 md:mt-0 md:rounded-full w-max py-3 font-semibold hover:scale-95 hover:bg-darkBlue font-pt px-4 bg-customBlue text-white">Subscribe now</button>
            </div>
        </main>
    </div>
  )
}

export default Newsletter