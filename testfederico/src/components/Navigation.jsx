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
  }
  return (
    <section>
      <div className="myNavBar">
        <p>Logo</p>
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

            <label for="menu-toggle" class="hamburger" onClick={toggle}>
              ☰
            </label>

            {isOpen && <div className="hideMenu">Test</div>}
          </div>
        </div>

        <div className="myButtons">
          <p>Button</p>
          <p>Button</p>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
