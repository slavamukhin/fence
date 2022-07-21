import { FC } from "react"
import styled from "styled-components"
import { Advantage } from "../Advantage"
import { AdvantageImg } from "../AdvantageImg"

const BenefitsWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 0 0 100px;

  @media (max-width: 1040px) {
    margin: 0 0 60px;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 0 0 40px;
  }
`

export const Benefits: FC = () => {
  return <BenefitsWrapper>
    <AdvantageImg />
    <Advantage 
      title="Почему вам стоит со мной связаться?"
      text="Если вы решили построить забор на вашем участке, первое что я сделаю это узнаю ваши мысли об этом и помогу избежать ошибок при выборе материала ограждения, и монтаже. Что скажется на качестве, везуале, цене и сроки службы вашего забора. Так же я помогу вам заказать забор из наиболее качественных материалов, что скажится на его сроки службы. Я профессионал своего дела и выполняю сою работу максимально качественно. Для меня важно помочь каждому обратившимуся ко мне, поэтому я работою с любым бюджетом и делаю максимум что умею и могу."
    />
  </BenefitsWrapper>
}