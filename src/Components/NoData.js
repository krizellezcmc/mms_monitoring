import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

function NoData(props) {
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
          Purchase order number not found!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default NoData;
