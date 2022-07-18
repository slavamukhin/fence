import { FC } from "react"
import styled from "styled-components"

interface FenceTypeItemProps {
  title: string
  text: string 
  img: string
}

const Image = styled.img`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  color: #003b78;
  font-weight: 800;
  margin: 20px 0;

  @media (max-width: 1220px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const Text = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #222;

  @media (max-width: 1220px) {
    font-size: 17px;
    line-height: 25.5px;
  }
`

const FenceTypeItemWrapper = styled.div`
  width: 23%;
  text-align: center;

  @media (max-width: 1040px) {
    width: 48%;

    &:nth-child(1) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const FenceTypeItem: FC<FenceTypeItemProps> = ({ img, title, text }) => {
  return <FenceTypeItemWrapper>
    <Image src={img}/>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </FenceTypeItemWrapper>
}