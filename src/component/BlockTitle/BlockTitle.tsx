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
`

export const BlockTitle: FC<BlockTitleProps> = ({ text }) => {
  return <BlockTitleWrapper>{text}</BlockTitleWrapper>
}