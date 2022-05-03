import styled from 'styled-components';
//import CompassLogo from './imagens/CompassLogo.png';

 
export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;
//export const  CompassLogo = CompassLogo``;
export const  SearchForm = styled.form`
  padding-left: 16;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width .2s ease-out, color .2s;
  }
`;

