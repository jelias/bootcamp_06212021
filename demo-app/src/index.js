// import React from 'react';
import { render } from "react-dom";

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { ColorToolContainer } from "./containers/ColorTooContainer";
import { CarTool } from "./components/CarTool";

const colorList = [
  { id: 1, name: "green" },
  { id: 2, name: "blue" },
  { id: 3, name: "red" },
];

const carList = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2021,
    color: "blue",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "white",
    price: 120000,
  },
];

const elements = (
  <>
    <ColorToolStoreProvider initialColors={colorList}>
      <ColorToolContainer />
    </ColorToolStoreProvider>
    <CarTool cars={carList} />
  </>
);

render(elements, document.querySelector("#root"));
