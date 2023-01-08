import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainFreckels from './Comps/Freckles/MainFreckels';
import MyNavbar from './UIElements/NavsElements/Navbar'
import MainLips from './Comps/Lips/MainLips';
import ContactUs from './Comps/Contact/ContactUs';
import WhatsAppBtn from './UIElements/BtnElements/WhatsAppBtn'
import './css/Responsive.css';
import Footer from './UIElements/NavsElements/Footer';
import Home from './Comps/Home';
import SideNavber from './UIElements/NavsElements/SideNavber';
import { FaInstagram } from 'react-icons/fa'
import PhoneBtn from './UIElements/BtnElements/PhoneBtn';
import ThanksPage from './Comps/ThanksPage';

function App() {

  const navigate = useNavigate();
  return (
    <>
      <div id='Top'>
        <p className='offerParagraph'> 🖤יום של הנחות </p>
        <MyNavbar />
        <div className='mainPattern'>
          <SideNavber />
          <i class="fa fa-free-code-camp" aria-hidden="true"></i>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Freckels' element={<MainFreckels />} />
            <Route path='/Lips' element={<MainLips />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/TanksPage' element={<ThanksPage />} />
          </Routes>
        </div>
        <div onClick={ ()=>navigate("/TanksPage")}>
        <PhoneBtn />
        </div>
        <div onClick={()=> navigate("/TanksPage")}>
        <WhatsAppBtn />
        </div>

        <Footer />

      </div>
    </>
  );
}

export default App;

