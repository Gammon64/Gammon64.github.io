import React from "react";

const FormacaoLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <span className=" flex gap-1 text-sm">
      Link para acesso:
      <a href={href} className="text-cyan-600 underline">
        {children}
      </a>
    </span>
  );
};

export default FormacaoLink;
