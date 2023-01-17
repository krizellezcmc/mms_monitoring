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
import { useNavigate } from "react-router-dom";

function StocksIssuance(props) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <Container maxW="container.xl" my={10}>
        <Flex>
          <Button
            colorScheme="teal"
            _hover={{ textDecoration: "none" }}
            leftIcon={<BiChevronLeft fontSize={20} />}
            onClick={(e) => handleClick(e)}
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
