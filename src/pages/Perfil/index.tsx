import { useParams } from 'react-router-dom'
import React, { useEffect, useState} from 'react';


import { Container, Main, LeftSide, RightSide, Repositorio, IconeRepositorio, Tab } from './styles';

import PerfilData from '../../components/PerfilData';
import RepositorioCard from '../../components/RepositorioCard';
import { APIUser, APIRepo } from '../../@types';

interface Data {
  user: APIUser;
  repos: APIRepo[];
  error?: string;
}

const Perfil: React.FC = () => {
  const { usuario = 'AllanSPetersen' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${usuario}`),
      fetch(`https://api.github.com/users/${usuario}/repos`),
    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status == 404) {
       // setData({ error: 'Usuario não existe'})
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 10); //quantidade de repositorios

      setData({
        user,
        repos: slicedRepos,
      })
    });

  }, [usuario]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user && !data?.repos) {
    return <h1>Carregando</h1>
  }

  const TabContent = () => (
    <div className="content">
      <IconeRepositorio />
      <span className="label">Repositorios</span>
      <span className="number">{data.user.public_repos}</span>
    </div>
  )
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <main>
        <LeftSide>
          <PerfilData 
            usuario={data.user.login}
            nome={data.user.name}
            avatarURL={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}

          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className='line' />
          </Tab>

          <Repositorio>
            <h2>Repositorios</h2>

            <div>
              {data.repos.map((item) =>(
                <RepositorioCard 
                  key={item.name}
                  usuario={item.owner.login}
                  nomerepositorio={item.name}
                  descricao={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              )) }
            </div>
          </Repositorio>
        </RightSide>
      </main>
    </Container>

  );
};

export default Perfil;