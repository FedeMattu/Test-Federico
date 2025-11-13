import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SubMenu from "../components/sections/SubMenu";
import Works from "../components/sections/Works";


const Index = () => {
  return (
    <div className="min-h-screen">
    <Navigation />
        <main>
        <SubMenu />
            <Works />
        </main>
    <Footer />
    </div>
  );
};

export default Index;