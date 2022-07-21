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
      title="Качественные заборы, бескомпромиссная работа"
      text="В этом проекте была задача влиться в общую картину домовладения. С заданием успешно справились, цена забора всегда зависит от вашего технического задания. Мы одни из немногих можем построить полностью из ваших материалов"
    />
    <Video />
  </QualityWrapper>
}