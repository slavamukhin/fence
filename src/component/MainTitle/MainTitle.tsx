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
  width: 60%;
`

const Wrapper =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 210px 0 200px;
`

export const MainTitle: FC = () => {
  return (
    <Wrapper>
      <MainTitleWrapper>Individuality designed fencing for you</MainTitleWrapper>
      <Button />
    </Wrapper>
  )
}