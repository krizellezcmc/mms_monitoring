import { GridItem, Text } from "@chakra-ui/react";

const GridHeader = () => {
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={3}
        p={4}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderTop={"1px solid black"}
      >
        <Text fontSize={12}>Office/Section: Engr and Facility Management</Text>
      </GridItem>
      <GridItem
        colSpan={5}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderTop={"1px solid black"}
        p={4}
        fontSize={12}
      >
        <Text>PR NO: 22-08-0917</Text>
        <Text mt={3}>Responsibility Center Code:</Text>
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
        p={4}
        fontSize={12}
      >
        {/* --chakra-lineHeights-base */}
        <Text>Stock/Property</Text>
        <Text mt={3}>No. Item No.</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={14}>Unit</Text>
      </GridItem>
      <GridItem
        colSpan={4}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={14}>Description</Text>
      </GridItem>
      <GridItem
        colSpan={1}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={14}>Quantity</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={14}>Unit Cost</Text>
      </GridItem>
      <GridItem
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={14}>Total Cost</Text>
      </GridItem>
    </>
  );
};

export default GridHeader;
