import React from "react";
import { Button, Header, MainContainer, SubContainer } from "./ui/index";
const App = (): JSX.Element => {
  return (
    <div className="app">
      <MainContainer>
        <Header tag="h1" text="Book Expand" />
        <SubContainer>
          <Button />
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default App;
