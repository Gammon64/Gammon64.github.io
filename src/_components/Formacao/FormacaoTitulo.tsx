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
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
    </header>
  );
};

export default FormacaoTitulo;
