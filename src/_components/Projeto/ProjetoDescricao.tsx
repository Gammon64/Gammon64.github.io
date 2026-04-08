import React from "react";

const ProjetoDescricao = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul>
      <li className="text-sm">{children}</li>
    </ul>
  );
};

export default ProjetoDescricao;
