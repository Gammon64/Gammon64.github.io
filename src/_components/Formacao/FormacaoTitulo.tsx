import React from "react";

const FormacaoTitulo = ({
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

export default FormacaoTitulo;
