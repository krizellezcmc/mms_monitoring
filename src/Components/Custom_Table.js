import { useTable, usePagination } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Flex,
  Text,
  Box,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import Search from "./Search";
import "../Style/Table.css";
import TableRow from "./Table/TableRow";
import TableFooter from "./Table/TableFooter";
import TableSelectionFilter from "./Table/TableSelectionFilter";
import NewRegistration from "./Table/NewRegistration";

const CustomTable = ({
  title,
  columns,
  data,
  fetch,
  search,
  setSearch,
  handleClick,
  handleView,
  handleEdit,
  handleDelete,
  child,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <Box h="91vh">
      <Box w={"100%"}>
        <Flex
          justifyContent={"space-between"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Flex alignItems={"center"} columnGap={5}>
            <Heading size="lg" color={"teal"}>
              {title}
            </Heading>
            <Search
              search={search}
              placeholder={`Search ${title}`}
              currsearch={setSearch}
            />
          </Flex>
          <Box>
            <Flex columnGap={3} justifyContent={"end"}>
              <NewRegistration title={title} handleClick={handleClick} />
              {child !== null ? child : null}
              <TableSelectionFilter
                setPageSize={setPageSize}
                pageSize={pageSize}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <TableContainer w={"100%"}>
        <Table
          mt={5}
          mb={5}
          bg={"white"}
          maxWidth={"100%"}
          className={"table"}
          variant="unstyled"
          boxShadow={"2xl"}
          overflow="hidden"
          size={"sm"}
          {...getTableProps()}
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr
                h={"4rem"}
                fontSize={15}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <Th
                    bg={"white"}
                    color={"gray.600"}
                    fontSize={15}
                    border={"white"}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.length >= 1 ? (
              page.map((row, index) => {
                prepareRow(row);
                return (
                  <TableRow
                    row={row}
                    pageIndex={pageIndex}
                    index={++index}
                    handleView={handleView}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <Text>NO RECORD</Text>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      {page.length >= 1 ? (
        <TableFooter
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          pageIndex={pageIndex + 1}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default CustomTable;
