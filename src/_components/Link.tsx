import React from "react";
import { IconType } from "react-icons";

const Link = ({
  children,
  href,
  icon: Icon,
}: {
  children: React.ReactNode;
  href: string;
  icon: IconType;
}) => {
  return (
    <a href={href} className="flex items-center gap-2 text-gray-50">
      <Icon size={20} />
      {children}
    </a>
  );
};

export default Link;
