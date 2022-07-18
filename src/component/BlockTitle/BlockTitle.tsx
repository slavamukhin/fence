import { FC } from "react"
import styled from "styled-components"

interface BlockTitleProps {
  text: string
}

const BlockTitleWrapper = styled.h2`
  text-transform: uppercase;
  font-size: 40px;
  color: #222;
  font-weight: 800;

  @media (max-width: 1220px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

export const BlockTitle: FC<BlockTitleProps> = ({ text }) => {
  return <BlockTitleWrapper>{text}</BlockTitleWrapper>
}