import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Principal/login';
import Pedidos from './assets/pages/Meseros/Pedidos'
import Inicio from './assets/pages/Meseros/Inicio'
import './App.css'
import Dashboard from './assets/pages/Admin/Dashboard';
import Menu from './assets/pages/Meseros/Menu';

function App() {
  return (
     {/* Rutas de Usuario protegida*/},
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

     
     {/* Meseros */}
      <Routes>
        <Route path="/Pedidos" element={<Pedidos/>} />
      </Routes>

      <Routes>
        <Route path="/Inicio" element={<Inicio/>} />
      </Routes>

      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>

      <Routes>
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
    </Router>

    
    //
  );
}

export default App;