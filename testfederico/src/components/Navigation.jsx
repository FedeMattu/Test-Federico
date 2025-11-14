import "../App.css";
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
      <div className="myNavBar">
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
    </section>
  );
};

export default Navigation;
