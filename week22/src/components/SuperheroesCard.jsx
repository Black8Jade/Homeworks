import React from "react";
import ListItem from "./listItem";

function SuperheroesCard(props) {
  return (
    <div className="superheroes_card">
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      <ListItem label="Вселенная" value={props.universe} />
      <ListItem label="Альтер эго" value={props.alterego} />
      <ListItem label="Род занятий" value={props.occupation} />
      <ListItem label="Друзья" value={props.friends} />
      <ListItem label="Суперспособности" value={props.superpowers} />
      <p>{props.info}</p>
    </div>
  );
}

export default SuperheroesCard;