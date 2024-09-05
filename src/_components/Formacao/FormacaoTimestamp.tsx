import React from "react";

const FormacaoTimestamp = ({
  periodo,
  localidade,
}: {
  periodo: string;
  localidade: string;
}) => {
  return (
    <div>
      <span>{periodo}</span>
      <span>{localidade}</span>
    </div>
  );
};

export default FormacaoTimestamp;
