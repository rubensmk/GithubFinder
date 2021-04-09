import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/github-logo.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #222831 url(${backgroundImg}) no-repeat 70% top fixed;
        -webkit-font-smoothing: antialiased;
        color:#f8f8f2;
    }

    body, input, button{
        font: 16px Roboto, sans-serif ;

    }

    #root {
        max-width: 960px;
        margin: 0 auto ;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
