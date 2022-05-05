import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Perfil from './pages/Perfil';
import Repositorio from './pages/Repositorio';
import Footer from './components/Footer';
import RepositoriosF from './pages/RepositoriosF';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Perfil />}/>
        <Route path="/:usuario" element={<Perfil />}/>
        <Route path="/:usuario/:nomerepositorio" element={<Repositorio />}/>
        <Route path="/:usuario/:usuario/:repositoriof" element={<RepositoriosF />}/>
      </Routes>

      <Footer />

      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
