import { FC } from "react"
import styled from "styled-components"
import { Button } from "../Button"



const MainTitleWrapper = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  color: #d5d5d5;
  font-weight: 800;
  z-index: 1;
  position: relative;
  text-align: center;
  width: 80%;

  @media (max-width: 1220px) {
    font-size: 40px;
  }

  @media (max-width: 1040px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (max-width: 605px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 25px;
  }
`

const Wrapper =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 210px 0 200px;

  @media (max-width: 1040px) {
    margin: 180px 0 150px;
  }

  @media (max-width: 800px) {
    margin: 150px 0 80px;
  }

  @media (max-width: 500px) {
    margin: 120px 0 60px;
  }

  @media (max-width: 390px) {
    margin: 100px 0 60px;
  }
`

export const MainTitle: FC = () => {
  return (
    <Wrapper>
      <MainTitleWrapper>Закажи забор с установкой в Москве и МО любой сложности</MainTitleWrapper>
      <Button />
    </Wrapper>
  )
}