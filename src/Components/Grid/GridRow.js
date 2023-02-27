import {
  GridItem,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
} from "@chakra-ui/react";

const GridRow = (props) => {
  return (
    <>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={1}
        p={3}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={12} fontFamily={"Open Sans, sans-serif"}>
          {props.value.PK_iwItems}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        p={3}
        textAlign={"center"}
      >
        <Text fontSize={12} fontFamily={"Open Sans, sans-serif"}>
          {props.value.unit}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={4}
        p={3}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={12} fontFamily={"Open Sans, sans-serif"}>
          {props.value.description}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={1}
        p={3}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"center"}
      >
        <Text fontSize={13} fontFamily={"Open Sans, sans-serif"}>
          {props.value.quantity}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={2}
        p={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        textAlign={"end"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        className={"grid-cell-currency"}
      >
        <Text fontWeight={600} fontFamily={"Open Sans, sans-serif"}>
          ₱{props.value.price}
        </Text>
      </GridItem>
      <GridItem
        rowSpan={props.value.description.length > 50 ? 2 : 1}
        colSpan={2}
        pt={3}
        pb={3}
        pr={2}
        borderLeft={"1px solid black"}
        borderBottom={"1px solid black"}
        borderRight={"1px solid black"}
        textAlign={"end"}
      >
        <Text fontWeight={600} fontFamily={"Open Sans, sans-serif"}>
          ₱{props.value.total}
        </Text>
      </GridItem>
    </>
  );
};

export default GridRow;
