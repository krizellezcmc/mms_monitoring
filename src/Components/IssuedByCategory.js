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
} from "@chakra-ui/react";
import localApi from "../API/localAPI";

function IssuedByCategory(props) {
  const [depts, setDepts] = useState([]);
  const [issued, setIssued] = useState([]);

  const getList = async () => {
    let response = await localApi.get("/get_TotalbyCat.php");
    setDepts(response.data);
  };

  const getIssued = async () => {
    let response = await localApi.get("/get_TotalIssuedbyCat.php");
    setIssued(response.data);
  };

  // const loop = () => {
  //   let totals = [];
  //   depts.forEach((el, index) => {
  //     totals = parseInt(el.total) - parseInt(issued[index]["total"]);
  //     // setTotal((prevArray) => [...prevArray, totals]);
  //   });
  // };

  useEffect(() => {
    getList();
    getIssued();
    // getTotal();

    //   depts.forEach((el, index) => {
    //     // console.log(parseInt(el.total));
    //     console.log(parseInt(el.total) - parseInt(issued[index]["total"]));
    //   });
    //   // for (let i = 0; i <= depts.length; i++) {
    //   //   let totals = depts[i]["total"] - issued[i]["total"];
    //   //   // console.log(totals);
    //   //   setTotal((current) => [...current, totals]);
    //   // }

    // loop();
  }, []);
  return (
    <div>
      <TableContainer mt={50} display="flex" w={1200}>
        <Table variant="striped">
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
                    <Td fontWeight={500}>{j.desc}</Td>
                    <Td textAlign="center" width="200px">
                      {Math.round(j.total).toLocaleString()}
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>

        <Table variant="striped" w={200}>
          <Thead>
            <Tr>
              <Th textAlign="center">Stocks Issued</Th>
            </Tr>
          </Thead>
          <Tbody>
            {issued.map((j, k) => {
              return (
                <>
                  <Tr>
                    <Td fontWeight={500} textAlign="center">
                      {Math.round(j.total).toLocaleString()}
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
        <Table variant="striped" w={200}>
          <Thead>
            <Tr>
              <Th textAlign="center">Balance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {issued.map((el, index) => {
              let totals = [];

              totals = parseInt(depts[index]["total"]) - parseInt(el.total);
              return (
                <Tr>
                  <Td fontWeight={500} textAlign="center">
                    {totals < 0 ? 0 : totals.toLocaleString()}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IssuedByCategory;
