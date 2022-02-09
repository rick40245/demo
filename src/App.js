import React  from 'react';
/* import { lazy, Suspense } from 'react'; */
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login';
import Admin from './pages/admin';

/* const Login = lazy(() => import('./pages/login'));
const Admin = lazy(() => import('./pages/admin')); */

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Suspense fallback={<></>}> */}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route exact path='/*' element={<Admin />} />
          </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </>
  );
}

export default App;
