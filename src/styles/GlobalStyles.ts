import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: var( --primary);

    }
    *, :no-button, input {
        border: 0;
        background: none;
        color: var(--black);
    }
    ul{
        list-style: none;
    }
    :root {
        --primary: #fff;
        --black: #1b1f23;
        --gray: #586069;
        --gray-light: #6a737d;
        --gray-dark: #24292e;
        --orange: #f9826c;
        --logo: #fff;
        --header: #24292e;
        --username: #666;
        --search: rgba(255, 255, 255, 0.13);
        --search-placeholder: hsla(0, 0%, 100%, .75);
        --icon: #6a737d;
        --link: #0366d6;
        --border: #e1e4e8;
        --ticker: rgba(209,213,218, .5);
        
        --javascript: #f1e05a;
        --typescript: #2b7489;
        --other-language: #8257e5;
    }
`;