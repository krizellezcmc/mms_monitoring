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
import { useState } from "react";
import { PR_Data } from "../Data/PR_DataSet";
import { useLocation } from "react-router-dom";
import "../Style/Table.css";

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
            <Text fontSize={11} fontWeight={"400"}>
              Republic of the Philippines
            </Text>
            <Text fontSize={11} fontWeight={"400"}>
              Department of Health
            </Text>
            <Text fontSize={12} fontWeight={"400"}>
              ZAMBOANGA CITY MEDICAL CENTER
            </Text>
            <Text fontSize={11} fontWeight={"400"}>
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
      <GridItem
        rowSpan={1}
        colSpan={3}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderTop={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Office/Section: Engr and Facility Management</Text>
      </GridItem>
      <GridItem
        colSpan={5}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderTop={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>PR NO: 22-08-0917</Text>
        <Text fontSize={12}>Responsibility Center Code:</Text>
      </GridItem>
      <GridItem colSpan={4} border={"1px solid black"} p={2}>
        <Text fontSize={12}>Date:</Text>
      </GridItem>
      {/* END TOP HEADER HERE */}
      <GridItem
        rowSpan={1}
        colSpan={1}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
      >
        {/* --chakra-lineHeights-base */}
        <Text fontSize={12}>Stock/Property No. Item No.</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Unit</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Description</Text>
      </GridItem>
      <GridItem
        colSpan={1}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Quantity</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Unit Cost</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        p={2}
      >
        <Text fontSize={12}>Total Cost</Text>
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
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={12}>{props.value.id}</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={2}
        textAlign={"center"}
      >
        <Text fontSize={12}>{props.value.unit}</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={12}>{props.value.description}</Text>
      </GridItem>
      <GridItem
        colSpan={1}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={12}>{props.value.qty} </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"end"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        className={"grid-cell-currency"}
      >
        <Text>₱{props.value.unitCost} </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        textAlign={"end"}
      >
        <Text
          fontFamily={"Open Sans, sans-serif"}
          fontWeight={"bold"}
          fontSize={12}
        >
          ₱{props.value.totalCost}
        </Text>
      </GridItem>
    </>
  );
};

const TableGrandTotal = () => {
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={10}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={5}
      >
        <Text
          fontFamily={"Open Sans, sans-serif"}
          fontSize="18"
          fontWeight={"bold"}
        >
          Grand Total:
        </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        p={5}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        textAlign={"end"}
      >
        <Text fontFamily={"Open Sans, sans-serif"} fontWeight="bold">
          ₱52500
        </Text>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={12}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        p={5}
      >
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
        <Heading size={"sm"} fontFamily={" Georgia, serif"}>
          PURCHASE REQUEST
        </Heading>
      </Box>
      <Box mt={5}>
        <Text fontSize={12} fontWeight={"400"} fontFamily={"Georgia, serif"}>
          Entity Name: ZAMBOANGA CITY MEDICAL CENTER
        </Text>
        <Grid
          templateRows={"repeat(12, 1fr)"}
          templateColumns="repeat(12, 1fr)"
          lineHeight={"0.5"}
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
        textAlign={"center"}
        display="flex"
        flexDirection="column"
        justifyContent="start"
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

const PurchaseRequestView = () => {
  const location = useLocation();

  const [pr, setPr] = useState(location.state);

  console.log(location.state);

  return (
    <Box w={"100%"} h={"100vh"}>
      <Center>
        <Box w={"70%"} bg="white" p={10} fontFamily={"Georgia, serif"}>
          <PRViewHeader />
          <PRViewBody />
          <PRViewDetails />
        </Box>
      </Center>
    </Box>
  );
};

export default PurchaseRequestView;
