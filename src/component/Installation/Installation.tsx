import { FC } from "react"
import styled from "styled-components"
import { BlockTitle } from '../BlockTitle'
import { Text } from "../Text"

const InstallationWrapper = styled.div`
  margin: 100px 0 40px;
`

export const Installation: FC = () => {
  return <InstallationWrapper>
    <BlockTitle text="Fance installation" />
    <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tempor facilisis. Vivamus magna ante, fermentum sed augue eu, ultricies ornare massa. Curabitur congue ac massa vitae hendrerit. Vivamus eu tellus quis felis tincidunt aliquet. Quisque libero quam, tincidunt vitae tellus id, pharetra iaculis arcu. Proin nulla leo, vulputate euismod porttitor sit amet, placerat elementum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas quis pellentesque magna. Nulla varius lorem elit, vel scelerisque leo euismod eu. Cras luctus pulvinar congue. Aenean venenatis risus ac lorem hendrerit ornare."/>
  </InstallationWrapper>
}