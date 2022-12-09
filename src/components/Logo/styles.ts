import styled from 'styled-components';

export const Container = styled.div`
    background-color: none;
    border-radius: 16px;
    border-width: 4px;
    border-style: solid;
    border-image: var(--gradienteAzul) 1;

    height: 64px;
    width: 320px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--preto);
        font-size: 40px;
        font-weight: 700;
    }
`