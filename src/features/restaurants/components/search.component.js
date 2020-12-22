import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { search } = useContext(LocationContext);
  const [keyword, setKeyword] = useState("");
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={keyword}
        onSubmitEditing={() => {
          search(keyword);
          console.log('searching')
        }}
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
