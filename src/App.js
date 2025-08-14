import MumbaiCarousel from "./components/MumbaiCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}></h1>
      <Home />
      <MumbaiCarousel />
    </div>
  );
};

export default App;
