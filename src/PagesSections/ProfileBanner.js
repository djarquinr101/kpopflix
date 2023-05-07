import {Card} from 'react-bootstrap';

function ImgOverlay({banner,name,info}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={banner} alt={name} />
      <Card.ImgOverlay>
        <Card.Title as ={'h1'}>{name}</Card.Title>
        <Card.Text as ={'h3'}>
         {info}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;