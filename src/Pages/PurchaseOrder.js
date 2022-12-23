import {
  Container,
  Box,
  Wrap,
  WrapItem,
  Flex,
  Spacer,
  Button,
  Link,
} from "@chakra-ui/react";
import SideDrawer from "../Components/SideDrawer";
import TotalTile from "../Components/TotalTile";
import "../Style/style.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import localApi from "../API/localAPI";
import {
  BsArrowRightShort,
  BsFillCalendar2CheckFill,
  BsFillCalendar2Fill,
  BsFillCalendar2RangeFill,
} from "react-icons/bs";

function PurchaseOrder(props) {
  const [year, setYear] = useState(moment().format("YYYY"));
  const [month, setMonth] = useState(moment().format("MMMM"));
  const [totalYear, setTotalYear] = useState("");
  const [totalMonth, setTotalMonth] = useState("");
  const [totalNS, setTotalNS] = useState("");

  const fetchTotal = async () => {
    let responseYear = await localApi.get("/get_TotalperYear.php");
    setTotalYear(responseYear.data);

    let responseMonth = await localApi.get("/get_TotalperMonth.php");
    setTotalMonth(responseMonth.data);

    let responseNS = await localApi.get("/get_TotalNSperMonth.php");
    setTotalNS(responseNS.data);
  };

  useEffect(() => {
    fetchTotal();
  }, []);

  return (
    <div>
      <Flex p={5}>
        <SideDrawer />
        <Spacer />
        <Button
          as={Link}
          href="po-report"
          colorScheme="teal"
          _hover={{ textDecoration: "none" }}
        >
          Search Purchase Order &nbsp;
          <BsArrowRightShort fontSize={20} />
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
    </div>
  );
}

export default PurchaseOrder;
