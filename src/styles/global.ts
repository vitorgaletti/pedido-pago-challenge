import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    --white: #ffffff;
    --gray: #eaefed;
    --neutral-black: #34423d;
    --neutral-5: #587169;
    --neutral-3: #a3b8b0;
    --neutral-2: #cad6d1;
    --feedback-success: #b5f1dd;
    --primary-color: #22e0a1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  }

  html {
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--white);
    font-family: 'Popins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
