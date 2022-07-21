import { FC } from "react"
import styled from "styled-components"

const ButtonWrapper = styled.a`
  position: relative;
  color: #fff;
  display: inline-block;
  padding: 30px;
  border: 5px solid transparent;
  border-radius: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 24px;
  margin-top: 50px;

  &:hover {
    border-color: #fff;
  }

  @media (max-width: 1220px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

export const Button: FC = () => {
  return (
    <ButtonWrapper 
      href="https://wa.me/79032744455?text=интересует%20забор"
      target='_blank'
    >
      написать в WhatsApp
    </ButtonWrapper>
  )
}