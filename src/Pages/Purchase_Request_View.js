import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { PR_Data } from "../Data/PR_DataSet";

const PRViewHeader = () => {
  return (
    <>
      <Box w={"100%"} h={"10rem"}>
        <Flex justifyContent={"center"}>
          <Image
            w="60px"
            h={"80px"}
            src={require("./../assets/other/logo.png")}
          />
          <Box w={"25%"} textAlign={"center"}>
            <Text fontSize={12} fontWeight={"400"}>
              Republic of the Philippines
            </Text>
            <Text fontSize={12} fontWeight={"400"}>
              Department of Health
            </Text>
            <Text fontSize={12} fontWeight={"400"}>
              ZAMBOANGA CITY MEDICAL CENTER
            </Text>
            <Text fontSize={12} fontWeight={"400"}>
              Dr. D. Evangelista,Sta. Catalina, Zamboanga City, 7000
            </Text>
          </Box>
          <Image
            w="80px"
            h={"80px"}
            src={require("./../assets/logo/doh-logo.png")}
          />
        </Flex>
      </Box>
    </>
  );
};

const TableHeader = () => {
  return (
    <>
      <GridItem rowSpan={1} colSpan={3} border={"1px solid black"} p={2}>
        <Text>Office/Section: Engr and Facility Management</Text>
      </GridItem>
      <GridItem colSpan={5} border={"1px solid black"} p={2}>
        <Text>PR NO: 22-08-0917</Text>
        <Text>Responsibility Center Code:</Text>
      </GridItem>
      <GridItem colSpan={4} border={"1px solid black"} p={2}>
        <Text>Date:</Text>
      </GridItem>
      {/* END TOP HEADER HERE */}
      <GridItem rowSpan={1} colSpan={1} border={"1px solid black"} p={2}>
        <Text>Stock/Property No. Item No.</Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={2}>
        <Text>Unit</Text>
      </GridItem>
      <GridItem colSpan={4} border={"1px solid black"} p={2}>
        <Text>Description</Text>
      </GridItem>
      <GridItem colSpan={1} border={"1px solid black"} p={2}>
        <Text>Quantity</Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={2}>
        <Text>Unit Cost</Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={2}>
        <Text>Total Cost</Text>
      </GridItem>
    </>
  );
};

const TableRowData = (props) => {
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border={"1px solid black"}
        p={5}
        textAlign={"center"}
      >
        <Text>{props.value.id}</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        border={"1px solid black"}
        p={5}
        textAlign={"center"}
      >
        <Text>{props.value.unit}</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        border={"1px solid black"}
        p={5}
        textAlign={"center"}
      >
        <Text>{props.value.description}</Text>
      </GridItem>
      <GridItem
        colSpan={1}
        border={"1px solid black"}
        p={5}
        textAlign={"center"}
      >
        <Text>{props.value.qty} </Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={5} textAlign={"end"}>
        <Text>₱{props.value.unitCost} </Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={5} textAlign={"end"}>
        <Text>₱{props.value.totalCost}</Text>
      </GridItem>
    </>
  );
};

const TableGrandTotal = () => {
  return (
    <>
      <GridItem rowSpan={1} colSpan={10} border={"1px solid black"} p={5}>
        <Text fontWeight={"600"}>Grand Total:</Text>
      </GridItem>
      <GridItem colSpan={2} border={"1px solid black"} p={5} textAlign={"end"}>
        <Text>₱52500</Text>
      </GridItem>
      <GridItem rowSpan={1} colSpan={12} border={"1px solid black"} p={5}>
        <Text>
          Purpose: For network connectivity of Isolation Rooms at Bithing
          Building use.
        </Text>
      </GridItem>
    </>
  );
};

const PRViewBody = () => {
  return (
    <Box w={"100%"}>
      <Box w={"100%"} textAlign={"center"}>
        <Heading size={"md"} fontFamily={" Georgia, serif"}>
          PURCHASE REQUEST
        </Heading>
      </Box>
      <Box mt={10}>
        <Text fontSize={14} fontWeight={"400"} fontFamily={" Georgia, serif"}>
          Entity Name: ZAMBOANGA CITY MEDICAL CENTER
        </Text>
        <Grid
          templateRows={"repeat(12, 1fr)"}
          templateColumns="repeat(12, 1fr)"
        >
          <TableHeader />
          {PR_Data.map((value) => {
            return <TableRowData value={value} />;
          })}
          <TableGrandTotal />
        </Grid>
      </Box>
    </Box>
  );
};

const PurchaseRequestView = () => {
  return (
    <Box w={"100%"} h={"100vh"}>
      <Center>
        <Box w={"80%"} bg="white" p={10} fontFamily={" Georgia, serif"}>
          <PRViewHeader />
          <PRViewBody />
          <Grid
            border={"1px solid black"}
            templateRows={"repeat(2, 1fr)"}
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem rowSpan={1} colSpan={6} p={5} textAlign={"center"}>
              <Box>
                <Text fontSize={12}>
                  This is to certify that the items listed above are in Annual
                  Procurement Plan.
                </Text>
                <Text mt={5} fontWeight={"600"}>
                  ROWENA A. ABBILANI
                </Text>
                <Text fontSize={12}>
                  Supervising Administrative Officer-Procurement
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={6} p={5} textAlign={"center"}>
              <Text>Procurement Mode:______________</Text>
              <Text>Sol. No./RFQ No.:______________</Text>
              <Text>Procurement Date:______________</Text>
              <Text>Posting Date:______________</Text>
              <Text>Opening Date:______________</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2} p={5}>
              <Text>Signature:</Text>
              <Text>Printed Name:</Text>
              <Text>Designation:</Text>
              <Text>Date Signed:</Text>
            </GridItem>
            <GridItem colSpan={5} textAlign={"center"}>
              <Text fontSize={13} mt={5}>
                Requested by:
              </Text>
              <Text fontWeight={600} mt={5} textDecoration={"underline"}>
                BONGO, MARIECLAIRE CIRCULADO
              </Text>
            </GridItem>
            <GridItem colSpan={5} textAlign={"center"}>
              <Text fontSize={13} mt={5}>
                Approved by:
              </Text>
              <Text fontWeight={600} mt={5} textDecoration={"underline"}>
                AFDAL B. KUNTING, MD, MPH, FPCP
              </Text>
              <Text fontSize={12}>Medical Center Chief II</Text>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </Box>
  );
};

export default PurchaseRequestView;
