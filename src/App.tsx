import './App.css';
import { useState } from 'react';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/footer/Footer';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import footerData from './data/footerData';
import menuData from './data/menu';
import Posts from './components/Posts/Posts';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <button onClick={toggleMenu}>
        {isOpen ? 'Hide recursive' : 'Show recursive'}
      </button>
      {isOpen && <RecComp data={data} />}
      <AsideMenu menuData={menuData} />
      <Wrapper />
      <Posts />
      <Footer footerData={footerData} />
    </>
  );
}

export default App;
