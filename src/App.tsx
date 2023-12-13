import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/footer/Footer';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import footerData from './data/footerData';
import menuData from './data/menu';

function App() {
  return (
    <>
      <RecComp data={data} />
      <AsideMenu menuData={menuData} />
      <Wrapper />
      <Footer footerData={footerData} />
    </>
  );
}

export default App;
