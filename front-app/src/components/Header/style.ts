import styled from "styled-components";

export const HeaderBox = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
`;

export const NavStyle=styled.nav`
    width: 100%;
    margin: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color:var(--grey0);
    margin-left:2rem;

    a{
        color: var(--grey0);
    }
`

export const UlStyle = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    li{
        cursor:pointer
    }
`