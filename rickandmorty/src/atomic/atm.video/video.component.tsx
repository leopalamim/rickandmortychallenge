import { IFrameStyled } from './video.component.style'

interface VideoProps {
  url: string
}

export const Video: React.FC<VideoProps> = (props) => {
  return (
    <IFrameStyled
      src={props.url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></IFrameStyled>
  )
}
