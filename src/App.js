import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Main from './pages/Main';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeButton, setActiveButton] = useState("");
  
  return (
    <div className={`${darkMode ? "dark bg-gray-900" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} text-white m-0`}>

        <div className={`${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} sticky top-0 z-50 rounded-xl border-b-2`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeButton={activeButton} setActiveButton={setActiveButton} />
        </div>

        <div className=' w-[95%] md:w-[80%] mx-auto'>
            <Main activeButton={activeButton} />

            <Service />

            <Portfolio />
        </div>

        <Footer />
    </div>
  );
}

export default App;
