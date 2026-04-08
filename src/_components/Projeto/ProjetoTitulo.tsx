import React from "react";

const ProjetoTitulo = ({ children }: { children: React.ReactNode }) => {
  return (
    <header>
      <h5>{children}</h5>
    </header>
  );
};

export default ProjetoTitulo;
