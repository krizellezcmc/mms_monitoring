import {
  Box,
  Wrap,
  WrapItem,
  Flex,
  Spacer,
  Button,
  Link,
  Center,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import SideDrawer from "../Components/SideDrawer";
import TotalTile from "../Components/TotalTile";
import "../Styles/style.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import localApi from "../API/localAPI";
import {
  BsArrowRightShort,
  BsFillCalendar2CheckFill,
  BsFillCalendar2Fill,
  BsFillCalendar2RangeFill,
  BsBox,
  BsPaperclip,
} from "react-icons/bs";
import BarChart from "../Components/Charts/BarChart";
import { ChevronDownIcon } from "@chakra-ui/icons";

function PurchaseOrder(props) {
  const [year, setYear] = useState(moment().format("YYYY"));
  const [month, setMonth] = useState(moment().format("MMMM"));
  const [totalYear, setTotalYear] = useState("");
  const [totalMonth, setTotalMonth] = useState("");
  const [totalNS, setTotalNS] = useState("");
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState("");
  // const [supplier, setSupplier] = useState([]);

  const fetchTotal = async () => {
    let responseYear = await localApi.get("/get_TotalperYear.php");
    setTotalYear(responseYear.data);

    let responseMonth = await localApi.get("/get_TotalperMonth.php");
    setTotalMonth(responseMonth.data);

    let responseNS = await localApi.get("/get_TotalNSperMonth.php");
    setTotalNS(responseNS.data);
  };

  const getCategory = async () => {
    let response = await localApi.get("/get_IssueCategoryList.php");
    setCategory(response.data);
  };

  useEffect(() => {
    fetchTotal();
    getCategory();

    console.log(selected);
  }, [selected]);

  return (
    <div>
      <Flex p={5}>
        <SideDrawer />
        <Spacer />{" "}
        <Button
          as={Link}
          href="po-report"
          colorScheme="teal"
          mr={2}
          _hover={{ textDecoration: "none" }}
        >
          Search Purchase Order &nbsp;
          <BsArrowRightShort fontSize={20} />
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            variant="solid"
            colorScheme="teal"
          >
            Reports
          </MenuButton>
          <MenuList>
            <MenuGroup title="Issued">
              <MenuItem
                as={Link}
                href="/report/daily-distribution"
                _hover={{ textDecoration: "none" }}
              >
                Daily Report
              </MenuItem>
              <MenuItem
                as={Link}
                href="/report/monthly-distribution"
                _hover={{ textDecoration: "none" }}
              >
                Monthly Distribution
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Others">
              <MenuItem
                as={Link}
                href="/report/bin-card"
                _hover={{ textDecoration: "none" }}
              >
                Bin Card
              </MenuItem>
              <MenuItem
                as={Link}
                href="/report/direct-purchase"
                _hover={{ textDecoration: "none" }}
              >
                Direct Purchase
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            variant="solid"
            colorScheme="teal"
          >
            Items Issued
          </MenuButton>

          <MenuList>
            <MenuGroup title="Choose Category">
              {category.map((j, k) => {
                return (
                  <>
                    <MenuItem
                      as={Link}
                      href={`/issuanceitem/${selected}`}
                      _hover={{ textDecoration: "none" }}
                      fontSize="13px"
                      target="_blank"
                      onClick={() => {
                        setSelected(j.value);
                        // console.log(j.value);
                      }}
                    >
                      {j.label}
                    </MenuItem>
                  </>
                );
              })}
            </MenuGroup>
          </MenuList>
        </Menu>
        <Button
          as={Link}
          href="po/items"
          colorScheme="teal"
          variant="outline"
          mr={2}
          _hover={{
            textDecoration: "none",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          Item Category &nbsp;
          <BsBox fontSize={15} />
        </Button>
        <Button
          as={Link}
          href="dept"
          colorScheme="teal"
          variant="outline"
          mr={2}
          _hover={{
            textDecoration: "none",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          Stocks Issuance &nbsp;
          <BsBox fontSize={15} />
        </Button>
      </Flex>
      <Wrap justify="center" spacing="30px" p={5}>
        <WrapItem>
          <TotalTile
            label="Total PO"
            topLabel={year}
            total={totalYear}
            icon={BsFillCalendar2CheckFill}
          />
        </WrapItem>
        <WrapItem>
          <TotalTile
            label="Total PO"
            topLabel={month}
            total={totalMonth}
            icon={BsFillCalendar2Fill}
          />
        </WrapItem>
        <WrapItem>
          <TotalTile
            label="Not Served"
            topLabel={month}
            total={totalNS}
            icon={BsFillCalendar2RangeFill}
          />
        </WrapItem>
      </Wrap>
      <Center p={5} display={{ sm: "block", lg: "flex" }}>
        <Box boxShadow="md" p={10} borderRadius={20} bgColor="white">
          <BarChart />
        </Box>
      </Center>
    </div>
  );
}

export default PurchaseOrder;
