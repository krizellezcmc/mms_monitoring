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
import React, { useState } from "react";
import { BiChevronLeft, BiSearchAlt2 } from "react-icons/bi";
import NoData from "./NoData";
import POReport from "./POReport";

function SearchPO(props) {
  const [val, setVal] = useState("");
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
        <Box display="flex" w={500}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiSearchAlt2 color="gray.200" />}
            />
            <Input type="tel" placeholder="Search P.O" bgColor="white" />
          </InputGroup>

          <Button ml={3} colorScheme="blue" w={200}>
            Search
          </Button>
        </Box>
      </Box>{" "}
      {/* {!val ? <NoData /> : <POReport />} */}
      <POReport />
    </Container>
  );
}

export default SearchPO;
