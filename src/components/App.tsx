import React from "react";
import { Button, Header, MainContainer, SubContainer, Input } from "./ui/index";
const App = (): JSX.Element => {
  return (
    <div className="app">
      <MainContainer>
        <Header tag="h1" text="Book Expand" />
        <SubContainer>
          <Input />
          <Button type="button" text="Search" />
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default App;
