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
`

const Text = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #222;
`

const FenceTypeItemWrapper = styled.div`
  width: 23%;
  text-align: center;
`

export const FenceTypeItem: FC<FenceTypeItemProps> = ({ img, title, text }) => {
  return <FenceTypeItemWrapper>
    <Image src={img}/>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </FenceTypeItemWrapper>
}