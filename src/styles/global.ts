import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    --white: #ffffff;
    --gray: #eaefed;
    --neutral-black: #34423d;
    --neutral-2: #cad6d1;
    --neutral-3: #a3b8b0;
    --neutral-4: #709085;
    --neutral-5: #587169;
    --neutral-6: #465953;
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
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    font-family: 'Popins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
