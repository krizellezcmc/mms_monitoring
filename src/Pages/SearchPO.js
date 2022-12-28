import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiSearchAlt2 } from "react-icons/bi";
import NoData from "../Components/NoData";
import PODetails from "../Components/PODetails";

function SearchPO(props) {
  const [val, setVal] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setVal(event.target.po_number.value);
  };

  useEffect(() => {}, [val]);

  return (
    <Container maxW="container.lg" my={10}>
      <Flex>
        <Button
          as={Link}
          colorScheme="teal"
          href="/po"
          _hover={{ textDecoration: "none" }}
          leftIcon={<BiChevronLeft fontSize={20} />}
        >
          Back to Dashboard
        </Button>
        <Spacer />
        <Heading size="lg" fontWeight={500}>
          Purchase Order
        </Heading>
      </Flex>
      <Box align="right" mt={20}>
        <form onSubmit={submit}>
          <Box display="flex" w={500}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt2 color="gray.200" />}
              />
              <Input
                id="po_number"
                name="po_number"
                type="number"
                placeholder="Search P.O"
                bgColor="white"
              />
            </InputGroup>

            <Button ml={3} colorScheme="blue" w={200} type="submit">
              Search
            </Button>
          </Box>
        </form>
      </Box>
      {val === "" ? "Search" : <PODetails PONo={val} />}
    </Container>
  );
}

export default SearchPO;
