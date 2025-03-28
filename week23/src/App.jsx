import React, { useState } from "react";
import Tariff from "./Components/Tariff/Tariff.jsx";
import "./index.scss";

const jsonData = [
  { name: "Безлимитный 300", price: 300, speed: 10, color: "teal" },
  { name: "Безлимитный 450", price: 450, speed: 50, color: "green" },
  { name: "Безлимитный 550", price: 550, speed: 100, color: "red" },
  { name: "Безлимитный 1000", price: 1000, speed: 200, color: "dark" },
];

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  return (
    <div className="app">
      <div className="tariffContainer">
        {jsonData.map((item, index ) => (
          <Tariff
            key={item.price}
            name={item.name}
            price={item.price}
            speed={item.speed}
            color={item.color}
            isSelected={selectedTariff === index}
            onSelect={() => setSelectedTariff(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





