import {
  Box,
  Container,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../API/localAPI";
import NoData from "./NoData";
import moment from "moment";
import "../Style/Table.css";

const POReport = (props) => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [supplier, setSupplier] = useState("");
  const [PONo, setPONO] = useState("");
  const [PRNo, setPRNo] = useState("");
  const [PODate, setPODate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [prAddress, setPrAddress] = useState("");
  const [tinNo, setTinNo] = useState("");
  const [caf, setCaf] = useState("");
  const [mode, setMode] = useState("");
  const [term, setTerm] = useState("");
  let total = 0.0;
  const getDetails = async () => {
    let response = await api.get("/get_PODetails.php", {
      params: { PONo: props.PONo },
    });

    if (response) {
      let res = response.data;

      setData(res);
      setItems(res.items);
      setSupplier(res.supplier);
      setPONO(res.PONo);
      setPRNo(res.PRNo);
      setPODate(res.PODate);
      setRemarks(res.remarks);
      setPrAddress(res.prAddress);
      setTinNo(res.tinNo);
      setCaf(res.caf);
      setMode(res.mode);
      setTerm(res.term);
    }
  };

  useEffect(() => {
    getDetails();
  }, [props.PONo]);

  return (
    <>
      {data.supplier === "" ? (
        <NoData />
      ) : (
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
                    Supplier: <b>{supplier}</b>
                  </Text>
                </Td>
                <Td borderBottom={0}>
                  P.O No. : <br /> P.O Date:
                </Td>
                <Td textAlign="right" borderBottom={0}>
                  <b>{PONo}</b>
                  <br />
                  {moment(PODate).format("ll")}
                </Td>
              </Tr>
              <Tr>
                <Td colSpan={5} borderBottom={0}>
                  <Text>
                    Address: <b>{prAddress}</b>
                  </Text>
                </Td>
                <Td borderBottom={0}>
                  P.R No.: <br /> CAF No.:
                </Td>
                <Td textAlign="right" borderBottom={0}>
                  {PRNo}
                  <br />
                  {caf}
                </Td>
              </Tr>
              <Tr>
                <Td colSpan={5} borderBottom={0}>
                  <Text>
                    TIN: <b>{tinNo}</b>
                  </Text>
                </Td>
                <Td borderBottom={0}>Mode of Procurement:</Td>
                <Td textAlign="right" borderBottom={0}>
                  Direct Contracting
                </Td>
              </Tr>

              <Tr>
                <Td colSpan={5} borderBottom={0}>
                  <Text>Place of delivery: </Text>
                  <Text>Date of delivery: </Text>
                </Td>
                <Td borderBottom={0} colSpan={4}>
                  <Text>
                    Delivery Term: <b>{term}</b>
                  </Text>
                  <Text pr={20}>Payment Term: &nbsp;</Text>
                </Td>
              </Tr>
            </Table>
          </TableContainer>

          {/* <Text fontWeight={600}>Item List</Text> */}
          <Box mt={5}>
            <table className="items-table">
              <tr>
                <th border="1px" width="10%">
                  Item ID
                </th>
                <th border="1px" width="7%">
                  Unit
                </th>
                <th border="1px" width="50%">
                  Description
                </th>
                <th border="1px" width="10%">
                  Quantity
                </th>
                <th border="1px" width="10%">
                  Unit Cost
                </th>
                <th border="1px" w="13%">
                  Amount
                </th>
              </tr>
              {items.map((el) => {
                return (
                  <>
                    <tr border="1px">
                      <td border="1px">{el.itemId}</td>
                      <td border="1px">{el.unit}</td>
                      <td border="1px">
                        <span>{el.itemDesc + " " + el.itemSpec}</span>
                      </td>
                      <td border="1px" align="right">
                        {(Math.round(el.qty * 100) / 100).toFixed(2)}
                      </td>
                      <td border="1px" align="right">
                        {(Math.round(el.price * 100) / 100).toFixed(2)}
                      </td>
                      <td border="1px" align="right">
                        {(Math.round(el.amount * 100) / 100).toFixed(2)}
                      </td>
                    </tr>
                  </>
                );
              })}

              {/* END ITEM LIST HERE */}
              <tr>
                <td border="1px"></td>
                <td border="1px"></td>
                <td border="1px" w="40%">
                  x-x-x-x-x-x-x-x-x-x-x-x-x-x-x -x-x-x-x-x-x-x
                </td>
                <td border="1px"></td>
                <td border="1px"></td>
                <td border="1px" colSpan={1} fontWeight={700} align="right">
                  {items.map((el) => {
                    total += parseFloat(el.amount);
                  })}
                  <b>{total}</b>
                </td>
              </tr>
              <tr>
                <td border="1px" colSpan={6}>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td border="1px" colSpan={6} fontWeight={700}>
                  <b>{remarks}</b>
                </td>
              </tr>
              <tr>
                <td border="1px" colSpan={2} py={2}>
                  Total Amount in Words:
                </td>
                <td
                  border="1px"
                  texttransform="uppercase"
                  textAlign="center"
                  colSpan={4}
                  fontWeight={700}
                >
                  EIGHT HUNDRED PESOS ONLY
                </td>
              </tr>
            </table>
          </Box>
        </Container>
      )}
    </>
  );
};

export default POReport;
