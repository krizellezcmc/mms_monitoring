import { Grid, GridItem, Box, Text } from "@chakra-ui/react";

const PRViewDetails = () => {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(12, 1fr)">
      <GridItem rowSpan={1} colSpan={6} p={5} textAlign={"center"}>
        <Box>
          <Text fontSize={11}>
            This is to certify that the items listed above are in Annual
            Procurement Plan.
          </Text>
          <Text mt={5} fontSize={14} fontWeight={"600"}>
            ROWENA A. ABBILANI
          </Text>
          <Text fontSize={11}>
            Supervising Administrative Officer-Procurement
          </Text>
        </Box>
      </GridItem>
      <GridItem
        fontSize={11}
        colSpan={6}
        pt={5}
        pl={40}
        textAlign={"start"}
        display="flex"
        flexDirection="column"
        justifyContent="end"
      >
        <Text>Procurement Mode:______________</Text>
        <Text>Sol. No./RFQ No.:______________</Text>
        <Text>Procurement Date:______________</Text>
        <Text>Posting Date:______________</Text>
        <Text>Opening Date:______________</Text>
      </GridItem>
      <GridItem fontSize={11} rowSpan={1} colSpan={2} p={5}>
        <Text>Signature:</Text>
        <Text>Printed Name:</Text>
        <Text>Designation:</Text>
        <Text>Date Signed:</Text>
      </GridItem>
      <GridItem colSpan={5} textAlign={"center"}>
        <Text fontSize={12} mt={5}>
          Requested by:
        </Text>
        <Text
          fontSize={13}
          fontWeight={600}
          mt={5}
          textDecoration={"underline"}
        >
          BONGO, MARIECLAIRE CIRCULADO
        </Text>
      </GridItem>
      <GridItem colSpan={5} textAlign={"center"}>
        <Text fontSize={12} mt={5}>
          Approved by:
        </Text>
        <Text
          fontSize={13}
          fontWeight={600}
          mt={5}
          textDecoration={"underline"}
        >
          AFDAL B. KUNTING, MD, MPH, FPCP
        </Text>
        <Text fontSize={12}>Medical Center Chief II</Text>
      </GridItem>
    </Grid>
  );
};

export default PRViewDetails;
