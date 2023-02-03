import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathPR } from "../API/Path_List";
import { Get } from "../API/Base_Http_Request";
import { MdOutlineArrowBack } from "react-icons/md";
import Timeline from "../Components/Timeline/Timeline";
import Search from "../Components/Search";
import { FaRegBuilding } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { getDateToFormatDate } from "../Utils/DateFormat";

const timelineSampleData = [
  {
    index: 0,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
  {
    index: 1,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
  {
    index: 2,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
  {
    index: 3,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
  {
    index: 4,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
  {
    index: 5,
    date: "Jan 01, 2023 -",
    procurementStatus: "Your order starts processing",
  },
];

const HeaderComponent = (props) => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      columnGap={2}
      color="rgba(0,0,0,0.7)"
    >
      {props.children}
      <Text fontSize={[14, 14, 16, 16]} fontWeight={"500"}>
        {props.data}
      </Text>
    </Box>
  );
};

const PRDetailedModule = (props) => {
  return (
    <Box h={["70vh", "70vh", "100vh", "100vh"]} boxShadow={"lg"} p={5}>
      <Box h={["3rem", "3rem", "6rem", "6rem"]}>
        <Heading size={["sm", "sm", "md", "md"]} color={"teal"}>
          Purchase & Procurement Record
        </Heading>
      </Box>
      <Box
        h={["6%", "6%", "12%", "12%"]}
        rowGap={[0, 0, 2, 2]}
        columnGap={[5, 5, 0, 0]}
        display="flex"
        flexDirection={["row", "row", "column", "column"]}
      >
        <HeaderComponent
          data={getDateToFormatDate(new Date(props.date))}
          children={<BsCalendar2Date fontSize={16} />}
        />
        <HeaderComponent
          data={props.department}
          children={<FaRegBuilding fontSize={16} />}
        />
        <HeaderComponent
          data={props.procDesc}
          children={<MdPendingActions fontSize={16} />}
        />
      </Box>
      <Box h={"20%"}>
        <Heading mb={10} mt={[5, 5, 0, 0]} size="sm" color="rgba(0,0,0,0.7)">
          Procurement Timeline
        </Heading>
        <Timeline data={timelineSampleData} />
      </Box>
    </Box>
  );
};

const ProcurementPRForm = () => {
  const title = "Purchase Request";
  const [remarks, setRemarks] = useState("");

  return (
    <Box w={"100%"} h={["12rem", "12rem", "20rem", "20rem"]} p={5}>
      <FormControl>
        <FormLabel
          fontSize={["14px", "14px", "16px", "18px"]}
          fontWeight={"600"}
        >
          Purchase Request
        </FormLabel>
        <Textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Remarks description"
          focusBorderColor={"#008080"}
          boxShadow={"lg"}
          rounded={10}
        />
      </FormControl>
      <Button
        type={"Submit"}
        value={"Submit"}
        bg="teal"
        color="white"
        _hover={{ bg: "teal" }}
        _active={{ bg: "teal" }}
        mt={5}
        float="right"
        size={["sm", "sm", "md", "lg"]}
      >
        Submit remarks
      </Button>
    </Box>
  );
};

const ProcurementProductForm = () => {
  const title = "Product remarks";
  const [remarks, setRemarks] = useState("");

  return (
    <Box w={"100%"} h={["12rem", "12rem", "20rem", "20rem"]} p={5}>
      <FormControl>
        <FormLabel
          fontSize={["14px", "14px", "16px", "18px"]}
          fontWeight={"600"}
        >
          {title}
        </FormLabel>
        <Textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Remarks description"
          focusBorderColor={"#008080"}
          boxShadow={"lg"}
          rounded={10}
        />
      </FormControl>
      <Button
        type={"Submit"}
        value={"Submit"}
        bg="teal"
        color="white"
        _hover={{ bg: "teal" }}
        _active={{ bg: "teal" }}
        mt={5}
        float="right"
        size={["sm", "sm", "md", "lg"]}
      >
        Submit
      </Button>
    </Box>
  );
};

const PurchaseRequestProcurement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pr, setPr] = useState(location.state);
  const title = "Purchase " + " #" + pr.pr_Prxno;
  const [productID, setProductID] = useState("");
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "PK_TRXNO",
      },
      {
        Header: "Item ID",
        accessor: "Item_ID",
      },
      {
        Header: "Date",
        accessor: "PRDate",
      },
      {
        Header: "Remarks",
        accessor: "remarks",
      },
      {
        Header: "Description",
        accessor: "itemdesc",
      },
      {
        Header: "Unit",
        accessor: "unit",
      },
      {
        Header: "QTY",
        accessor: "qty",
      },
      {
        Header: "Price",
        accessor: "Price",
      },
      {
        Header: "Total Price",
        accessor: "actualPrice",
      },
    ],
    []
  );

  const hanldeReturn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleFetchOnLoad = () => {
    Get({ url: primaryPathPR + "/" + pr.pr_Prxno })
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.data);
          return;
        }
      })
      .catch((e) => console.log(e.message));
  };

  const filteredData = data.filter(
    (filter) =>
      filter.itemdesc.toLowerCase().includes(search.toLowerCase()) ||
      filter.Item_ID.toLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    handleFetchOnLoad();
  }, [fetch]);

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      verticalAlign={"center"}
      overflow={["auto", "auto", "hidden", "hidden"]}
    >
      <Flex flexDirection={["column", "column", "row", "row"]}>
        <Box
          w={["100%", "100%", "75%", "75%"]}
          bg={"rgba(0,0,0,0.05)"}
          p={5}
          overflow="auto"
        >
          <Box
            w="100%"
            h="40px"
            display="flex"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box display="flex" alignItems={"center"} columnGap={10}>
              <IconButton
                icon={<MdOutlineArrowBack fontSize={20} />}
                bg="transparent"
                color="teal"
                rounded={100}
                border={"2px solid teal"}
                _hover={{
                  bg: "teal",
                  color: "white",
                }}
                _active={{
                  bg: "teal",
                  color: "white",
                }}
                onClick={(e) => hanldeReturn(e)}
              />
              <Heading size={["sm", "sm", "md", "md"]} color={"teal"}>
                {title}
              </Heading>
            </Box>
            <Search
              search={search}
              placeholder={
                title.toLowerCase().includes("#")
                  ? "Search product"
                  : `Search ${title}`
              }
              currsearch={setSearch}
            />
          </Box>
          <Box mt={5}>
            <CustomTable
              title={title}
              fetch={setFetch}
              setSearch={setSearch}
              columns={column}
              data={filteredData}
              h={"inherit"}
              setID={setProductID}
            />
          </Box>
          <ProcurementProductForm />
          <ProcurementPRForm />
        </Box>
        <PRDetailedModule
          date={pr.pr_date}
          department={pr.dept_name}
          procDesc={pr.procurement_description}
        />
      </Flex>
    </Box>
  );
};

export default PurchaseRequestProcurement;
