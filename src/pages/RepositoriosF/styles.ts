import styled from 'styled-components';

export const Container = styled.div``;

export const SMain = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RepositorioF = styled.div`
    margin-top: var(--verticalPadding);
    

    > h2 {
      font-size: 16px;
      font-weight: normal;
    }
    > div {
      margin-top: 8px;
    
      display: grid;
      grid-gap: 16px;
    
      grid-template-columns: 1fr;
    
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(min-content, max-content);
    }
}
`;

