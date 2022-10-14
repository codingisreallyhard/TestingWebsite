import "./App.css";
import IndividualIntervalsExample from "./components/CarouselMain";
import DropDownFunction from "./components/Dropdown";

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
        <section className="carousel-class">
          <IndividualIntervalsExample />
        </section>
      </header>
    </div>
  );
}

export default App;
