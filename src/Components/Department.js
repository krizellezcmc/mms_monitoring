import React, { useEffect, useState } from "react";
import localApi from "../API/localAPI";
import {
  Flex,
  Button,
  Heading,
  Spacer,
  Box,
  Link,
  Container,
  Table,
  TableContainer,
  Tr,
  Td,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import "../Styles/style.css";
import "../Styles/Table.css";
import NoDeptData from "./NoDeptData";
import moment from "moment";
import { BiChevronLeft, BiSearchAlt2 } from "react-icons/bi";

function Department(props) {
  const [options, setOptions] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [selected, setSelected] = useState("");

  const getList = async () => {
    let response = await localApi.get("/get_deptList.php");
    setOptions(response.data);
    console.log(response.data);
  };
  const selectedDept = async (e) => {
    let response = await localApi.get("/get_IssperDept.php", {
      params: { mscWarehouseDST: selected },
    });
    setDeptData(response.data);
  };

  useEffect(() => {
    getList();
    selectedDept();
  }, [selected]);
  return (
    <div>
      <Container maxW="container.xl" p={10} align="center">
        <Flex>
          <Button
            as={Link}
            colorScheme="teal"
            href="/po"
            _hover={{ textDecoration: "none" }}
            leftIcon={<BiChevronLeft fontSize={20} />}
          >
            Back to Dashboard
          </Button>
          <Spacer />
          <Heading size="lg" fontWeight={500}>
            Issued Stocks
          </Heading>
        </Flex>
        <Box align="right" mt={20}>
          <Box width={500} align="right">
            <Select
              options={options}
              placeholder="Select Category..."
              closeMenuOnSelect={true}
              onChange={(e) => {
                setSelected(e.value);
              }}
            />
          </Box>
        </Box>

        {!selected ? (
          <NoDeptData />
        ) : (
          <Box maxW={1500} mt={20}>
            <table style={{ width: "1000px" }} className="items-table">
              <tr>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>
                  Issue No
                </td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>
                  Item Code
                </td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>
                  Item Description
                </td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>
                  Issue Date
                </td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>Unit</td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>QTY</td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>Price</td>
              </tr>
              {deptData.map((j, k) => {
                return (
                  <>
                    <tr>
                      <td>{j.IssueNo}</td>
                      <td>{j.ItemCode}</td>
                      <td>{j.ItemDesc}</td>
                      <td>
                        {moment(j.DateIssued).format("MMMM DD, YYYY, h:mm A")}
                      </td>
                      <td>{j.Unit}</td>
                      <td>{j.QTY}</td>
                      <td>{j.Price}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default Department;