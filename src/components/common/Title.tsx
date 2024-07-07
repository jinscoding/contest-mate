import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <h1 className={"text-3xl font-bold text-gray-400"}>{children}</h1>;
};

export default Title;
