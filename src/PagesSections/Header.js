import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/EMI8vfiR_WWe4rywQxj-BW9yqwDr4P1c5a8X7AcfaWoafwf5SWzI8oQ5Qf_QE5OotO4XJST1cg3ifpUW2dhUdKocxV-KbFDs1Xyr1c5F6TdNixo=w1200-h600-pp-rj-s365"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shortpixel.ai/spai/q_lossy+w_844+h_515+to_auto+ret_img/https://koreanquiz.com/wp-content/uploads/2022/08/TWICE-Members-Quiz.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://stylecaster.com/wp-content/uploads/2020/08/itzy.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;