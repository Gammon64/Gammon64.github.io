import React from "react";

const FormacaoTimestamp = ({
  periodo,
  localidade,
}: {
  periodo: string;
  localidade: string;
}) => {
  return (
    <div className="flex flex-col italic text-xs text-cyan-600">
      <span>{periodo}</span>
      <span>{localidade}</span>
    </div>
  );
};

export default FormacaoTimestamp;
