import { Container } from "react-bootstrap"
import styled from "styled-components"

const StyledContainer = styled(Container)`
    padding-top: 2rem;
`

const VideoPlayer = ({id}) => {

    return (
        <StyledContainer>
        <div className="ratio ratio-16x9">
        <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${id}`}
        title="YouTube video player" 
        allowFullScreen>
        </iframe>
        </div>
        </StyledContainer>
    )
}

export default VideoPlayer