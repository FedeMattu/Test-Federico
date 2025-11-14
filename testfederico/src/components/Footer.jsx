import "../App.css";

const Footer = () => {
  return (
    <section>
      <div className="myFooter">
        <div className="footerLogo">1</div>
        <div className="myFooterGrid">
          <p>
            <b>About</b>
          </p>
          <p>Home</p>
          <p>Chi siamo</p>
          <p>Cosa facciamo</p>
          <p>Tutti i corsi</p>
          <p>Contattaci</p>
        </div>
        <div className="myFooterGrid">
          <p>
            <b>Social</b>
          </p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Youtube</p>
        </div>
        <div className="myFooterGrid">
          <p>
            <b>Supporto</b>
          </p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Termini e condizioni</p>
        </div>
        <div className="myFooterGrid">
          <p>
            <b>Business</b>
          </p>
          <p>Eterna per le aziende</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
