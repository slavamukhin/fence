import { FC } from "react"
import styled from "styled-components"

const PhoneWrapper = styled.a`
  text-transform: uppercase;
  font-size: 30px;
  color: #d5d5d5;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  z-index: 1;
  &:hover {
    color: #fff;
  }
`
export const Phone: FC = () => {
  return <PhoneWrapper href="tel:+79032744455">+7 903 274 44 55</PhoneWrapper>
}