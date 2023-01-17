import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

function NoInput(props) {
  return (
    <div>
      <Alert
        mt={5}
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Search Purchase Order
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Kindly select category to view list of items.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default NoInput;
