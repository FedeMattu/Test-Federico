import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SubMenu from "../components/sections/SubMenu";
import Works from "../components/sections/Works";
import Works2 from "../components/sections/Works2";
import About from "../components/sections/About";
import ImageCarousel from "../components/imageCarousel/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SubMenu />
        <ImageCarousel />
        {/* <Works /> */}
        <Works2 />
        <About />
      </main>
      <hr className="separationLine" />
      <Footer />
    </div>
  );
};

export default Index;
