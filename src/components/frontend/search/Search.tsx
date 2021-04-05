import React, { useState } from "react";
import { BUTTON_TEXT, PLACEHOLDER } from "./constants";
import { Input, SubContainer, Button } from "../../ui";

const Search = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const searchBook = () => {
    console.log(search);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      searchBook();
    }
  };

  return (
    <SubContainer>
      <Input
        placeholder={PLACEHOLDER}
        onChange={onChange}
        name="search"
        value={search}
        onKeyPress={onKeyPress}
      />
      <Button type="button" text={BUTTON_TEXT} onClick={searchBook} />
    </SubContainer>
  );
};

export default Search;
