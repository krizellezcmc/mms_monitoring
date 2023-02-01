import { Select } from "@chakra-ui/react";

const TableSelectionFilter = (props) => {
  return (
    <Select
      w={32}
      mt={5}
      bg={"white"}
      size={"sm"}
      value={props.pageSize}
      focusBorderColor={"gray.400"}
      borderRadius={5}
      onChange={(e) => {
        props.setPageSize(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map((pageSize) => (
        <option fontSize={14} key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </Select>
  );
};

export default TableSelectionFilter;
