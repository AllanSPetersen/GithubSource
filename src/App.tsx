import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Perfil from './pages/Perfil';
import Repositorio from './pages/Repositorio';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Perfil />}/>
        <Route path="/:usuario" element={<Perfil />}/>
        <Route path="/:usuario/:repositorio" element={<Repositorio />}/>
      </Routes>

      <Footer />

      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
