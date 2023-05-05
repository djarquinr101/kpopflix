import styled from "styled-components";
import { Card } from "react-bootstrap";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: black;
`


const ArtistGrid = () => {

    return(
        <StyledContainer>
            <Card bsStyle="primary">
                <Card.Img variant="top"src=""/>
                <Card.Body>
                    <Card.Title>Artist</Card.Title>
                    <Card.Text>Girl Group</Card.Text>
                </Card.Body>
                </Card>
        </StyledContainer>
    )

}