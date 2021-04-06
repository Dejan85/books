import React, { useEffect, useState } from "react";
import { BUTTON_TEXT, PLACEHOLDER } from "./messages";
import { Input, SubContainer, Button } from "../../ui";
import { useInjectSaga } from "../../../utils/injectSaga";
import { useInjectReducer } from "../../../utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBooksState } from "./selectors";
import { SEARCH_SCOPE } from "./constants";
import { reducer, searchBooksAction } from "./slice";
import saga from "./saga";

// https://www.gogoleapis.com/books/v1/volumes?q=

const Search = (): JSX.Element => {
  useInjectReducer({ key: SEARCH_SCOPE, reducer });
  useInjectSaga({ key: SEARCH_SCOPE, saga, mode: "" });

  const dispatch = useDispatch();
  const { searchBooks } = useSelector(getBooksState);

  const [search, setSearch] = useState("");

  console.log(searchBooks);

  useEffect(() => {
    dispatch(searchBooksAction());
  }, []);

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const searchBook = () => {
    console.log(search);
  };

  const onKeyPress = (e: { key: string }) => {
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
