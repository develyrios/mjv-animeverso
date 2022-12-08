import styled, { css } from 'styled-components';

interface IButtonProps {
    variant: 'login' | 'register';
}

const ButtonStyled = {
    login: css`
        background-color: var(--azul);

        height: 40px;
        width: 134px;
    `,
    register: css`
        background-color: var(--azulEscuro);

        height: 48px;
        height: 48px;
        width: 160px;
    `
}

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyled[variant]};

    border: none;
    border-radius: 8px;

    color: var(--branco);
    font-size: 20px;
    font-weight: 700;
`;