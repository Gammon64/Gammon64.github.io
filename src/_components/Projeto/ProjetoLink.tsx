import React from "react";

const ProjetoLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <footer>
      <span>
        Link para acesso:
        <a href={href}>{children}</a>
      </span>
    </footer>
  );
};

export default ProjetoLink;
