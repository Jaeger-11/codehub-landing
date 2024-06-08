import { Link } from "react-router-dom";
import production from "../assets/undraw-production.svg";

const Ongoing = () => {
  return (
    <div className='py-10'>
        <main className='cont text-center flex flex-col items-center gap-4'>
            <img className="max-w-[80svw] md:max-w-sm" src={production} alt="ongoing production" />
            <h3 className="text-2xl md:text-3xl font-pt">Page Under Construction...</h3>
            <Link to={'/'} className="underline text-customBlue italic font-medium"> Return Home </Link>
        </main>
    </div>
  )
}

export default Ongoing