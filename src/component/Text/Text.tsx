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

  @media (max-width: 1220px) {
    font-size: 17px;
    line-height: 25.5px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Text: FC<TextProps> = ({ text, color }) => {
  return <TextWrapper color={color}>{text}</TextWrapper>
}