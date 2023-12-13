import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import menuData from './data/menu';

function App() {
  return (
    <>
      <RecComp data={data} />
      <AsideMenu menuData={menuData} />
      <Wrapper />
    </>
  );
}

export default App;
