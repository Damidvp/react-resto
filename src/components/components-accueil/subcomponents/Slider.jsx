import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PlatContext } from "../../../utils/context/PlatContext";
import { useContext } from "react";

function Slider() {
  const { listOfPlats } = useContext(PlatContext);
  const carouselElements = listOfPlats.slice(0, 5);

  return (
    <div className="slider-content">
      <Carousel
        width="55%"
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
        showArrows={false}
        showStatus={false}
      >
        {carouselElements.map((element) => (
          <div>
            <img src={element.photo} alt={element.nom} />
            <p className="legend">{element.nom}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
