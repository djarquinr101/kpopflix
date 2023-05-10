import { Card } from "react-bootstrap";
import styled, {css} from "styled-components";

const StyledCard = styled(Card)`
    margin: 6rem 20% 5rem 20% ;
    padding: 2rem;
    border-radius: 32px;
    box-shadow: 50px 50px 0px #5a5a5a,
                -50px -50px 0px #E0E0E0;

    ${ css`
        @media (max-width: 820px) {
        margin: 6rem 7% 6rem 7%;
        box-shadow: 30px 30px 0px #5a5a5a,
                -30px -30px 0px #E0E0E0;
        }
    `}                
    `

const InfoBio = ({name, infopart1, infopart2}) => {

    return (
        <>
        <StyledCard>
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