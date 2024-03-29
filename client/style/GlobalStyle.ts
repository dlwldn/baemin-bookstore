import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${reset}
    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: #000;
    }

    body {
      font-family: "BMJUA", sans-serif;
    }

    @font-face {
      font-family: 'BMEULJIRO';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;

export default GlobalStyle;
