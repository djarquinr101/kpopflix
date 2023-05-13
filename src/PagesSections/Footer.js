import { Card } from "react-bootstrap"
import styled from "styled-components";

const StyledFooter = styled(Card)`
position: fixed;
bottom: 0;
width: 100%;
`

const Footer = () => {
    return (
        <StyledFooter bg="dark" text="light">
            <Card.Body>
                <Card.Text className="text-center">Created by Daniel Jarquin</Card.Text>
            </Card.Body>
        </StyledFooter>
    )
}

export default Footer;