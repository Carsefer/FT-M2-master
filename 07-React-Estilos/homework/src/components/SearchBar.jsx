import React from "react";
import X from "./SearchBar.module.css";
export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={X.cuadro}>
      <input type="text" placeholder="Cities..." required />
      <button onClick={() => props.onSearch("Estamos buscando")}>Add</button>
    </div>
  );
}
