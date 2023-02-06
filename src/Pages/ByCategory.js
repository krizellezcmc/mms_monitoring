import React from "react";
// import AllIssued from "../Components/AllIssued";
import {
  Container,
  Flex,
  Button,
  Spacer,
  Heading,
  Link,
  Box,
} from "@chakra-ui/react";
import { BiChevronLeft } from "react-icons/bi";
import IssuedByCategory from "../Components/IssuedByCategory";
function ByCategory(props) {
  return (
    <div>
      <Container maxW="90%" p={5} align="center">
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
          <Heading size="md" fontWeight={500}>
            All Issued Stocks (Category)
          </Heading>
        </Flex>
        <IssuedByCategory />
      </Container>
    </div>
  );
}

export default ByCategory;
