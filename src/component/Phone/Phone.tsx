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

  @media (max-width: 1220px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }

  @media (max-width: 390px) {
    font-size: 20px;
  }
`
export const Phone: FC = () => {
  return <PhoneWrapper href="tel:+79032744455">+7 903 274 44 55</PhoneWrapper>
}