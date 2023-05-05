import { Carousel, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: auto;
  max-height: 700px;
  overflow: hidden;
`
const StyledItem = styled(Carousel.Item)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%`

const StyledImg = styled(Image)`
  max-width: 100%;
  max-height: 700px;
  height: auto;
  object-fit: contain;`

function CarouselFade({banners}) {
  return (
    <StyledContainer>
    <StyledCarousel fade>
     { banners.map((banner, index) => (
    <StyledItem key = {index}>
        <StyledImg 
          src= {banner.banner}
          alt= {banner.name}
        />
      
        <Carousel.Caption>
          <h1>{banner.name}</h1>
          <Button variant={"light"}>Listen Now</Button>
        </Carousel.Caption>
      </StyledItem>
     ))}
    </StyledCarousel>
    </StyledContainer>
  );
  }
export default CarouselFade;