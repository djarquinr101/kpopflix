import { Card,Carousel, Button, Image } from 'react-bootstrap';
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
  height: 100%
`

const StyledImg = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
  `

function CarouselFade() {
  return (
    <StyledContainer>
    <StyledCarousel fade>
      <StyledItem>
        <StyledImg 
          src="https://lh3.googleusercontent.com/EMI8vfiR_WWe4rywQxj-BW9yqwDr4P1c5a8X7AcfaWoafwf5SWzI8oQ5Qf_QE5OotO4XJST1cg3ifpUW2dhUdKocxV-KbFDs1Xyr1c5F6TdNixo=w1200-h600-pp-rj-s365"
          alt="Blackpink"
        />
      
        <Carousel.Caption bg={'dark'}>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant={"light"}>Listen Now</Button>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem>
        <StyledImg
          src="https://cdn.shortpixel.ai/spai/q_lossy+w_844+h_515+to_auto+ret_img/https://koreanquiz.com/wp-content/uploads/2022/08/TWICE-Members-Quiz.jpg"
          alt="Second slide"
        />
        <Carousel.Caption bg={'dark'}>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant={"light"}>Listen Now</Button>
        </Carousel.Caption>
      </StyledItem>
      
      <StyledItem>
        <StyledImg
          src="https://stylecaster.com/wp-content/uploads/2020/08/itzy.jpg"
          alt="Third slide"
        />
         <Carousel.Caption bg={'dark'}>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant={"light"}>Listen Now</Button>
        </Carousel.Caption>
        
      </StyledItem>
    </StyledCarousel>
    </StyledContainer>
  );
  }
export default CarouselFade;