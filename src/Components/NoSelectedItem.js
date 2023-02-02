import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

function NoSelectedItem(props) {
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
          No selected item
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Kindly select item to view list of departments.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default NoSelectedItem;
