import { FC } from "react"
import styled from "styled-components"
import { Advantage } from "../Advantage"
import { AdvantageImg } from "../AdvantageImg"

const BenefitsWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 0 0 100px;
`

export const Benefits: FC = () => {
  return <BenefitsWrapper>
    <AdvantageImg />
    <Advantage 
      title="Why fencing company"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis."
    />
  </BenefitsWrapper>
}