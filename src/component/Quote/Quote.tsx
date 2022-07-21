import { FC } from "react"
import styled from "styled-components"
import { Text } from '../Text'

const QuoteWrapper = styled.div`
  color: #fff;
  text-align: center;
  padding: 40px 120px 100px;

  @media (max-width: 1040px) {
    padding: 40px 0 60px;
  }

  @media (max-width: 800px) {
    padding: 20px 0 40px;
  }
`

const QuoteSymbol = styled.div`
  font-size: 150px;
  line-height: 30px;
  margin: 60px 0 30px;

  @media (max-width: 1040px) {
    font-size: 120px;
    line-height: 20px;
    margin: 40px 0 20px;
  }
`

const NameWrapper = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 15px;
`

export const Quote: FC = () => {
  return <QuoteWrapper>
      <QuoteSymbol>&#10077;</QuoteSymbol>
      <Text color="#fff" text='Имейте в виду, если вы сделаете быстро и плохо, то люди забудут, что вы сделали быстро, и запомнят, что вы сделали плохо. Если вы сделаете медленно и хорошо, то люди забудут, что вы сделали медленно, и запомнят, что вы сделали хорошо!' />
      <NameWrapper>
        <Text color="#fff" text='Юдин Андрей'/>
      </NameWrapper>
  </QuoteWrapper>
}