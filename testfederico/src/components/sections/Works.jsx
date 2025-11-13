import '../../App.css';

const portfolioItems = [
  {
    image:
      "../../assets/002.jpg",
    name: "Title",
  },
  {
    image:
      "../../assets/003.jpg",
    name: "Title",
  },
  {
    image:  
      "../../assets/004.jpg",
    name: "Title",
  },
  {
    image:  
      '../assets/005.jpg',
    name: "Title",
  },
];

const Works = () => {
  return (
    <section>
      <h3>Titolo sezione</h3>

      {portfolioItems.map((item, index) => (
        <div key={index}>
          <div>
            <img src={item.image} alt={item.name} />
            <div></div>
          </div>
          <div className="p-4 md:p-6">
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Works;
