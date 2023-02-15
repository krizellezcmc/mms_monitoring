import { useTable, usePagination } from "react-table";
import {
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Flex,
  Box,
  TableContainer,
  Heading,
  Image,
  Skeleton,
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
  height,
  setID,
  isFetching,
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

  const handleSelectedRow = (e, row) => {
    e.preventDefault();
    if (title.includes("#")) {
      handleClick(row);
    }
  };

  return (
    <Box h={height === null ? "91vh" : height}>
      <Box w={"100%"}>
        <Flex
          justifyContent={"space-between"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Flex
            w={title.toLowerCase().includes("#") ? "100%" : null}
            alignItems={"center"}
            columnGap={[2, 2, 5, 5]}
            justifyContent={
              title.toLowerCase().includes("#") ? "space-between" : "start"
            }
          >
            {title.toLowerCase().includes("#") ? null : (
              <Heading size={["md", "md", "lg", "lg"]} color={"teal"}>
                {title}
              </Heading>
            )}

            {title.toLowerCase().includes("#") ? null : (
              <Search
                search={search}
                placeholder={`Search ${title}`}
                currsearch={setSearch}
              />
            )}
          </Flex>
          <Box>
            <Flex columnGap={3} justifyContent={"end"}>
              {title.toLowerCase().includes("#") ||
              handleClick === null ? null : (
                <NewRegistration title={title} handleClick={handleClick} />
              )}
              {child !== null ? child : null}
              {title.toLowerCase().includes("#") ? null : (
                <TableSelectionFilter
                  setPageSize={setPageSize}
                  pageSize={pageSize}
                />
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
      {page.length >= 1 && !isFetching ? (
        <TableContainer w={"100%"}>
          <Box bg="white">
            <Table
              mt={5}
              mb={5}
              bg={"white"}
              maxWidth={"100%"}
              className={"table"}
              variant="unstyled"
              boxShadow={"md"}
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
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      table={title}
                      handleClick={handleSelectedRow}
                      row={row}
                      pageIndex={pageIndex}
                      index={++index}
                      viewTask={handleView === null ? null : handleView}
                      editTask={handleEdit === null ? null : handleEdit}
                      deleteTask={handleDelete === null ? null : handleDelete}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </TableContainer>
      ) : isFetching ? (
        <TableContainer w={"100%"}>
          <Box bg="white">
            <Table
              mt={5}
              mb={5}
              bg={"white"}
              maxWidth={"100%"}
              className={"table"}
              variant="unstyled"
              boxShadow={"md"}
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
                <Tr>
                  {columns.map((_) => {
                    return (
                      <Td>
                        <Skeleton height={8} rounded={14} />
                      </Td>
                    );
                  })}
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </TableContainer>
      ) : (
        <Box w={"100%"} mt={"6rem"}>
          <Box w="100%" display="flex" justifyContent={"center"}>
            <Image src={require("../assets/logo/notfound.png")} />
          </Box>
          <Box w="100%" textAlign={"center"} p={2}>
            <Heading size="lg" color="gray">
              NO RECORD
            </Heading>
          </Box>
        </Box>
      )}
      {page.length >= 1 && !title.toLowerCase().includes("#") ? (
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
