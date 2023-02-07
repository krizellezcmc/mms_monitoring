import React, { useEffect, useState } from "react";
import { Select } from "chakra-react-select";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Table,
  Tr,
  Td,
  Th,
  TableContainer,
  Thead,
  Tbody,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Badge,
  Icon,
} from "@chakra-ui/react";
import localApi from "../API/localAPI";
import NoSelectedItem from "./NoSelectedItem";
import { BiSearch } from "react-icons/bi";
import { BsArrowDown, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import moment from "moment";

function IssuanceItem(props) {
  const [options, setOptions] = useState([]);
  const [depts, setDepts] = useState([]);
  const [selected, setSelected] = useState("");
  const [label, setLabel] = useState("");
  const [total, setTotal] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [issued, setIssued] = useState("");

  const getItemList = async () => {
    let response = await localApi.get("/get_itemList.php", {
      params: { category: props.id },
    });
    setOptions(response.data);
    setCategory(response.data[0].descrip);
  };
  const getTotalStocks = async (e) => {
    let response = await localApi.get("/get_TotalStocks.php", {
      params: { itemid: selected },
    });
    setTotal(response.data);

    let deptList = await localApi.get("/get_IssuedDeptList.php", {
      params: { itemid: selected },
    });
    setDepts(deptList.data);

    let issued = await localApi.get("/get_TotalIssued.php", {
      params: { itemid: selected },
    });
    setIssued(issued.data);
  };

  let balance = total - issued;
  let limit = total * 0.25;

  useEffect(() => {
    getItemList();
    getTotalStocks();
  }, [selected]);
  return (
    <div>
      <Flex mt={10}>
        <Spacer />
        <Text fontWeight="bold" fontSize="24px">
          {category}
        </Text>
      </Flex>
      <Box align="right" mt={10}>
        <Box width={500} align="right">
          <Select
            options={options}
            placeholder="Select Item..."
            closeMenuOnSelect={true}
            selectedOptionStyle="color"
            selectedOptionColor="teal"
            focusBorderColor="green.500"
            onChange={(e) => {
              setSelected(e.value);
              setLabel(e.label);
            }}
          />
        </Box>
      </Box>

      {!selected ? (
        <>
          <NoSelectedItem />
        </>
      ) : (
        <>
          <Flex pt={5}>
            <Text>Item Description : &nbsp; </Text>
            <Box width="50%">
              <Text fontWeight="bold">{label}</Text>
            </Box>

            <Spacer />
            <Text>Total Stocks: &nbsp;</Text>
            <Text fontWeight="bold">
              {" "}
              {(Math.round(total * 100) / 100).toFixed(2)}
            </Text>
          </Flex>

          <Flex pb={5}>
            <Text>Stock Balance:&nbsp; </Text>
            <Text fontWeight="bold">
              {balance <= limit ? (
                <>
                  <Box display="flex" alignItems="center">
                    <Badge variant="solid" colorScheme="red">
                      {balance}
                    </Badge>
                    <Icon as={BsArrowDownShort} boxSize={6} color="red" />
                  </Box>
                </>
              ) : (
                <>
                  <Box display="flex" alignItems="center">
                    <Badge variant="solid" colorScheme="green">
                      {balance}
                    </Badge>
                    <Icon as={BsArrowUpShort} boxSize={6} color="green" />
                  </Box>
                </>
              )}
            </Text>
            <Spacer />
            <Text>Total Issued: &nbsp;</Text>
            <Text fontWeight="bold">
              {" "}
              {(Math.round(issued * 100) / 100).toFixed(2)}
            </Text>
          </Flex>

          {depts.length === 0 ? (
            <TableContainer>
              <Table variant="striped" colorScheme="green">
                <Text textAlign="center" fontStyle="italic">
                  ----No Issued Departments----
                </Text>
              </Table>
            </TableContainer>
          ) : (
            <>
              <Flex mt={5}>
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
                <Spacer />
              </Flex>
              <TableContainer mt={30}>
                <Table
                  variant="striped"
                  colorScheme={balance <= limit ? "red" : "green"}
                >
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Department</Th>
                      <Th textAlign="center">Date Issued</Th>
                      <Th textAlign="center">Stocks Issued</Th>
                      <Th textAlign="center">Unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {depts
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
                              <Td fontWeight={500}>{j.Dept}</Td>
                              <Td textAlign="center">
                                {" "}
                                {moment(j.Date).format(
                                  "MMMM DD, YYYY, hh:mm A"
                                )}
                              </Td>
                              <Td textAlign="center">
                                {" "}
                                {(Math.round(j.Total * 100) / 100).toFixed(1)}
                              </Td>
                              <Td textAlign="center">{j.Unit}</Td>
                            </Tr>
                          </>
                        );
                      })}
                  </Tbody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default IssuanceItem;
