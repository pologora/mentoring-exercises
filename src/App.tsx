import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Footer from './components/Footer/Footer';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import footerData from './data/footerData';
import menuData from './data/menu';
import Posts from './components/Posts/Posts';
import ChildrenAtBus from './components/ChildrenAtBus/ChildrenAtBus';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ClientsRoutes from './components/Clients/ClientsRoutes';
import OrdersRoutes from './components/Orders/OrdersRoutes';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import {
  QueryClientProvider,
  QueryCache,
  QueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Debounce from './components/debounce/Debounce';

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      gcTime: 60_000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools position='right' initialIsOpen={false} />
        )}
        <AsideMenu menuData={menuData} />
        <Debounce />
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/clients/*' element={<ClientsRoutes />} />
          <Route path='/orders/*' element={<OrdersRoutes />} />

          <Route path='/recursion' element={<RecComp data={data} />}></Route>
          <Route path='/children' element={<ChildrenAtBus />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer footerData={footerData} />
      </QueryClientProvider>
    </>
  );
}

export default App;
