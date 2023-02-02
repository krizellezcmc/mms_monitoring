import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import IssuanceItem from "../Components/IssuanceItem";
import { useParams } from "react-router-dom";

function IssuancePerItem(props) {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);
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
            Issuance by Item
          </Heading>
        </Flex>
        <IssuanceItem id={id} />
      </Container>
    </div>
  );
}

export default IssuancePerItem;
