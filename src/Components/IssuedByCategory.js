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

function IssuedByCategory(props) {
  // const [options, setOptions] = useState([]);
  const [depts, setDepts] = useState([]);
  // const [selected, setSelected] = useState("");
  // const [label, setLabel] = useState("");
  // // const [total, setTotal] = useState([]);
  // const [category, setCategory] = useState("");
  // const [search, setSearch] = useState("");
  const [issued, setIssued] = useState([]);

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
    </div>
  );
}

export default IssuedByCategory;
