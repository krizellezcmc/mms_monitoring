import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

function NoSelectedCat(props) {
  return (
    <div>
      <Alert
        mt={10}
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
          No selected category
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Kindly select item category to view list of items.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default NoSelectedCat;
