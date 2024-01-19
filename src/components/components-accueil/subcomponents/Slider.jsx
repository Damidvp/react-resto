import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="slider-content">
      <Carousel
        width="55%"
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/11/13/03/56/grilled-pineapple-pork-burrito-2944562_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/11/13/03/56/mango-catfish-taco-2944558_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/12/27/04/28/tortilla-3041938_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/04/14/03/23/burrito-4126116_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/07/20/10/taco-4828265_1280.jpg"
            alt="Des tacos"
          ></img>
          <p className="legend">Un délicieux taco</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
