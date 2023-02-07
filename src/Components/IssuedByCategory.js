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
  Spacer,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
import localApi from "../API/localAPI";
import { BiSearch } from "react-icons/bi";

function IssuedByCategory(props) {
  // const [options, setOptions] = useState([]);
  const [depts, setDepts] = useState([]);
  // const [selected, setSelected] = useState("");
  // const [label, setLabel] = useState("");
  // // const [total, setTotal] = useState([]);
  // const [category, setCategory] = useState("");
  // const [search, setSearch] = useState("");
  const [issued, setIssued] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsIssued, setItemsIssued] = useState([]);
  const [label, setLabel] = useState("");
  const {
    isOpen: isTotalOpen,
    onOpen: onTotalOpen,
    onClose: onTotalClose,
  } = useDisclosure();
  const {
    isOpen: isIssuedOpen,
    onOpen: onIssuedOpen,
    onClose: onIssuedClose,
  } = useDisclosure();
  const [search, setSearch] = useState("");
  // const getItemList = async () => {
  //   let response = await localApi.get("/get_itemList.php", {
  //     params: { category: props.id },
  //   });
  //   setOptions(response.data);
  //   setCategory(response.data[0].descrip);
  // };
  // const getTotalStocks = async (e) => {
  //   let response = await localApi.get("/get_TotalStocks.php", {
  //     params: { itemid: selected },
  //   });
  //   setTotal(response.data);

  //   let deptList = await localApi.get("/get_IssuedDeptList.php", {
  //     params: { itemid: selected },
  //   });
  //   setDepts(deptList.data);

  //   let issued = await localApi.get("/get_TotalIssued.php", {
  //     params: { itemid: selected },
  //   });
  //   setIssued(issued.data);

  //   console.log(issued.data);
  // };

  // const getTotal = async () => {
  //   let response = await localApi.get("/get_CatTotal.php");
  //   console.log(response.data);
  // };

  // let balance = total - issued;
  // let limit = total * 0.25;
  const getItems = async (cat) => {
    let response = await localApi.get("/get_ItemsbyCategory.php", {
      params: { itemCat: cat },
    });
    setItems(response.data);
  };

  const getIssuedItems = async (cat) => {
    let res = await localApi.get("/get_ItemsIssuedbyCat.php", {
      params: { itemCat: cat },
    });
    setItemsIssued(res.data);

    console.log(res.data);
  };
  useEffect(() => {
    const getList = async () => {
      let response = await localApi.get("/get_TotalbyCat.php");
      setDepts(response.data);
    };

    const getIssued = async () => {
      let response = await localApi.get("/get_TotalIssuedbyCat.php");
      setIssued(response.data);
    };

    getList();
    getIssued();

    // getTotal();

    // const loop = () => {
    //   let totals = 0;
    //   for (let i = 0; i < depts.length; i++) {
    //     totals = depts[i]["total"] - issued[i]["total"];

    //     console.log(totals);

    //     // setTotal((current) => [...current, totals]);
    //   }

    //   // console.log(totals);
    // };

    // loop();
  }, []);
  return (
    <div>
      <TableContainer mt={50} display="flex" w={1200}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="left" w={600}>
                Category
              </Th>
              <Th textAlign="center">Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {depts.map((j, k) => {
              return (
                <>
                  <Tr key={k}>
                    <Td fontWeight={500}> {j.desc}</Td>
                    <Td
                      textAlign="center"
                      width="200px"
                      _hover={{ background: "gray.100" }}
                    >
                      <Button
                        variant="link"
                        colorScheme="teal"
                        onClick={() => {
                          setLabel(j.desc);
                          getItems(j.value);
                          onTotalOpen();
                        }}
                      >
                        {Math.round(j.total).toLocaleString()}
                      </Button>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>

        <Table variant="simple" w={200}>
          <Thead>
            <Tr>
              <Th textAlign="center">Stocks Issued</Th>
            </Tr>
          </Thead>
          <Tbody>
            {issued.map((j, k) => {
              return (
                <>
                  <Tr _hover={{ background: "gray.100" }}>
                    <Td fontWeight={500} textAlign="center">
                      <Button
                        variant="link"
                        colorScheme="teal"
                        onClick={() => {
                          setLabel(j.desc);
                          getIssuedItems(j.value);
                          onIssuedOpen();
                        }}
                      >
                        {Math.round(j.total).toLocaleString()}
                      </Button>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
        <Table variant="simple" w={200}>
          <Thead>
            <Tr>
              <Th textAlign="center">Balance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {depts.map((j, k) => {
              return (
                <>
                  <Tr>
                    <Td fontWeight={500} textAlign="center">
                      {issued.total}
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        onClose={onTotalClose}
        isOpen={isTotalOpen}
        scrollBehavior="outside"
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {label}
            <Text fontSize={16} mt={10}>
              Total Stocks
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Input
                fontSize="13px"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search item/unit..."
                width="400px"
                _hover={{ borderColor: "green" }}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                  borderColor: "green",
                }}
              />
            </Center>

            <TableContainer w={1000} margin="auto" display="flex">
              <Table variant="striped" colorScheme="cyan" size="sm" mt={10}>
                <Thead>
                  <Tr fontSize={11} fontWeight={500}>
                    <Th width="200px" textAlign="center">
                      ITEM DESCRIPTION
                    </Th>
                    <Th textAlign="center">UNIT</Th>
                    <Th textAlign="center">QUANTITY</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.desc.toLowerCase().includes(search.toLowerCase()) ||
                        val.unit.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((j, k) => {
                      return (
                        <>
                          <Tr fontSize={11}>
                            <Td>{j.desc}</Td>
                            <Td textAlign="center">{j.unit}</Td>
                            <Td textAlign="center">{j.total}</Td>
                          </Tr>
                        </>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onTotalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        onClose={onIssuedClose}
        isOpen={isIssuedOpen}
        scrollBehavior="outside"
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {label}{" "}
            <Text fontSize={16} mt={10}>
              Issued Stocks
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              fontSize="13px"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search item/unit..."
              width="400px"
              _hover={{ borderColor: "green" }}
              _focus={{
                boxShadow: "none",
                outline: "none",
                borderColor: "green",
              }}
            />

            <TableContainer w={1000} margin="auto" display="flex">
              <Table variant="striped" colorScheme="cyan" size="sm" mt={10}>
                <Thead>
                  <Tr fontSize={11} fontWeight={500}>
                    <Th width="200px" textAlign="center">
                      ITEM DESCRIPTION
                    </Th>
                    <Th textAlign="center">UNIT</Th>
                    <Th textAlign="center">QUANTITY</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {itemsIssued
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.desc.toLowerCase().includes(search.toLowerCase()) ||
                        val.unit.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((j, k) => {
                      return (
                        <>
                          <Tr fontSize={11}>
                            <Td>{j.desc}</Td>
                            <Td textAlign="center">{j.unit}</Td>
                            <Td textAlign="center">{j.total}</Td>
                          </Tr>
                        </>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onIssuedClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IssuedByCategory;
