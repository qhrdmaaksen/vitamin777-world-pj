import React from "react";
import { Layout, LayoutTopLogoMainBanner } from "./Layout";
import "./header.css";
import {MainBanner} from "./mainBanner.tsx";

export const Header: React.FC = () => {
    const BannerImages = [
        '../vitamin777world/fruitCapsule.jpg',
        '../vitamin777world/mainIllustCapsule.jpg',
        '../vitamin777world/vitaminIllust.jpg',
    ]
  return (
    <Layout>
      <LayoutTopLogoMainBanner>
        <div className="header-logo"></div>
        <div className="mainBannerContainer">
          <div className="header-mainBanner-child">
              <MainBanner BannerImages={BannerImages} interval={4000} />
          </div>
        </div>
      </LayoutTopLogoMainBanner>
    </Layout>
  );
};
