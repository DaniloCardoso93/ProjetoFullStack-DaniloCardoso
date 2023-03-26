import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
html, body, main, header, h1, h2, h3, h4, div, nav, ul, li, img, p, section, article, a, button {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

    body{
        background-color: #3E4144;
    }

    button{
        cursor: pointer;
        border-radius: 8px;
    }

    :root{
        --color-primary:#125ED1;

        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;

        --negative: #E83F5B;
        --sucess: #3FE864;

        --heading-size1: 26px;
        --heading-size2: 22px;
        --heading-size3: 18px;
        --heading-size4: 14px;

        --headline:16px;
        --headline:16px;
        --text:14px;
        --text2:12px;
        --span:10px;


        --italic:italic;

        --bold-weight:bold;
        --semibold-weight:600;
        --normal-weight:normal;

    }
`

export const Main = styled.div`

    background-color: #121214;
    width: 100vw;
    height: 100vh;

`