import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, IconeRepositorio, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon} from './styles';



const Repositorio: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <IconeRepositorio />
        <Link className={'usuario'} to={'/usuario'}>
          allanpetersen
        </Link>

        <span>/</span>

        <Link className={'NomeRepositorio'} to={'/usuario/repos'}>
          repositorio
        </Link>
      </Breadcrumb>

      <p>descrição</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>Forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://api.github.com/users/${usuario}/repos'}>
        <GithubIcon />
        <span>Ver</span>
      </LinkButton>
    </Container>
  );
}

export default Repositorio;