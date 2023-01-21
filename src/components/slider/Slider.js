import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../media/images/Slider/slider1.jpg'
function Slider() {
  const sliderImages = [sliderImg1]
  let controllers = false
  if (sliderImages.length > 1) {
    controllers = true
  }

  return (
    <Carousel indicators={false} controls={controllers}>
      {sliderImages.map((img, index) => {
        return <Carousel.Item className="overflow-hidden " key={index}>
          <img className="w-100 img-fluid h-50  shadow" src={img} alt="serivcesImage"
          />
        </Carousel.Item>
      })}
    </Carousel>
  )

}

export default Slider;