
const testimonies = [
    {
        name: "Bankole Susan",
        testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi possimus quidem neque ducimus commodi, aliquam minus, numquam, porro fuga assumenda nihil dolorum corrupti labore distinctio?",
        title: "Product Manager",
        imageUrl: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxhZnJpY2FuJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "",
        testimony: "",
        title: "",
        imageUrl: ""
    },
    {
        name: "",
        testimony: "",
        title: "",
        imageUrl: ""
    },
]

const Testimonials = () => {
  return (
    <div className="bg-darkBlue py-10 text-white border-b">
        <main className="cont grid lg:grid-cols-2 gap-8 md:gap-4">
            <section>
                <div className=" md:w-[75%] rounded-full mx-auto aspect-square overflow-hidden">
                    <img src={testimonies[0].imageUrl} alt="" className="w-full" />
                </div>
            </section>

            <article className="flex flex-col gap-3 sm:p-4">
                <h2 className="capitalize text-2xl lg:w-[80%] font-bold md:text-3xl xlg:text-4xl lh font-pt">
                    what our students say about us
                </h2>
                <svg className="w-12" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path> </g> </g></svg>
                <q className="text-lightGray pb-2">{testimonies[0].testimony}</q>
                <div className="relative border-b-[0.3px] border-gray-100"> <span className="absolute -bottom-0 left-0 h-2 opacity-100 bg-white z-10 w-10"></span></div>
                <div>
                    <h3 className="font-semibold">{testimonies[0].name}</h3>
                    <p className="text-gray-400">{testimonies[0].title}</p>
                </div>
                <section className="flex gap-2 testimonial-btn">
                    <button className="btn hover:bg-white rounded-lg">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
                    </button>
                    <button className="btn hover:bg-white rounded-lg">
                    <svg className="w-6 rotate-180"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
                    </button>
                </section>
            </article>
        </main>
    </div>
  )
}

export default Testimonials