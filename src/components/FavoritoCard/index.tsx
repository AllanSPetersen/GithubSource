import React from 'react';
import { Link } from 'react-router-dom';
import { RightSide } from '../../pages/Perfil/styles';
import { GithubIcon, LinkButton } from '../../pages/Repositorio/styles';
import { Botside, Topside, IconeRepositorio, StarIcon, ForkIcon } from '../RepositorioCard/styles';
import { Container } from './styled';

// import { Container } from './styles';

interface Props {
  usuario: string;
  nomerepositorio: string;
  descricao?: string;
  stars: number;
  language?: string;
  forks: number; 
}

const FavoritoCard: React.FC<Props> = ({
  usuario,
  nomerepositorio,
  descricao,
  stars,
  language,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';
  <RightSide>
    
  </RightSide>
  return (
    
    <Container>
      <Topside>
          <header>
            <IconeRepositorio />
            <Link to={`/${usuario}/${nomerepositorio}`}>{nomerepositorio}</Link>
          </header>

          <p>{descricao}</p>
      </Topside>

      <Botside>
      <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default FavoritoCard;