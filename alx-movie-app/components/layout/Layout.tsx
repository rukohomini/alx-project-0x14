import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "../layouts/Footer";

interface Props { children: ReactNode }

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
