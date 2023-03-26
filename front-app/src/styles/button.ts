import styled from "styled-components";

export const PrimaryButton = styled.button`

    width: 260px;
    height: 38px;
    background-color: var(--color-primary);
    color: #FFFFFF;


    @media (min-width: 800px) {
        width: 324px;
        height: 48px;
    }

`

export const NormalButton = styled.button`

    width: 56px;
    height: 32px;
    background-color: var(--grey3);
    color: var(--grey0);

`

export const DeleteButton = styled.button`

    width: 200px;
    height: 38px;
    background-color: var(--negative);
    color: var(--grey0);


`