import React, { Component } from "react";
import "./App.css";

const ShoppingList = () => {
  const [items] = React.useState({
    item1: "ogórki",
    item2: "sok",
    item3: "woda",
  });

  return (
    <div>
      <h1>Lista zakupów</h1>
      <ul>
        <ItemList name={items.item1} example={3} />
        <ItemList name={items.item2} example={6} />
        <ItemList name={items.item3} example={2} />
      </ul>
    </div>
  );
};

const ItemList = ({ name, example }) => (
  <li>
    {name} - {example}
  </li>
);

export default ShoppingList;
