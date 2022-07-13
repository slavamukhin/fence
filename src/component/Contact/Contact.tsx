import { FC } from "react"
import styled from "styled-components"
import { Logo } from "../Logo"
import { Phone } from "../Phone"

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 40px 0;
`

export const Contact: FC = () => {
  return <ContactWrapper>
    <Logo />
    <Phone />
  </ContactWrapper>
}