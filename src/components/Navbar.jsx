
const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md text-darkBlue">
        <nav className="flex justify-between items-center cont">
          <section className="flex items-center gap-12">
            <div>
                {/* <img src={logo} alt="codehub" className="h-10"/> */}
                <h2 className="text-xl text-darkBlue">Code<span className="font-semibold italic text-white bg-darkBlue p-1">Hub</span></h2>
            </div>

            <ul className="items-center gap-4 font-medium hidden md:flex">
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
            </section>
            
            <button className="bg-white text-customBlue py-2 px-4 border rounded-sm font-semibold">Log In</button>
        </nav>
    </header>
  )
}

export default Header;