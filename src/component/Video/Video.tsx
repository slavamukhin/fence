import { FC } from "react"
import styled from "styled-components"
import video from '../../img/quality.mp4'

const VideoWrapper = styled.video`
  width: 50%;
  margin-top: 42px;

  @media (max-width: 1220px) {
    margin-top: 32px;
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`

export const Video: FC = () => {
  return <VideoWrapper height="480" controls><source src={video} type="video/mp4"/></VideoWrapper>
}