import * as React from "react";
import { CustomCursor } from "./CustomCursor";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <CustomCursor />
      <NavBar />

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
