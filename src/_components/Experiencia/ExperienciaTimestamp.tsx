import React from "react";

const ExperienciaTimestamp = ({
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

export default ExperienciaTimestamp;
