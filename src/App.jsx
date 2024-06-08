import Home from './pages/Home';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Ongoing from './components/Ongoing';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Ongoing/>}/>
        <Route path='/courses' element={<Ongoing/>}/>
        <Route path='/blog' element={<Ongoing/>}/>
        <Route path='/auth' element={<Ongoing/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
