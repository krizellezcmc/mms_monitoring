import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function NoDeptData(props) {
  return (
    <div>
      <Alert
        mt={10}
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Please select a Department
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Stocks issued to the department will be displayed.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default NoDeptData;
