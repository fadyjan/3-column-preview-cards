import LuxIcon from "./assets/icon-luxury.svg";
import SedanIcon from "./assets/icon-sedans.svg";
import SuvsIcon from "./assets/icon-suvs.svg";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const CarsObject = [
    {
      Tittle: "SEDANS",
      Icon: SedanIcon,
      CarDescription:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      Tittle: "SUVS",
      Icon: SuvsIcon,
      CarDescription:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      Tittle: "LUXURY",
      Icon: LuxIcon,
      CarDescription:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];

  return (
    <div id="App">
      <div id="MainContainer">
        {CarsObject.map((car) => {
          return <Card carRecord={car}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
