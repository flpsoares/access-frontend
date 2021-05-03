import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
  }

  button {
    cursor: pointer;
  }

  button, input {
    background: 0;
    border: 0;
  }

  :root {
    --primary: #19D3DA;
    --text-primary: #c9d1d9;
  }

`