import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const StyledCardTitle = styled(Card.Title)`
   margin-bottom: 1rem;
`

function ImgOverlay({banner,name,info}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={banner} alt={name} />
      <Card.ImgOverlay>
        <StyledCardTitle as ={'h1'}>{name}</StyledCardTitle>
        <Card.Text as ={'h3'}>
         {info}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;