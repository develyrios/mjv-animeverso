import { Container } from './styles'
import { InputHTMLAttributes } from 'react';

interface IInputProps 
extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
}

export const Input =({ id, label, ...rest }: IInputProps) => {
    return(
        <Container>
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder=" " {...rest} />
        </Container>
    )
}