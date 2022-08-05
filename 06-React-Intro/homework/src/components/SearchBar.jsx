import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder="Cities..." required />
      <button onClick={() => props.onSearch("Estamos buscando")}>Add</button>
    </div>
  );
}
