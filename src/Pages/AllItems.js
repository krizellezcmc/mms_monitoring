import React from "react";
import AllIssued from "../Components/AllIssued";
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
function AllItems(props) {
  return (
    <div>
      <Container maxW="100%" p={5} align="center">
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
            All Issued Stocks
          </Heading>
        </Flex>
        <AllIssued />
      </Container>
    </div>
  );
}

export default AllItems;
