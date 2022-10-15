import "./App.css";
import CarouselFadeExample from "./components/AnotherCarousel";
import AnotherCarousel from "./components/AnotherCarousel";
import Bio from "./components/Bio";
import IndividualIntervalsExample from "./components/CarouselMain";
import DropDownFunction from "./components/Dropdown";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="topnav">
          <div className="flex">
            <span className="color-white">Contact</span>
            <span className="color-white">Galerie</span>
            <DropDownFunction />
          </div>
        </nav>
        <section>
          <div className="carousel-class">
            <AnotherCarousel />
          </div>
        </section>
      </header>

      <Bio />
      <Gallery />
    </div>
  );
}

export default App;
