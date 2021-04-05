import React from "react";
import { Search } from "./frontend";
import { MainContainer, Header } from "./ui/index";
const App = (): JSX.Element => {
  const onChange = () => {};
  return (
    <div className="app">
      <MainContainer>
        <Header tag="h1" text="Book Explorer" />
        {/* <SubContainer>
          <Input
            placeholder="Search for book"
            onChange={onChange}
            name="search"
          />
          <Button type="button" text="Search" />
        </SubContainer> */}
      </MainContainer>
    </div>
  );
};

export default App;
