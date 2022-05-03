import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { Container, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <input placeholder="Entre com o usuario ou repositorio" value={search} onChange={e => setSearch(e.currentTarget.value)} />
      </SearchForm>
    </Container>
  );
  
};

export default Header;