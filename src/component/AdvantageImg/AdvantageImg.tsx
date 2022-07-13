import { FC } from "react"
import styled from "styled-components"
import benefits from '../../img/benefits.jpg'


const AdvantageImgWrapper = styled.img`
  display: block;
  width: 50%;
  height: 100%;
  margin-top: 42px;
`

export const AdvantageImg: FC = () => {
  return <AdvantageImgWrapper src={benefits}/>
}