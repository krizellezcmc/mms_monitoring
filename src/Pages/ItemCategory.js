import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import Category from "../Components/Category";
import { BiChevronLeft } from "react-icons/bi";
import ItemsTable from "../Components/ItemsTable";

function StocksIssuance(props) {
  return (
    <div>
      <Container maxW="container.xl" my={10}>
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
            All Items
          </Heading>
        </Flex>

        <ItemsTable />
      </Container>
    </div>
  );
}

export default StocksIssuance;
