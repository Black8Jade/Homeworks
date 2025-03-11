import './App.css';
import React from "react";
import SuperheroesCard from "./components/SuperheroesCard";
import batman from "./components/superheroes/Batman";
import superman from "./components/superheroes/Superman";
import spiderman from "./components/superheroes/Spiderman";
import wonderwoman from "./components/superheroes/Wonderwoman";
import deadpool from "./components/superheroes/Deadpool";
import hulk from "./components/superheroes/Hulk";
import blackwidow from "./components/superheroes/Blackwidow";
import thor from"./components/superheroes/Thor";
import captainamerica from"./components/superheroes/CaptainAmerica";
import ironman from"./components/superheroes/Ironman";

const superheroes = [batman, superman, spiderman, wonderwoman, deadpool, hulk, blackwidow, thor, captainamerica, ironman]

function App() {
  return (
    <div className="container">
      <h1>Супергерои</h1>
      <div className="superheroes_list">
        {superheroes.map((hero, index) => (
          <SuperheroesCard
            key={index}
            name={hero.name}
            universe={hero.universe}
            alterego={hero.alterego}
            occupation={hero.occupation}
            friends={hero.friends}
            superpowers={hero.superpowers}
            url={hero.url}
            info={hero.info}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
