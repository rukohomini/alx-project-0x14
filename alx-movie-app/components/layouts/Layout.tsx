import React, { ReactNode } from "react";
import Header from "../layout/Header";

import Footer from "./Footer";

interface Props { children: ReactNode }

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
