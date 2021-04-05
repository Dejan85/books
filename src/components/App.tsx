import React from "react";
import { Search } from "./frontend";
import { MainContainer, Header } from "./ui/index";
const App = (): JSX.Element => {
  return (
    <div className="app">
      <MainContainer>
        <Header tag="h1" text="Book Explorer" />
        <Search />
      </MainContainer>
    </div>
  );
};

export default App;
