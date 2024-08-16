import React from "react";

const Card = ({ nombre, apellido }) => {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
    </div>
  );
};

export default Card;
