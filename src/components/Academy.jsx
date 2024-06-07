const expectations = [
    {
        name: "creative space",
        text: "Provision of a functional and well-equipped hub for use as training, research and development centre."
    },
    {
        name: "GADGETS",
        text: "Laptops for use by participants during the course of the programme."
    },
    {
        name: "allowance",
        text: "Monthly upkeep allowance throughout the course of the programme."
    },
]

const requirements = [
    {
        name: "qualification",
        text: "B.Sc. qualification (or its equivalent from any recognized institution)."
    },
    {
        name: "NYSC",
        text: "Completed the National Youth Service Programme not earlier than three (3) years prior to applying to the programme"
    },
    {
        name: "availability",
        text: "Be willing to participate in the programme on a full-time basis."
    },
]
const Academy = () => {
  return (
    <div className="py-10 border-b">
        <main data-aos="fade-up" className="cont  text-darkBlue">
            <h2 className="text-center uppercase text-2xl font-bold md:text-3xl xlg:text-4xl lh font-pt">codehub academy<span className="text-customBlue"> 2024</span></h2>

            <section data-aos="fade-up" className="grid md:grid-cols-2 gap-4 mt-4">
                <section className="p-4 border">
                    <h2 className="p-3 mb-4 border font-semibold text-customBlue text-lg">WHAT TO EXPECT</h2>
                    <div className="flex flex-col gap-4 border py-4">
                        {expectations.map((item) => {
                            return (
                                <div className="px-3" data-aos="fade-up">
                                    <h3 className="uppercase font-medium text-base text-black">{item.name}</h3>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className="p-4 border">
                    <h2 className="p-3 mb-4 border font-semibold text-customBlue text-lg">REQUIREMENT</h2>
                    <div className="flex flex-col gap-4 border py-4">
                        {requirements.map((item) => {
                            return (
                                <div className="px-3" data-aos="fade-up">
                                    <h3 className="uppercase font-medium text-base text-black">{item.name}</h3>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>
        </main>
    </div>
  )
}

export default Academy