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
`

export const Logo: FC = () => {
  return <LogoWrapper href="/">fancing company</LogoWrapper>
}