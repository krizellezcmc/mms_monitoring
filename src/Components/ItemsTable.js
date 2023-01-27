import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import localApi from "../API/localAPI";
import "../Styles/ItemsTable.css";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  TableContainer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import NoSelectedCat from "./NoSelectedCat";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function Table({ columns, data }) {
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

  // Render the UI for your table
  return (
    <>
      {data.length === 0 ? (
        <NoSelectedCat />
      ) : (
        <Center>
          <VStack>
            <TableContainer overflowX="auto">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps({
                            style: {
                              minWidth: column.minWidth,
                              width: column.width,
                            },
                          })}
                        >
                          <span>{column.render("Header")}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              <span>{cell.render("Cell")}</span>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableContainer>{" "}
            <Flex alignItems="center">
              <IconButton
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                icon={<RxDoubleArrowLeft />}
                fontSize={18}
                mr={1}
              />
              <IconButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                icon={<BiChevronLeft />}
                fontSize={22}
                mr={1}
              />
              <Text ml={5}>
                Page
                <b>
                  {" "}
                  {pageIndex + 1} of {pageOptions.length}{" "}
                </b>
              </Text>
              <Text ml={2}>
                | Go to page:
                <Input
                  ml={2}
                  size="sm"
                  type="number"
                  defaultValue={pageIndex}
                  value={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  style={{ width: "50px" }}
                />
              </Text>
              <Box mr={5} ml={3}>
                {" "}
                <select
                  style={{ padding: "6px", borderColor: "black solid 1px" }}
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </Box>
              <IconButton
                onClick={() => nextPage()}
                disabled={!canNextPage}
                icon={<BiChevronRight />}
                fontSize={22}
                mr={1}
              />
              <IconButton
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                icon={<RxDoubleArrowRight />}
                fontSize={18}
                mr={1}
              />
            </Flex>
          </VStack>
        </Center>
      )}
    </>
  );
}

function ItemsTable() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Item ID",
        accessor: "itemId",
        maxWidth: 100,
        minWidth: 100,
        width: 100,
      },
      {
        Header: "Unit",
        accessor: "unit",
        maxWidth: 100,
        minWidth: 100,
        width: 100,
      },
      {
        Header: "Description",
        accessor: "itemdesc",
        maxWidth: 600,
        minWidth: 600,
        width: 600,
      },
      {
        Header: "Quantity",
        accessor: "qty",
        maxWidth: 30,
        minWidth: 30,
        width: 30,
      },
    ],
    []
  );

  const getList = async () => {
    let response = await localApi.get("/get_CategoryList.php");
    setOptions(response.data);
  };

  const select = async (e) => {
    let res = await localApi.get("/get_byCategory.php", {
      params: { category: e },
    });

    setData(res.data);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Box align="right" mt={20}>
        <Box w={500}>
          <Select
            id="category"
            name="category"
            options={options}
            placeholder="Select Category"
            onChange={(e) => {
              select(e.value);
            }}
          />
        </Box>
      </Box>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </>
  );
}

export default ItemsTable;
