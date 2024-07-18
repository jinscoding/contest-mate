import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-full flex flex-col justify-center">
        <Header />
        <div className="w-full h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
