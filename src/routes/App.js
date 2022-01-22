import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Recibos,
  Proveedores,
  Monedas,
  Usuarios,
  NotFound,
} from '../containers/index';


import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Recibos/>} />
            <Route exact path="/Recibos" element={<Recibos/>} />
            <Route exact path="/Proveedores" element={<Proveedores/>} />
            <Route exact path="/Monedas" element={<Monedas/>} />
            <Route exact path="/Usuarios" element={<Usuarios/>} /> 
            <Route element={NotFound} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
