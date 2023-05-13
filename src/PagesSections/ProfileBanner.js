import {Card } from 'react-bootstrap';
import styled, {css} from 'styled-components';

const StyledContainer = styled(Card)`
display:none;
 ${ css`
        @media (min-width: 768px) {
        display:block;
        }
    `} 
`

const StyledCard = styled(Card)`
display:none;
${ css`
        @media (max-width: 767px) {
        display:block;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;

        }
    `} 

`

const StyledCardImg = styled(Card.Img)`
    border-radius: 200px;
    max-width: 250px;
    max-height: 250px;
    margin-top: 0px;
    margin: 10px;
`


function ImgOverlay({banner,name,info, profile}) {
  return (
    <>
    <StyledContainer className="bg-dark text-white">
      <Card.Img src={banner} alt={name} />
      <Card.ImgOverlay>
        <Card.Title as ={'h1'}>{name}</Card.Title>
        <Card.Text as ={'h3'}>
         {info}
        </Card.Text>
      </Card.ImgOverlay>
    </StyledContainer>

    <StyledCard>
      <StyledCardImg src={profile}/>
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">{info}</Card.Text>  
      </Card.Body>
    </StyledCard>
    </>   
  );
}

export default ImgOverlay;