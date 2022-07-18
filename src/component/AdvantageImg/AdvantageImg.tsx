import { FC } from "react"
import styled from "styled-components"
import benefits from '../../img/benefits.jpg'


const AdvantageImgWrapper = styled.img`
  display: block;
  width: 50%;
  height: 100%;
  margin-top: 42px;

  @media (max-width: 1220px) {
    margin-top: 32px;
  }

  @media (max-width: 1040px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 20px;
  }
`

export const AdvantageImg: FC = () => {
  return <AdvantageImgWrapper src={benefits}/>
}