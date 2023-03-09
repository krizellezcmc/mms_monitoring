import React, { useEffect, useState } from "react";
import {
  Table,
  Tr,
  Td,
  Th,
  TableContainer,
  Thead,
  Tbody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Spinner,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import localApi from "../API/localAPI";
import { Select } from "chakra-react-select";
import { SearchIcon } from "@chakra-ui/icons";
import { act } from "react-dom/test-utils";

function IssuedByCategory(props) {
  const [items, setItems] = useState([]);
  const [year, setYear] = useState([]);
  const [label, setLabel] = useState("");
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("2022");
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);

  const getList = async (inYear) => {
    setLoading(true);

    let response = await localApi.get("/get_IssTotalperCat.php", {
      params: { curYear: inYear },
    });

    setCategories(response.data);

    setLoading(false);
  };

  const getYear = async () => {
    let year = await localApi.get("/get_year.php");
    setYear(year.data);
  };

  const getItems = async (cat) => {
    setLoading(true);

    let response = await localApi.get("/get_stocksIssued.php", {
      params: { itemCat: cat },
    });

    setItems(response.data);

    console.log(response.data);
    setLoading(false);

    let year = await localApi.get("/get_year.php");
    setYear(year.data);
  };

  let sum = 0;

  useEffect(() => {
    getYear();
  }, [search]);
  return (
    <div>
      <Box align="right">
        <Box w={200}>
          <Select
            variant="simple"
            options={year}
            selectedOptionStyle="check"
            onChange={(e) => {
              getList(e.value);
            }}
          />
        </Box>
      </Box>
      <TableContainer mt={50} display="flex" w={1200}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th textAlign="left" w={600}>
                Category
              </Th>
              <Th textAlign="center">Total Deliveries</Th>
              <Th textAlign="center">Issued</Th>
              <Th textAlign="center">Balance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Tr>
                <Td colSpan="4" textAlign="center" py={5}>
                  <Spinner size="lg" colorScheme="teal" />
                </Td>
              </Tr>
            ) : categories.length === 0 ? (
              ""
            ) : (
              categories
                // .filter((val) => {
                //   if (select === "") {
                //     return val;
                //   } else if (select === val.year) {
                //     return val;
                //   }
                // })
                .map((j, k) => {
                  return (
                    <>
                      <Tr key={k}>
                        <Td fontWeight={500}>
                          <Button
                            variant="link"
                            colorScheme="teal"
                            onClick={() => {
                              setLabel(j.desc);
                              getItems(j.value);
                              onOpen();
                            }}
                          >
                            {j.desc}
                          </Button>
                        </Td>
                        <Td textAlign="center" width="200px">
                          {Math.round(j.total).toLocaleString()}
                        </Td>
                        <Td textAlign="center" width="200px">
                          {Math.round(j.issued).toLocaleString()}
                        </Td>
                        <Td textAlign="center" width="200px">
                          {j.balance < 0
                            ? "0"
                            : Math.round(j.balance).toLocaleString()}
                        </Td>
                      </Tr>
                    </>
                  );
                })
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize={25} textTransform="uppercase">
              {label}
            </Text>
            <Text fontSize={16} textTransform="uppercase" fontWeight={400}>
              Issued Items
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box align="left" display="flex">
              <Box mr={2} w={400}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Search item"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </InputGroup>
              </Box>
              <Box w={300}>
                <Select
                  variant="simple"
                  defaultValue={select}
                  options={year}
                  selectedOptionStyle="check"
                  onChange={(e) => {
                    setSelect(e.value);
                  }}
                />
              </Box>
            </Box>

            <TableContainer w="100%" margin="auto" display="flex">
              <Table variant="striped" mt={5} w="100%">
                <Thead>
                  <Tr fontWeight={500}>
                    <Th width="20px"></Th>
                    <Th width="70%" textAlign="left">
                      ITEM DESCRIPTION
                    </Th>
                    <Th>Unit</Th>
                    <Th textAlign="center">TOTAL STOCKS</Th>
                    <Th textAlign="center">ISSUED</Th>
                    {/* <Th textAlign="center">DATE ISSUED</Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  {loading ? (
                    <Tr>
                      <Td colSpan="4" textAlign="center" py={5}>
                        <Spinner size="lg" colorScheme="teal" />
                      </Td>
                    </Tr>
                  ) : items.length === 0 ? (
                    ""
                  ) : (
                    items
                      .filter((val) => {
                        if (select === "") {
                          return val;
                        } else if (
                          select === val.date &&
                          val.desc.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((j, k) => {
                        return (
                          <>
                            <Tr fontSize={13.5}>
                              <Td>{k + 1}</Td>
                              <Td>{j.desc}</Td>
                              <Td>{j.unit}</Td>
                              <Td textAlign="center">
                                {Math.round(j.stocks).toLocaleString()}
                              </Td>
                              <Td textAlign="center">
                                {Math.round(j.issued).toLocaleString()}
                              </Td>{" "}
                              {/* <Td textAlign="center">
                                {j.date === null ? "--" : j.date}
                              </Td> */}
                            </Tr>
                          </>
                        );
                      })
                  )}

                  {items
                    .filter((val) => {
                      if (select === "") {
                        return val;
                      } else if (
                        select === val.date &&
                        val.desc.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .reduce(
                      (a, v) => (
                        <Tr>
                          <Td colSpan={5} textAlign="right">
                            <Box display="flex" justifyContent="right">
                              TOTAL ISSUED:{" "}
                              <Text mx={7} fontWeight={600} fontSize={16}>
                                {(sum += parseInt(v.issued)).toLocaleString()}
                              </Text>
                            </Box>
                          </Td>
                        </Tr>
                      ),
                      ""
                    )}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IssuedByCategory;
