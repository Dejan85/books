import React from "react";
import { BUTTON_TEXT, PLACEHOLDER } from "./constants";
import { Input, SubContainer, Button } from "../../ui";

const Search = () => {
  const onChange = () => {};
  return (
    <SubContainer>
      <Input placeholder={PLACEHOLDER} onChange={onChange} name="search" />
      <Button type="button" text={BUTTON_TEXT} />
    </SubContainer>
  );
};

export default Search;
