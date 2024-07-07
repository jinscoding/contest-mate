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
      <main className='w-full mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
