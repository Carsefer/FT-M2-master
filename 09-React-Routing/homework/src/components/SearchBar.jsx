import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const handleChange = (evento) => {
    setCity(evento.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(evento) => handleChange(evento)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
