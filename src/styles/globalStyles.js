import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

:root {
  --purple-primary: #7949ff;
  --purple-dark: #673ED9;
  --purple-light: #A98AFF;
}
  html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, input, button, legend, article, footer, header, nav, section, main {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  } 
  
  ul, ol {
    list-style: none;
  }

  .animeTop {
    opacity: 0;
    transform: translateY(-30px);
    animation: animeTop 0.5s forwards;
  }
  
  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
 `;
