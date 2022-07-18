import { FC } from "react"
import styled from "styled-components"
import { Advantage } from "../Advantage"
import { Video } from "../Video"

const QualityWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 60px 0 100px;

  @media (max-width: 1040px) {
    margin: 60px 0 80px;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 40px 0 60px;
  }
`

export const Quality: FC = () => {
  return <QualityWrapper>
    <Advantage 
      title="Quality fences uncompromised work"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis."
    />
    <Video />
  </QualityWrapper>
}