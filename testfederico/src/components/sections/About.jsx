import "../../App.css";

const cardItems = [
  {
    number: "1",
    title: "Titolo",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
  {
    number: "2",
    title: "Titolo",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
  {
    number: "3",
    title: "Titolo",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque facilisis egestas arcu neque. Tincidunt vel eu duis fames volutpat in imperdiet enim nec.",
  },
];

const About = () => {
  return (
    <section>
      <h2>Perchè sciegliere noi</h2>

      <div className="motivationCollection">
        {cardItems.map((item, index) => (
          <div className="motivationCard" key={index}>
            <div>
              <p className="numberMotivation">{item.number}</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div></div>
      <h2>Non trovi il corso che cerchi?</h2>
      <h4 className="subtitle">
        Contattaci e faremo il possibile per soddisfare le tue esigenze
      </h4>
      <div className="myForm">
        <div className="aboutForm">
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="aboutFormButton"
          ></input>
          <input
            type="text"
            placeholder="Cognome"
            name="cognome"
            className="aboutFormButton"
          ></input>
        </div>
        <div className="aboutForm">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="aboutFormButton"
          ></input>
          <input
            type="text"
            placeholder="Telefono (opzionale)*"
            name="telefono"
            className="aboutFormButton"
          ></input>
        </div>
        <textarea
          className="textareaInput"
          placeholder="Messaggio (Opzionale)*"
        ></textarea>
        <button className="sendButton">
          <p>Invia messaggio</p>
        </button>
      </div>
    </section>
  );
};

export default About;
