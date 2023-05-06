import {Card} from 'react-bootstrap';

function ImgOverlay({banner,name,info}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={banner} alt={name} />
      <Card.ImgOverlay>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {info}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;