import React from "react";

const ExperienciaTimestamp = ({
  periodo,
  localidade,
}: {
  periodo: string;
  localidade: string;
}) => {
  return (
    <div className="flex justify-between italic text-xs text-cyan-600">
      <span>{periodo}</span>
      <span>{localidade}</span>
    </div>
  );
};

export default ExperienciaTimestamp;
