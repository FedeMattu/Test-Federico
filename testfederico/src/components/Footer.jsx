import "../App.css";

const Footer = () => {
  return (
    <section>
      <hr className="separationLine" />
      <div className="myFooter">
        <div className="footerLogo">
          <p className="myLogoBox">LOGO</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis in quis tempor id sit
            pellentesque in. Neque nibh pellentesque leo laoreet tristique quis
            ullamcorper. Nisl cursus purus tortor neque justo. Donec laoreet
            enim dolor in habitasse in senectus eleifend.
          </p>
        </div>

        <div className="footerTwo">
          <div className="footerLayout">
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
          </div>

          <div className="footerLayout">
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
