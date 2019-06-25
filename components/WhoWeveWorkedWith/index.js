
import styles from './styles.scss'

const SliderItem = ({ children }) => {
  return (
    <div className={styles.item}>{children}</div>
  )
}

const WorkedWith = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };

  return (
    <div>SLIDER</div>
    // <Slider {...settings}>
    //   <SliderItem>Fixr</SliderItem>
    //   <SliderItem>Shell</SliderItem>
    //   <SliderItem>Wonderbil</SliderItem>
    //   <SliderItem>Applied Blockchain</SliderItem>
    //   <SliderItem>DAZN</SliderItem>
    //   <SliderItem>101Ways</SliderItem>
    //   <SliderItem>Tata Steel</SliderItem>
    //   <SliderItem>SteelScout</SliderItem>
    //   <SliderItem>Metalhub</SliderItem>
    //   <SliderItem>Kaleidoscope Communications</SliderItem>
    //   <SliderItem>Heaven Sent cards</SliderItem>
    // </Slider>
  )
}

export default WorkedWith