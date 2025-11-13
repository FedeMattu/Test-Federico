import "../App.css";

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
  return (
    <section>
      <div className="myNavBar">
        <p>Logo</p>

        <div className="navLink">
          {NavLink.map((item, index) => (
            <div className="singleNavLink" key={index}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div>
          <p>Button</p>
          <p>Button</p>
        </div>
        <label for="menu-toggle" class="hamburger">☰</label>
      </div>
    </section>
  );
};

export default Navigation;
