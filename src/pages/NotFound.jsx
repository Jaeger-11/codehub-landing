import React from 'react'
import notFound from "../assets/undraw-not-found.svg";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='py-10'>
        <main className='cont text-center flex flex-col items-center gap-4'>
            <img className="max-w-[80svw] md:max-w-sm" src={notFound} alt="ongoing production" />
            <h3 className="text-2xl md:text-3xl font-pt">Page Does Not Exist...</h3>
            <Link to={'/'} className="underline text-red-500 italic font-medium"> Return Home </Link>
        </main>
    </div>
  )
}

export default NotFound