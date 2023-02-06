import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import localApi from "../API/localAPI";
import { BiSearch } from "react-icons/bi";
import moment from "moment";

function AllIssued(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    let response = await localApi.get("/get_AllIssuedStocks.php");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <Flex py={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch color="gray.300" />}
          />
          <Input
            fontSize="13px"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Issue No."
            width="400px"
            _hover={{ borderColor: "green" }}
            _focus={{
              boxShadow: "none",
              outline: "none",
              borderColor: "green",
            }}
          />
        </InputGroup>
      </Flex>

      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="cyan">
          <Thead>
            <Tr>
              <Th fontSize={11} width="100px">
                RIS # / Issue No
              </Th>
              <Th fontSize={11}>Dept</Th>
              <Th fontSize={11} width="200px">
                Item
              </Th>
              <Th fontSize={11}>Unit</Th>
              <Th fontSize={11}>Date Issued</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.Dept.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((j, k) => {
                return (
                  <>
                    <Tr>
                      {j.RIS === null ? (
                        <Td fontSize={11}>{j.IssueNo}</Td>
                      ) : (
                        <Td fontSize={11} width="100px">
                          {j.RIS}
                        </Td>
                      )}
                      <Td fontSize={11}>{j.Dept}</Td>
                      <Td fontSize={11}>{j.Item}</Td>
                      <Td fontSize={11}>{j.Unit}</Td>
                      <Td fontSize={11}>{moment(j.Date).format("LLL")}</Td>
                    </Tr>
                  </>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllIssued;
