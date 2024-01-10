import { lazy, Suspense } from 'react';

import AsideMenu from './components/AsideMenu/AsideMenu';
import Footer from './components/Footer/Footer';
import data from './components/recursiveComponent/data';
import RecComp from './components/recursiveComponent/RecComp';
import footerData from './data/footerData';

import './App.css';
const Posts = lazy(() => import('./components/Posts/Posts'));
import { Route, Routes } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Account from './components/Account/Account';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Cart from './components/Cart/Cart';
import ChildrenAtBus from './components/ChildrenAtBus/ChildrenAtBus';
import ClientsRoutes from './components/Clients/ClientsRoutes';
import GlobalContextProvider from './components/GlobalContextsProvider/GlobalContextProvider';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddInvoice from './components/Invoices/AddInvoice';
import InvoicesRoutes from './components/Invoices/InvoicesRoutes';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import OrdersRoutes from './components/Orders/OrdersRoutes';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60000,
    },
  },
  queryCache: new QueryCache(),
});

const App = () => {
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
              <Route element={<Home />} path='/' />

              <Route element={<ClientsRoutes />} path='/clients/*' />
              <Route element={<OrdersRoutes />} path='/orders/*' />

              <Route
                path='/invoices/*'
                element={
                  <InvoicesRoutes />
                  // <ProtectedWrapper redirectPath='/login'>
                  // </ProtectedWrapper>
                }
              />
              <Route element={<AddInvoice />} path='/invoices/add' />

              <Route element={<RecComp data={data} />} path='/recursion' />
              <Route element={<ChildrenAtBus />} path='/children' />
              <Route
                path='/posts'
                element={
                  <Suspense fallback={<Loading />}>
                    <Posts />
                  </Suspense>
                }
              />
              <Route element={<Cart />} path='/cart' />
              <Route element={<Register />} path='/register' />
              <Route element={<Login />} path='/login' />
              <Route element={<Account />} path='/money' />
              <Route element={<NotFound />} path='*' />
            </Routes>

            <Footer footerData={footerData} />
          </GlobalContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
