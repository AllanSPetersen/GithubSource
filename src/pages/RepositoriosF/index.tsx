import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconeRepositorio, LeftSide, RightSide, Tab } from '../Perfil/styles';

import { Container, SMain, RepositorioF } from './styles';

import FavoritoCard from '../../components/FavoritoCard';

import { Link } from 'react-router-dom';
import { APIRepoF } from '../../@types';

interface Data {
  user?: APIRepoF;
  error?: string;
}

const RepositoriosF: React.FC = () => {
  const { usuario } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${usuario}/starred`)
    ]).then(async responses => {
      const [userResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      
      setData({
        user
      })
      //console.log(response);
      //await response[0].json();
    })
  }, [usuario]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user) {
    return <h1>Carregando...</h1>
  }
  const TabContent = () => {
  <div className="content">
       <IconeRepositorio />
    
        <span className="label">Repositorios Favoritos</span>
        <Link to="localhost:3000" className="Link">Repositorios Favoritos</Link>
  </div>
}; 
  return (
      <Container>
        <SMain>
          <RightSide>
            <Tab>
            <div className="content">
            <IconeRepositorio />
    
              <span className="label">Repositorios Favoritos</span>
              <IconeRepositorio />
              <Link to={`/${usuario}`} className="label">Retornar ao Inicio</Link>
            </div>
            </Tab>
            <RepositorioF>
              <h2>Repositorios Favoritos</h2>

              <div>
                  {data.user.map((item) =>  (
                  <FavoritoCard 
                  usuario={item.owner.login}
                  nomerepositorio={item.name}
                  descricao={item.description}
                  stars={item.stargazers_count}
                  language={item.language}
                  forks={item.forks}
                  />
                ))}
              </div>
            </RepositorioF>
          </RightSide>
        </SMain>
      </Container>
  );
}

export default RepositoriosF;