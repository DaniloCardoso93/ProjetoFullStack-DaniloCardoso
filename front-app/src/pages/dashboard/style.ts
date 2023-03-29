import styled from "styled-components";


export const Div = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
`

export const PerfilDiv = styled.div`

    border-bottom: 2px solid var(--grey3);
    color: var(--grey0);

    height: 100px;
    width: 80%;


    

    @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    @media (min-width: 1250px) {
        width: 1200px;
    }

`

export const BodyDashbord = styled.div`
    color: var(--grey0);
    width: 80%;

    display:flex;
    justify-content: space-between;
    gap: 20px;


    @media (min-width: 1250px) {
        width: 1200px;
    }

    svg{
        cursor: pointer;
    }
`

export const UlDashBord = styled.ul`

    width: 80%;
    height: fit-content;
    max-height: 415px;
    overflow-y: auto;

    background-color: var(--grey3);

    border-radius: 8px;


    @media (min-width: 1250px) {
            width: 1200px;
        }

    li{
        width: 90%;
        height: 50px;

        margin: 10px auto;

        background-color: var(--grey4);

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 8px;

        transition:.5s;

        &:hover{
            background-color: var(--grey3);
            transition:.5s;
        }

        @media (min-width: 1250px) {
            width: 1150px;
        }

        p{
            color: var(--grey0);
            font-size: var(--text);
            font-weight: var( --bold-weight);
            margin-left: 30px;
        }

        span{
            color: var(--grey1);
            font-size: var(--text2);
            font-weight: var( ----normal-weight);
            margin-right: 30px;
        }

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-right: 30px;

            height: 100%;
            width: 30%;

            svg{
                width: 50px;
                height: 25px;
                color: var(--grey0);
                transition:.5s;
                cursor: pointer;

                &:hover{
                    color: var(--grey1);
                    transition:.5s;
                }
            }
        }
    }

`

export const NoContacts = styled.h2`

    color: var(--grey0);
    width: 80%;

    font-size: var(--heading-size2);
    font-weight: var(--bold-weight);

    @media (min-width: 1250px) {
        width: 1200px;
    }

`


