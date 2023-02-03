import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import "../Style/Table.css";

function Search({ search, currsearch, placeholder }) {
  return (
    <div>
      <Box
        mb={2}
        mt={2}
        bg={"white"}
        boxShadow="lg"
        rounded={100}
        overflow={"hidden"}
      >
        <InputGroup id="searchbg">
          <InputLeftElement
            pointerEvents="none"
            children={<GoSearch fontSize={16} />}
            color={"gray.500"}
          />
          <Input
            id="searchfield"
            placeholder={placeholder}
            fontSize={14}
            focusBorderColor={"white"}
            outline={"none"}
            value={search}
            onChange={(e) => currsearch(e.target.value)}
          />
        </InputGroup>
      </Box>
    </div>
  );
}

export default Search;
