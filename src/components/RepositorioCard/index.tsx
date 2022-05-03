import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageServiceMode } from 'typescript';
import { Container, Topside, IconeRepositorio, Botside, StarIcon, ForkIcon, } from './styles';


interface Props {
  usuario: string;
  nomerepositorio: string;
  descricao?: string;
  language?: string;
  stars: number;
  forks: number; 
}

const RepositorioCard: React.FC<Props> = ({
  usuario,
  nomerepositorio,
  descricao,
  language,
  stars,
  forks, 
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

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
}

export default RepositorioCard;