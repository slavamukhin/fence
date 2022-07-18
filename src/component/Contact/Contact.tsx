import { FC } from "react"
import styled from "styled-components"
import { Logo } from "../Logo"
import { Phone } from "../Phone"

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 40px 0;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`

export const Contact: FC = () => {
  return <ContactWrapper>
    <Logo />
    <Phone />
  </ContactWrapper>
}