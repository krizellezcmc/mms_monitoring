import { GridItem, Text } from "@chakra-ui/react";

const GridGrandTotal = () => {
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={10}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={5}
        fontSize="14"
      >
        <Text fontFamily={"Open Sans, sans-serif"} fontWeight={"bold"}>
          Grand Total:
        </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        pt={5}
        pb={5}
        pr={1}
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

export default GridGrandTotal;
