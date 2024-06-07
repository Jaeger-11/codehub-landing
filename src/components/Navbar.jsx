
const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md text-darkBlue">
        <nav className="flex justify-between items-center cont">
          <div>
            <svg className="block lg:hidden h-8" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z" fill="#000000"></path> </g></svg>
          </div>
          <section className="flex items-center gap-12">
            <div>
                {/* <img src={logo} alt="codehub" className="h-10"/> */}
                <h2 className="text-base md:text-xl">Code<span className="font-semibold italic text-white bg-darkBlue p-1">Hub</span></h2>
            </div>

            <ul className="items-center gap-4 font-medium hidden md:flex">
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </section>
            
          <button className="bg-white hidden lg:block text-customBlue py-2 px-4 border rounded-sm font-semibold">Log In</button>
        </nav>
    </header>
  )
}

export default Header;