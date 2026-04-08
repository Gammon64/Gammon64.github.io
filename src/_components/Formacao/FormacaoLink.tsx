import { Dictionary, getDictionary, Locale } from "@/app/[lang]/dictionaries";
import React from "react";

const FormacaoLink = ({
  children,
  href,
  dict,
}: {
  children: React.ReactNode;
  href: string;
  dict: Dictionary;
}) => {
  return (
    <span className=" flex gap-1 text-sm">
      {dict.ui.acesso}:
      <a href={href} className="text-cyan-600 underline">
        {children}
      </a>
    </span>
  );
};

export default FormacaoLink;
