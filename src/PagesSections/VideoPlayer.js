import { Container } from "react-bootstrap"
import styled from "styled-components"

const StyledContainer = styled(Container)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: black;
`

const VideoPlayer = ({id}) => {

    return (
        <StyledContainer className="ratio ratio-16x9">
        <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${id}`}
        title="YouTube video player" 
        allowFullScreen>
        </iframe>
        </StyledContainer>
    )
}

export default VideoPlayer