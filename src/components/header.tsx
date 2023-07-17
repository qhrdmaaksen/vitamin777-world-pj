import React from "react";
import { Layout, LayoutTopLogoMainBanner } from "./Layout";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <Layout>
      <LayoutTopLogoMainBanner>
        <div className="header-logo"></div>
        <div className="mainBannerContainer">
          <div className="header-mainBanner-child">header main banner</div>
        </div>
      </LayoutTopLogoMainBanner>
    </Layout>
  );
};
