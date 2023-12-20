import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import footerData from './data/footerData';
import menuData from './data/menu';
import Posts from './components/Posts/Posts';
import ChildrenAtBus from './components/ChildrenAtBus/ChildrenAtBus';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Order from './components/Orders/Order';
import NotFound from './components/NotFound/NotFound';
import ClientsRoutes from './components/Clients/ClientsRoutes';

function App() {
  return (
    <>
      <AsideMenu menuData={menuData} />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/clients/*' element={<ClientsRoutes />} />

        <Route path='/orders'>
          <Route index element={<Orders />}></Route>
          <Route path=':id' element={<Order />}></Route>
          <Route path='add' element={<Order />}></Route>
        </Route>

        <Route path='/recursion' element={<RecComp data={data} />}></Route>
        <Route path='/children' element={<ChildrenAtBus />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/users' element={<Wrapper />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer footerData={footerData} />
    </>
  );
}

export default App;
