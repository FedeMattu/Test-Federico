import "../styles/ImageCarousel.css";
import image2 from "../../assets/006.png";
import image3 from "../../assets/007.png";
import image4 from "../../assets/008.png";
import image5 from "../../assets/009.png";
import arrowLeft from "../../assets/left.svg";
import arrowRight from "../../assets/right.svg";
import clock from "../../assets/timer.svg";
import check from "../../assets/check_circle.svg";

const cardItems = [
  {
    image: image2,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
    clock: "03:30h",
    certificate: "Certificazione",
  },
  {
    image: image3,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
    clock: "03:30h",
    certificate: "Certificazione",
  },
  {
    image: image4,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
    clock: "03:30h",
    certificate: "Certificazione",
  },
  {
    image: image5,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
    clock: "03:30h",
    certificate: "Certificazione",
  },
];

const ImageCarousel2 = () => {
  return (
    <section className="sectionBeckground">
      <h3>Titolo sezione</h3>
      <div className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {cardItems.map((item, index) => (
            <li id="carousel__slide1" tabindex="0">
              <div className="mycard" key={index}>
                <div>
                  <img className="myIMG" src={item.image} alt={item.name}/>
                  <div></div>
                </div>
                <div className="myCardText">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="finalInfo">
                    <div className="iconText">
                      <img className="searchIcon" src={clock} alt="clock"></img>
                      <p>{item.clock}</p>
                    </div>
                    <div className="iconText">
                      <img className="searchIcon" src={check} alt="check"></img>
                      <p>{item.certificate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list"></ol>
        </aside>
        <div className="arrowButtonsCollection">
          <button className="arrowButton">
            <img className="arrocIcon" src={arrowLeft} alt="arrow left"/>
          </button>
          <button className="arrowButton">
            <img className="arrocIcon" src={arrowRight} alt="arrow right"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel2;
