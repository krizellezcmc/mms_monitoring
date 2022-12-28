import {
  Container,
  Box,
  Wrap,
  WrapItem,
  Flex,
<<<<<<< HEAD
  HStack,
  Spacer,
  Center,
=======
  Spacer,
  Button,
  Link,
>>>>>>> kriz
} from "@chakra-ui/react";
import SideDrawer from "../Components/SideDrawer";
import TotalTile from "../Components/TotalTile";
import "../Style/style.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import localApi from "../API/localAPI";
import {
<<<<<<< HEAD
=======
  BsArrowRightShort,
>>>>>>> kriz
  BsFillCalendar2CheckFill,
  BsFillCalendar2Fill,
  BsFillCalendar2RangeFill,
} from "react-icons/bs";
<<<<<<< HEAD
import BarChart from "../Components/Charts/BarChart";
=======
import NoData from "../Components/NoData";
>>>>>>> kriz

function PurchaseOrder(props) {
  const [year, setYear] = useState(moment().format("YYYY"));
  const [month, setMonth] = useState(moment().format("MMMM"));
  const [totalYear, setTotalYear] = useState("");
  const [totalMonth, setTotalMonth] = useState("");
  const [totalNS, setTotalNS] = useState("");
  const [supplier, setSupplier] = useState([]);

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
<<<<<<< HEAD
      </Box>
=======
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
>>>>>>> kriz
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
        <Box
          boxShadow="md"
          p={10}
          borderRadius={20}
          bgColor="white"
          mr={{ sm: 0, lg: 5 }}
        >
          <BarChart />
        </Box>

        <Box
          boxShadow="md"
          p={10}
          borderRadius={20}
          bgColor="white"
          ml={{ sm: 0, lg: 5 }}
          mt={{ sm: 10, lg: 0 }}
        >
          <BarChart />
        </Box>
      </Center>
    </div>
  );
}

export default PurchaseOrder;
