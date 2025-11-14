import "../../App.css";
import search from "../../assets/search.svg";

const categories = [
  {
    title: "Categoria di corso",
  },
  {
    title: "Categoria di corso",
  },
  {
    title: "Categoria di corso",
  },
  {
    title: "Categoria di corso",
  },
  {
    title: "Categoria di corso",
  },
  {
    title: "Categoria di corso",
  },
];

const SubMenu = () => {
  return (
    <section className="subMenu">
      <div className="title">
        <h1>Main claim di impatto</h1>

        <form className="form">
          <input
            type="text"
            placeholder="Search..."
            name="search2"
            className="searchInput"
          ></input>
          <button type="submit" className="searchButton">
            <img className="searchIcon" src={search}></img>
          </button>
        </form>

        <div className="categoryCollection">
            <div className="lineCategory">
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
            </div>

            <div className="lineCategory">
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
            </div>

            <div className="lineCategory">
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
              <div className="categotyButton">
                <p>Categoria di corso</p>
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
};

export default SubMenu;
