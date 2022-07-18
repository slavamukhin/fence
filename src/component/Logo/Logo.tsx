import { FC } from "react"
import styled from "styled-components"

const LogoWrapper = styled.a`
  text-transform: uppercase;
  font-size: 30px;
  color: #d5d5d5;
  box-shadow: 2px 3px;
  padding-right: 10px;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  z-index: 1;

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
    margin-bottom: 20px;
  }
`

export const Logo: FC = () => {
  return <LogoWrapper href="/">fancing company</LogoWrapper>
}