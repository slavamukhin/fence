import { FC } from "react"
import styled from "styled-components"
import video from '../../img/quality.mp4'

const VideoWrapper = styled.video`
  width: 50%;
  height: 100%;
  margin-top: 42px;
`

export const Video: FC = () => {
  return <VideoWrapper controls><source src={video} type="video/mp4"/></VideoWrapper>
}