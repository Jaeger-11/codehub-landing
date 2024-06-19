import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavContents = ({style, setIsMenu}) => {
  const navigation = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'courses',
      link: '/courses',
    },
    {
      name: 'about us',
      link: '/about',
    },
    {
      name: 'blog',
      link: '/blog',
    },
  ]
  const pathname = useLocation().pathname;
  return (
    <ul className={` gap-4 font-medium ${style}`}>
      {navigation.map((item, index) => {
        return <Link onClick={() => setIsMenu(false)} key={index} to={item.link} className={`${pathname === item.link && 'text-customBlue font-medium hover:text-customBlue'} capitalize`}>{item.name}</Link>
      })}
    </ul>
  )
}

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md text-darkBlue">
        <nav className="flex justify-between items-center cont ">
          <div className="block md:hidden" onClick={() => setIsMenu(isMenu => !isMenu)}>
            <svg className=" h-8" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z" fill="#000000"></path> </g></svg>
          </div>

          { 
          isMenu && <div data-aos="fade-down" className="block border-b border-t md:hidden absolute top-[100%] left-0 w-full bg-white p-4">
              <section className="flex flex-col gap-4 cont">
                <NavContents style={'flex flex-col md:hidden'} setIsMenu={setIsMenu}/>
              </section>
          </div>
          }

          <section className="flex items-center gap-12">
            <div>
                <h2 className="text-base md:text-xl">Code<span className="font-semibold italic text-white bg-customBlue p-1">hub</span></h2>
            </div>
            <NavContents style={'md:flex hidden items-center'}/>
          </section>
        </nav>
    </header>
  )
}

export default Navbar;