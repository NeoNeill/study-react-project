import React from "react";
import { Counter } from "../Counter/Counter";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
      <Counter />
    </>
  );
};
