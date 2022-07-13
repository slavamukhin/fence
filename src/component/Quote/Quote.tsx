import { FC } from "react"
import styled from "styled-components"
import { Text } from '../Text'

const QuoteWrapper = styled.div`
  color: #fff;
  text-align: center;
  padding: 40px 120px 100px;
`

const QuoteSymbol = styled.div`
  font-size: 150px;
  line-height: 30px;
  margin: 60px 0 30px;
`

const NameWrapper = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 15px;
`

export const Quote: FC = () => {
  return <QuoteWrapper>
      <QuoteSymbol>&#10077;</QuoteSymbol>
      <Text color="#fff" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa. Curabitur congue ac massa vitae hendrerit. Vivamus eu tellus quis felis tincidunt aliquet. Quisque libero quam, tincidunt vitae tellus id, pharetra iaculis arcu. Proin nulla leo, vulputate euismod porttitor sit amet, placerat elementum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis pellentesque magna. Nulla varius lorem elit, vel scelerisque leo euismod eu. Cras luctus pulvinar congue. Aenean venenatis risus ac lorem hendrerit ornare.' />
      <NameWrapper>
        <Text color="#fff" text='John Smit'/>
      </NameWrapper>
  </QuoteWrapper>
}