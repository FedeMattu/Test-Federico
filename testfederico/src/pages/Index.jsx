import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SubMenu from "../components/sections/SubMenu";
import Works from "../components/sections/Works";
import Works2 from "../components/sections/Works2";

const Index = () => {
  return (
    <div className="min-h-screen">
    <Navigation />
        <main>
        <SubMenu />
            <Works />
            <Works2 />
        </main>
    <Footer />
    </div>
  );
};

export default Index;