import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
    margin-top: 2rem;
    padding: 2rem;
`

const InfoBio = ({name, infopart1, infopart2}) => {

    return (
        <>
        <StyledCard bg={"secondary"}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
            <Card.Text>
               {infopart1}
            </Card.Text>
            <Card.Text> 
               {infopart2}
            </Card.Text>
        </Card.Body>
        </StyledCard>
        </>
    )
}

export default InfoBio;