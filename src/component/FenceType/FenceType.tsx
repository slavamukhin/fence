import { FC } from "react"
import Iron from '../../img/iron.jpg'
import Wood from '../../img/wood.jpg'
import Vinyl from '../../img/vinyl.jpg'
import Chain from '../../img/chain.jpg'
import { FenceTypeItem } from "../FenceTypeItem"
import styled from "styled-components"


interface FenceTypeDateType {
  id: number
  title: string
  text: string
  img: string
}

const FenceTypeDate: FenceTypeDateType[] = [
  {
    id: 1,
    title: 'Iron fencing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa.',
    img: Iron
  },
  {
    id: 2,
    title: 'Wood fencing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa.',
    img: Wood
  },
  {
    id: 3,
    title: 'Vinyl fencing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa.',
    img: Vinyl
  },
  {
    id: 4,
    title: 'Chain fencing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa.',
    img: Chain
  }
]

const FenceTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 100px
`

export const FenceType: FC = () => {
  return <FenceTypeWrapper>
    {FenceTypeDate.map(
      ({id, title, text, img}) => 
        <FenceTypeItem 
          key={id}
          title={title}
          text={text}
          img={img} 
        />
    )}
  </FenceTypeWrapper>
}