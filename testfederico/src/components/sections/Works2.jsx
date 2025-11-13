import "../../App.css";
import image2 from "../../assets/006.png";
import image3 from "../../assets/007.png";
import image4 from "../../assets/008.png";
import image5 from "../../assets/009.png";

const cardItems = [
  {
    image: image2,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
  {
    image: image3,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
  {
    image: image4,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
  {
    image: image5,
    name: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
];

const Works2 = () => {
  return (
    <section className="sectionBeckground">
      <h3>Titolo sezione</h3>
      <div className="myCardCollection">
        {cardItems.map((item, index) => (
          <div className="mycard" key={index}>
            <div>
              <img className="myIMG" src={item.image} alt={item.name} />
              <div></div>
            </div>
            <div className="myCardText">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works2;
