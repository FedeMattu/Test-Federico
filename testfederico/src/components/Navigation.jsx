import "./styles/Navigation.css";
import { useState } from "react";

const NavLink = [
  {
    name: "Item",
    link: "",
  },
  {
    name: "Item",
    link: "",
  },
  {
    name: "Item",
    link: "",
  },
  {
    name: "Item",
    link: "",
  },
  {
    name: "Item",
    link: "",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <section className="navFixed">
      {/* <div className="myNavBar">
        <p className="myLogoBox">LOGO</p>
        <div className="endHamburger">
          <label for="menu-toggle" class="hamburger" onClick={toggle}>
            ☰ {isOpen && <div className="hideMenu">Test</div>}
          </label>
        </div>
        <div className="navbar">
          <input type="checkbox" id="menu-toggle"></input>
          <div>
            <ul class="menu">
              {NavLink.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="myButtons">
          <p className="orangeButton">Button</p>
          <p className="orangeButtonBorder">Button</p>
        </div>
      </div> */}

      {/* GLASS */}
      <div className="myNavBar">
        <div className="container container--inline">
          <div className="glass-container glass-container--rounded glass-container--large">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content glass-content--inline">
              <p className="myLogoBox">LOGO</p>
              <div className="endHamburger">
                <label for="menu-toggle" class="hamburger" onClick={toggle}>
                  ☰ {isOpen && <div className="hideMenu">Test</div>}
                </label>
              </div>
              <div className="navbar">
                <input type="checkbox" id="menu-toggle"></input>
                <div>
                  <ul class="menu">
                    {NavLink.map((item, index) => (
                      <li key={index}>
                        <p>{item.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="myButtons">
                <p className="orangeButton">Button</p>
                <p className="orangeButtonBorder">Button</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="glass-container">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <svg>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.008"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        </div>
      </div>
      {/* GLASS */}
    </section>
  );
};

export default Navigation;
