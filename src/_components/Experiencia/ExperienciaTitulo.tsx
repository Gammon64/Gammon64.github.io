import React from "react";

const ExperienciaTitulo = ({
  titulo,
  subtitulo,
}: {
  titulo: string;
  subtitulo: string;
}) => {
  return (
    <header>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
    </header>
  );
};

export default ExperienciaTitulo;
