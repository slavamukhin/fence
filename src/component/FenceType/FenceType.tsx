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
    title: 'Железное ограждение',
    text: 'Особое внимание при производстве металлических заборов и ограждений уделяется сварке или ковки. Она должна проводиться с применением профессиональных агрегатов, ведь от качества сварного шва во многом зависит надежность конструкции забора',
    img: Iron
  },
  {
    id: 2,
    title: 'Деревянное ограждение',
    text: 'Дерево имеет множество достоинств. Кроме экологической чистоты, это также благородные цвета, запах древесной смолы, возможность быстрой замены испортившихся частей.',
    img: Wood
  },
  {
    id: 3,
    title: 'Виниловое ограждение',
    text: 'Виниловые заборы не подвержены гниению. Они не подвержены нападению насекомых. Они не подвержены коррозии, как металл. Вам не придется красить их - просто купите цвет, какой хотите. Нет необходимости в обработке креозотом или консервантами. Все, что вам нужно сделать, это поставить их на простые крепления, без гвоздей и винтов',
    img: Vinyl
  },
  {
    id: 4,
    title: 'Сеточное ограждение',
    text: 'Сетчатый забор не задерживает воздух, поэтому на дачном участке прохладно даже в самую жаркую погоду. К тому же, такой забор визуально расширяет границы участка, делая его больше. Не стоит забывать и о низкой стоимости, и несложном монтаже ограждения',
    img: Chain
  }
]

const FenceTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 100px;

  @media (max-width: 1040px) {
    flex-wrap: wrap;
    margin: 20px 0 60px;
  }

  @media (max-width: 600px) {
    margin: 20px 0 40px;
  }
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