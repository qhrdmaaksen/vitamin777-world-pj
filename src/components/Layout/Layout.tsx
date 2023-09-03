import "./Layout.css";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
      <div className="main-layout">
        {children}
      </div>
  );
};
