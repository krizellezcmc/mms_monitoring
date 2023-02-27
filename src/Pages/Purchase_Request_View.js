import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PR_Data } from "../Data/PR_DataSet";
import { useLocation } from "react-router-dom";
import "../Style/Table.css";
import PRViewHeader from "../Components/Grid/PRViewHeader";
import PRViewDetails from "../Components/Grid/PRViewDetails";
import GridBody from "../Components/Grid/GridBody";

const PurchaseRequestView = () => {
  const location = useLocation();
  const [pr, setPr] = useState(location.state);

  return (
    <Box w={"100%"} h={"100vh"} display="flex">
      <Box w={"inherit"} flex={3} p={10} fontFamily={"Georgia, serif"}>
        <PRViewHeader />
        <GridBody id={pr.PK_pr_ID} PR_Data={PR_Data} />
        <PRViewDetails />
      </Box>
      <Box w="inherit" flex={2} p={2}>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Heading size={"lg"}>Accounting Department</Heading>
          <Text>January 14, 2023</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PurchaseRequestView;
