import React from 'react';

import { 
    Container, 
    Flex, 
    Avatar,
    Row, 
    PeopleIcon, 
    Column, 
    CompanyIcon, 
    LocationIcon, 
    EmailIcon, 
    BlogIcon,
} from './styles';

interface Props {
    usuario: string;
    nome: string;
    avatarURL: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}

const PerfilData: React.FC<Props> = ({
    usuario,
    nome,
    avatarURL,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
  return (
    <Container>
        <Flex>
            <Avatar src={avatarURL} alt={usuario}/>
            <div>
                <h1>{nome}</h1>
                <h2>{usuario}</h2>
            </div>
        </Flex>

        <Row>
            <li>
                <PeopleIcon />
                <b>{followers}</b>
                <span>followers</span>
                <span>.</span>
            </li>
            <li>
                <b>{following}</b>
                <span>following</span>
            </li>
        </Row>

        <Column>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )}
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )}
            {email && (
                <li>
                    <EmailIcon />
                    <span>{email}</span>
                </li>
            )}
            {blog && (
                <li>
                    <BlogIcon />
                    <span>{blog}</span>
                </li>
            )}
        </Column>
    </Container>
  );
};

export default PerfilData;