import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        font-family: 'Cousine', monospace;
        zoom: 100%;
    }
    body, #root {
        height: 100vh;
    }
`;
