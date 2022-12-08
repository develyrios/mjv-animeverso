import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --branco: #EDEDE9;
        --preto: #1E1E1E;
        --azulEscuro: #023E8A;
        --azul: #00B4D8;
        --azulClaro: #ADE8F4;
        --gradienteAzul: linear-gradient(92.49deg, #00B4D8 0%, #023E8A 100%);
        --amarelo: #FFB703;
        --vermelho: #FF2929;
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    body {
        background-color: var(--branco);
    }

    body,html{
    width: 100vw;
    height: 100vh;
    }

    button {
    cursor: pointer;
    }

    body, input, button, textarea {
        font-family: 'Rubik', sans-serif;
    }
`;