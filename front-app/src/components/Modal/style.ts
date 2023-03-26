import styled from "styled-components"

export const BgModal = styled.div`

    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba(33, 37, 41, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivModal = styled.div`

    width: 80%;
    height: fit-content;

    background-color: var(--grey3);

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        width: 370px;
        min-height: 490px;
        max-height: 580px;
    }

`

export const TitleModal = styled.div`

    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-primary);
    color: var(--grey0);

    border-radius: 8px;

    font-size:var(--text2);

    @media (min-width: 800px) {
        font-size:var(--text);
    }

    p{
       
        margin-left:20px ;
    }

    span{ 
        cursor: pointer;
        margin-right: 20px;
    }

`


export const DeleteModal = styled.div`
    background-color: var(--grey2);
    width: 100%;
    height:210px;
    border-radius: 8px;
    margin-top: 2rem;
    color: var(--grey0);
    

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`

export const DivDeleteClientModal = styled.div`
    width: 80%;
    height: 250px;

    background-color: var(--grey3);

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        width: 370px;
        min-height: 350px;
    }
`

export const DivDeleteContactModal = styled.div`
    background-color: var(--grey2);
    width: 90%;
    height:240px;
    border-radius: 8px;
    margin: auto;
    color: var(--grey0);
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5rem;
`
