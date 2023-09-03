import {Button, Header, Input, NutritionalCustomizedExamination, SideIllust} from "../../components";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
          <Input />
          <Button />
      </div>
      <div>
          vitamin777 mainHomeContents
        <SideIllust />
          <NutritionalCustomizedExamination />
      </div>
    </div>
  );
};