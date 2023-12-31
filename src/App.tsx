import { Suspense, lazy } from 'react';
import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Footer from './components/Footer/Footer';
import RecComp from './components/recursiveComponent/RecComp';
import data from './components/recursiveComponent/data';
import footerData from './data/footerData';
const Posts = lazy(() => import('./components/Posts/Posts'));
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
  QueryClient,
  QueryCache,
} from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header/Header';
import Invoices from './components/Invoices/Invoices';
import ProtectedWrapper from './components/ProtectedWrapper/ProtectedWrapper';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Loading from './components/Loading/Loading';
import GlobalContextProvider from './components/GlobalContextsProvider/GlobalContextProvider';

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      gcTime: 60000,
    },
  },
});

function App() {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          {/* {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools
          buttonPosition='top-right'
          initialIsOpen={false}
          />
        )} */}
          <GlobalContextProvider>
            <Header />
            <AsideMenu />
            <Routes>
              <Route path='/' element={<Home />}></Route>

              <Route path='/clients/*' element={<ClientsRoutes />} />
              <Route path='/orders/*' element={<OrdersRoutes />} />

              <Route
                path='/invoices'
                element={
                  <ProtectedWrapper redirectPath='/login'>
                    <Invoices />
                  </ProtectedWrapper>
                }
              />
              <Route
                path='/recursion'
                element={<RecComp data={data} />}
              ></Route>
              <Route path='/children' element={<ChildrenAtBus />}></Route>
              <Route
                path='/posts'
                element={
                  <Suspense fallback={<Loading />}>
                    <Posts />
                  </Suspense>
                }
              ></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>

            <Footer footerData={footerData} />
          </GlobalContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
