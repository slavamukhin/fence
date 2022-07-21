import { FC } from "react"
import styled from "styled-components"
import { BlockTitle } from '../BlockTitle'
import { Text } from "../Text"

const InstallationWrapper = styled.div`
  margin: 100px 0 40px;

  @media (max-width: 1040px) {
    margin: 60px 0 40px;
  }

  @media (max-width: 600px) {
    margin: 40px 0 40px;
  }
`

export const Installation: FC = () => {
  return <InstallationWrapper>
    <BlockTitle text="Установка забора" />
    <Text text="С давних времен люди использовали ограждения. Они применялись не только для охраны имущества, но и для обозначения границ участка. Я Юдинцев Андрей занимаюсь изготовлением и установкой заборов с 2017 г. За это время работы мне удалось выполнить около 200 работ. Напишите мне в WhatsApp или позвоните по номеру +7(903)274-44-55 для уточнения сроков и стоимости вашего забора. У меня есть хороший опыт установки сеточных ограждений, железных, из винила и дерева и др. материалов. Если вы точно не знаете какой забор установить также связитесь со мной и я вас проконсультирую."/>
  </InstallationWrapper>
}