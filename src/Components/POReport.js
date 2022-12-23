import {
  Box,
  Container,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function POReport(props) {
  return (
    <>
      <Container
        maxW="container.lg"
        bgColor="white"
        p={7}
        borderRadius={8}
        boxShadow="md"
        fontSize={16}
        mt={10}
      >
        {/* CONTENT  */}
        <TableContainer>
          <Table colorScheme="black" variant="simple" size="2xl">
            <Tr>
              <Td colSpan={5} borderBottom={0}>
                <Text>
                  Supplier: <b>Supplier name here Supplier name here</b>
                </Text>
              </Td>
              <Td borderBottom={0}>
                P.O No. : <br /> P.O Date:
              </Td>
              <Td textAlign="right" borderBottom={0}>
                <b>00000</b>
                <br />
                MM/DD/YYY
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={5} borderBottom={0}>
                <Text>
                  Address: <b>Zamboanga City</b>
                </Text>
              </Td>
              <Td borderBottom={0}>
                P.R No.: <br /> CAF No.:
              </Td>
              <Td textAlign="right" borderBottom={0}>
                00000
                <br />
                MM/DD/YYY
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={5} borderBottom={0}>
                <Text>
                  TIN: <b>000-000-00</b>
                </Text>
              </Td>
              <Td borderBottom={0}>Mode of Procurement:</Td>
              <Td textAlign="right" borderBottom={0}>
                Direct Contracting
              </Td>
            </Tr>

            <Tr>
              <Td colSpan={5} borderBottom={0}>
                <Text>Place of delivery: </Text> <Text>Date of delivery: </Text>
              </Td>
              <Td borderBottom={0} colSpan={4}>
                <Text>
                  Delivery Term: <b>30 days term</b>
                </Text>{" "}
                <Text pr={20}>Payment Term: &nbsp;</Text>
              </Td>
            </Tr>
          </Table>
        </TableContainer>
        <TableContainer my={2}>
          {/* <Text fontWeight={600}>Item List</Text> */}
          <Table
            bgColor="white"
            colorScheme="black"
            variant="simple"
            size="sm"
            mt={3}
          >
            <Tr>
              <Th border="1px">Item ID</Th>
              <Th border="1px">Unit</Th>
              <Th border="1px" w="40%">
                Description
              </Th>
              <Th border="1px">Quantity</Th>
              <Th border="1px">Unit Cost</Th>
              <Th border="1px" w="20%">
                Amount
              </Th>
            </Tr>
            <Tr border="1px">
              <Td border="1px">Item ID</Td>
              <Td border="1px">Unit</Td>
              <Td border="1px" w="40%">
                Description
              </Td>
              <Td border="1px">Quantity</Td>
              <Td border="1px">Unit Cost</Td>
              <Td border="1px"> 00, 00000</Td>
            </Tr>
            {/* END ITEM LIST HERE */}
            <Tr>
              <Td border="1px"></Td>
              <Td border="1px"></Td>
              <Td border="1px" w="40%" py={0}>
                x-x-x-x-x-x-x-x-x-x-x-x-x-x-x -x-x-x-x-x-x-x
              </Td>
              <Td border="1px"></Td>
              <Td border="1px"></Td>
              <Td border="1px" colSpan={1} fontWeight={700}>
                Php 00, 00000
              </Td>
            </Tr>
            <Tr>
              <Td border="1px" colSpan={6}>
                &nbsp;
              </Td>
            </Tr>
            <Tr>
              <Td border="1px" colSpan={6} fontWeight={700}>
                For OPD Heart Clinic use
              </Td>
            </Tr>
            <Tr>
              <Td border="1px" colSpan={2} py={2}>
                Total Amount in Words:
              </Td>
              <Td
                border="1px"
                textTransform="uppercase"
                textAlign="center"
                colSpan={4}
                fontWeight={700}
              >
                EIGHT HUNDRED PESOS ONLY
              </Td>
            </Tr>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default POReport;
