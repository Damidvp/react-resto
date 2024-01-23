import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PlatContext } from "../../../utils/context/PlatContext";
import { useContext, useEffect, useState } from "react";

function Slider() {
  const { listOfPlats } = useContext(PlatContext);
  const carouselElements = listOfPlats.slice(0, 5);
  const [initialSelected, setInitialSelected] = useState(0);

  useEffect(() => {
    if (listOfPlats.length > 0) {
      setInitialSelected(0);
    }
  }, [listOfPlats]);

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
        selectedItem={initialSelected}
      >
        {carouselElements.map((element) => (
          <div key={element.id}>
            <img src={element.photo} alt={element.nom} />
            <p className="legend">{element.nom}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
