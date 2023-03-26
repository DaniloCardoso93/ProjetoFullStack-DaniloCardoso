import styled from "styled-components";

export const DivFormLogin = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    a{
        width: 260px;
        height: 38px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--grey1);
        color: var(--grey0);

        border-radius: 8px;

        @media (min-width: 800px) {
            width: 324px;
            height: 48px;
        }
    }

`