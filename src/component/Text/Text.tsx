import { FC } from "react"
import styled from "styled-components"

interface TextProps {
  text: string
  color?: string
}

type TextWrapperProps = Pick<TextProps, 'color'>

const TextWrapper = styled.div<TextWrapperProps>`
  font-size: 18px;
  line-height: 27px;
  color: ${({color}) => color ? color : '#222'};
`

export const Text: FC<TextProps> = ({ text, color }) => {
  return <TextWrapper color={color}>{text}</TextWrapper>
}