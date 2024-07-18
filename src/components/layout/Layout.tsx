import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='w-full bg-gray-100 p-5 mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
