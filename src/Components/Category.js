import {
  Box,
  Container,
  Table,
  TableContainer,
  Tr,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Select } from "chakra-react-select";
import localApi from "../API/localAPI";
import "../Styles/style.css";

function Category(props) {
  const [options, setOptions] = useState([]);

  const getList = async () => {
    let response = await localApi.get("/get_CategoryList.php");
    setOptions(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <Container maxW="container.xl" p={10} align="center">
        <Box width={500}>
          <Select options={options} placeholder="Select Category..." />
        </Box>

        <TableContainer mt={10}>
          <Table>
            <Tr textAlign="center">
              <Td
                textAlign="center"
                fontWeight={600}
                border="1px"
                borderColor="gray.500"
              >
                ITEM
              </Td>
              <Td
                textAlign="center"
                fontWeight={600}
                border="1px"
                borderColor="gray.500"
              >
                REQUESTED
              </Td>
              <Td
                textAlign="center"
                fontWeight={600}
                border="1px"
                borderColor="gray.500"
              >
                ISSUED
              </Td>
            </Tr>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Category;
