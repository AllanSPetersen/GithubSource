import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';



import {
  Container,
  Breadcrumb,
  IconeRepositorio,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

import { APIRepo } from '../../@types';

interface Data {
  Repositorio?: APIRepo;
  error?: string;
}

const Repositorio: React.FC = (Props) => {
  const { usuario, nomerepositorio } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${usuario}/${nomerepositorio}`).then(
      async (response) => {
        setData(
          response.status === 404
            ? { error: 'Repositorio não encontrado' }
            : { Repositorio: await response.json() }
            
        );
      }
    );
  }, [nomerepositorio, usuario]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.Repositorio) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <IconeRepositorio />

        <Link className={'usuario'} to={`/${usuario}`}>
          {usuario}
        </Link>

        <span>/</span>

        <Link className={'nomerepositorio'} to={`/${usuario}/${nomerepositorio}`}>
          {nomerepositorio}
        </Link>
      </Breadcrumb>

      <p>{data.Repositorio.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.Repositorio.stargazers_count}</b>
        </li>
        <li>
          <ForkIcon />
          <b>{data.Repositorio.forks}</b>
        </li>
      </Stats>

      <LinkButton href={data.Repositorio.html_url}>
        <GithubIcon />
        <span>Ver no Git</span>
      </LinkButton>

      <LinkButton href={`/${usuario}`}>
        <GithubIcon />
        <span>Voltar</span>
      </LinkButton>
    </Container>
  );
};

export default Repositorio;
