import logo from "../assets/logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-black py-10">
        <div className="cont">
            <section>
            <img src={logo} alt="codehub" className="h-10"/>
            </section>
        </div>
    </footer>
  )
}

export default Footer