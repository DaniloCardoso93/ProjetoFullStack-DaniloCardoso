import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 15px;
    padding: 30px 15px;
    max-width: 370px;

    background-color: var(--grey3);
    border-radius: 20px;

    h1{
        color: var(--grey0);

        font-size: var( --text);
        font-weight: var(--bold-weight);

        @media (min-width: 800px) {
            font-size: var(--heading-size3);
        }
    }

    label{
        display: flex;
        gap: 5px;
        flex-direction: column;

        color: var(--grey0);
        font-size: var(--span);
        font-weight: var( --normal-weight);

        @media (min-width: 800px) {
        font-size: var(--text2);
        }
    }

    small{
        color: var(--grey1);
        font-size: var(--text2);
        font-weight: var(--semibold-weight);
    }

    p{
        color: var(--grey1);
    }

`