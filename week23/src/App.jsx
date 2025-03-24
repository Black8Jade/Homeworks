import React from "react";
import Tariff from "./Components/Tariff.jsx";
import "./index.scss";

const jsonData = [
  { name: "Безлимитный 300", price: 300, speed: 10, color: "teal" },
  { name: "Безлимитный 450", price: 450, speed: 50, color: "green" },
  { name: "Безлимитный 550", price: 550, speed: 100, color: "red" },
  { name: "Безлимитный 1000", price: 1000, speed: 200, color: "dark" },
];

function App() {
  return (
    <div className="app">
      <div className="tariff_container">
        {jsonData.map((item) => (
          <Tariff
            key={item.price}
            name={item.name}
            price={item.price}
            speed={item.speed}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





