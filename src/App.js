import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Main from './pages/Main';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={`${darkMode ? "dark" : ""} m-0`}>
      <div className='bg-[#F5F5DC] dark:bg-gray-900 text-black dark:text-white'>
        <div className='min-h-screen w-[95%] md:w-[80%] mx-auto'>
            <div className='sticky top-0 bg-[#F5F5DC] dark:bg-gray-900 z-50'>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            
            <Main />

            <Service />

            <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
