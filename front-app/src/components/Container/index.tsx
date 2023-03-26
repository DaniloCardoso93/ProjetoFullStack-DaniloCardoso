import { ContainerDiv } from "./styles"
import { ReactNode } from "react"

interface IDivProviderProps {
    children: ReactNode;
  }

export function DivContainer({children}: IDivProviderProps){
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}