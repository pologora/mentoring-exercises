import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import menuData from './data/menu';

function App() {
  return (
    <>
      <AsideMenu menuData={menuData} />
      <Wrapper />
    </>
  );
}

export default App;
