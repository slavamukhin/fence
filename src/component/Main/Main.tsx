import { FC } from "react"
import styled from "styled-components"
import { Contact } from "../Contact"
import { MainTitle } from "../MainTitle"

const Blackout = styled.div<MainProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({footer}) => footer ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)'};
`

interface MainProps {
  footer?: boolean
}

export const Main: FC<MainProps> = ({ footer }) => {
  return <>
    <Blackout footer={footer} />
    {!footer &&<Contact />}
    <MainTitle />
  </>
}