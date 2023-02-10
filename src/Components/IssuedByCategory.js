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
  Input,
  Center,
  Box,
  Spinner,
} from "@chakra-ui/react";
import localApi from "../API/localAPI";
import { Select } from "chakra-react-select";

function IssuedByCategory(props) {
  const [categories, setCategories] = useState([]);
  const [year, setYear] = useState([]);
  const [search, setSearch] = useState("2022");
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    let response = await localApi.get("/get_IssTotalperCat.php");
    setCategories(response.data);
    setLoading(false);

    let year = await localApi.get("/get_year.php");
    setYear(year.data);
  };

  useEffect(() => {
    getList();
  }, [search]);
  return (
    <div>
      <Box align="right">
        <Box w={200}>
          <Select
            defaultValue={search}
            options={year}
            selectedOptionStyle="check"
            onChange={(e) => {
              setSearch(e.value);
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
              <Th textAlign="center">Total</Th>
              <Th textAlign="center">Issued</Th>
              <Th textAlign="center">Balance</Th>
              <Th>Year</Th>
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
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (search === val.year) {
                    return val;
                  }
                })
                .map((j, k) => {
                  return (
                    <>
                      <Tr key={k}>
                        <Td fontWeight={500}> {j.desc}</Td>
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
                        <Td>{j.year}</Td>
                      </Tr>
                    </>
                  );
                })
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IssuedByCategory;
