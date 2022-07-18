import { FC } from "react"
import styled from "styled-components"
import { BlockTitle } from "../BlockTitle"
import { Text } from "../Text"

const AdvantageWrapper = styled.div`
  width: 47%;

  @media (max-width: 1040px) {
    width: 100%;
  }
`

interface AdvantageProps {
  title: string
  text: string
}

export const Advantage: FC<AdvantageProps> = ({title, text}) => {
  return <AdvantageWrapper>
    <BlockTitle text={title} />
    <Text text={text}/>
  </AdvantageWrapper>
}