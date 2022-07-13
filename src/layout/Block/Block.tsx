import { FC, ReactNode  } from "react"
import styled from "styled-components"

const BlockWrapper = styled.div<BlockWrapperProps>`
  display: flex;
  justify-content: center;
  background-image: ${({background}) => background ? `url('${background}')` : 'none'};
  background-color: ${({background}) => background ? background : 'none'};
  background-repeat: no-repeat;
  position: relative;
  object-fit: cover;
  background-position-y: -180px;
`
const ContentWrapper = styled.div`
  width: 1440px;
  padding: 0 20px;
`
interface BlockProps {
  content: ReactNode
  background?: string
}

type BlockWrapperProps = Pick<BlockProps, 'background'>

export const Block: FC<BlockProps> = ({ content, background }) => {
  return <BlockWrapper background={background}>
    <ContentWrapper>
      {content}
    </ContentWrapper>
  </BlockWrapper>
}