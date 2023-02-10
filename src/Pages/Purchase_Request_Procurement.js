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
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathItem, primaryPathProcurement } from "../API/Path_List";
import { Get, Post, Put } from "../API/Base_Http_Request";
import { MdOutlineArrowBack } from "react-icons/md";
import Timeline from "../Components/Timeline/Timeline";
import Search from "../Components/Search";
import { FaRegBuilding } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { getDateToFormatDate } from "../Utils/DateFormat";
import ExceptionHandler from "../Utils/ExceptionHandler";

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
  const [initializing, setInitializing] = useState(
    props.loadState === null ? false : props.loadState
  );

  if (initializing) {
    setTimeout(() => {
      setInitializing(false);
    }, [2000]);
    return <Box>Loading</Box>;
  }

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
        h={["6%", "6%", "14%", "14%"]}
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
        <HeaderComponent
          loadState={true}
          data={props.total}
          children={
            <Text pl={1} fontWeight="bold">
              ₱
            </Text>
          }
        />
      </Box>
      <Box h={"20%"}>
        <Heading mb={10} mt={[5, 5, 0, 0]} size="sm" color="rgba(0,0,0,0.7)">
          Procurement Timeline
        </Heading>
        <Timeline data={timelineSampleData} fetch={props.fetch} id={props.id} />
      </Box>
    </Box>
  );
};

const ProcurementPRForm = (props) => {
  const title = "Purchase Request";
  const [loading, setLoading] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let form = new FormData();
    form.append("id", props.id);
    form.append("message", remarks);

    Post({ url: primaryPathProcurement }, form)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }

        setRemarks("");
        setLoading(false);
        props.setFetch(true);
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setLoading(false);
      });
  };

  return (
    <Box w={"100%"} h={["12rem", "12rem", "16rem", "16rem"]} pt={5} pb={5}>
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
        isLoading={loading}
        loadingText="Submitting..."
        type={"Submit"}
        value={"Submit"}
        bg="teal"
        color="white"
        _hover={{ bg: "teal" }}
        _active={{ bg: "teal" }}
        mt={5}
        float="right"
        size={["sm", "sm", "md", "lg"]}
        onClick={(e) => handleSubmit(e)}
      >
        Submit remarks
      </Button>
    </Box>
  );
};

const ModalComponentDetailDesign = (props) => {
  return (
    <Box w={props.w} mt={props.mt === null ? 0 : props.mt}>
      <Box
        w={`${props.title.length * 10 + 30}px`}
        bg="teal"
        pl={2}
        borderTopLeftRadius={8}
        borderTopRightRadius={20}
      >
        <Text
          fontSize={[12, 12, 14, 14]}
          fontWeight={600}
          letterSpacing={2}
          color="white"
        >
          {props.title.toUpperCase()}
        </Text>
      </Box>
      <Text
        fontSize={[12, 12, 14, 14]}
        border={"2px solid teal"}
        borderRightRadius={8}
        borderBottomLeftRadius={8}
        fontWeight={props.title.includes("Price") ? 600 : 400}
        p={2}
        textAlign={!props.title.includes("Description") ? "end" : "start"}
      >
        {props.title.includes("Price")
          ? `₱ ${props.data}`
          : props.title.includes("Unit")
          ? props.data.toUpperCase()
          : props.data}
      </Text>
    </Box>
  );
};

const ProductModal = (props) => {
  const title = "Product Details";
  const [msg, setMsg] = useState("");
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let form = new FormData();
    form.append("PK_item_ID", props.data.PK_item_ID);
    form.append("remarks", remarks);

    Put({ url: primaryPathItem }, form)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        props.setFetch(true);
        setRemarks("");
        setLoading(false);
        props.setProductID("");
        props.onClose();
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setLoading(false);
      });
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w={"inherit"}>
            <ModalComponentDetailDesign
              w={"inherit"}
              title={"Description"}
              data={props.data.description}
            />
            <Flex justifyContent={"space-between"} columnGap={5}>
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Unit"}
                data={props.data.unit}
                mt={5}
              />
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Quantity"}
                data={props.data.quantity}
                mt={5}
              />
            </Flex>
            <Flex justifyContent={"space-between"} columnGap={5}>
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Price"}
                data={props.data.price}
                mt={5}
              />
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Total Price"}
                data={props.data.total}
                mt={5}
              />
            </Flex>
          </Box>
          <FormControl>
            <FormLabel
              fontSize={["14px", "14px", "15px", "15px"]}
              fontWeight={"500"}
            >
              Remarks
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
        </ModalBody>
        <ModalFooter>
          <Flex float="right" columnGap={5}>
            <Button
              bg="gray"
              color="white"
              _hover={{ bg: "gray" }}
              _active={{ bg: "gray" }}
              mt={5}
              float="right"
              size={["sm", "sm", "md", "md"]}
              onClick={() => {
                props.onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText={"Submitting..."}
              type={"Submit"}
              value={"Submit"}
              bg="teal"
              color="white"
              _hover={{ bg: "teal" }}
              _active={{ bg: "teal" }}
              mt={5}
              float="right"
              size={["sm", "sm", "md", "md"]}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit Product Remarks
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const PurchaseRequestProcurement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pr, setPr] = useState(location.state);
  const title = "Purchase " + " #" + pr.pr_Prxno;
  const [productID, setProductID] = useState("");
  const [fetch, setFetch] = useState(false);
  const [fetchT, setFetchT] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [total, setTotal] = useState(0);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "PK_item_ID",
      },
      {
        Header: "BizzBox ID",
        accessor: "PK_iwItems",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "QTY",
        accessor: "quantity",
      },
      {
        Header: "Unit",
        accessor: "unit",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Remarks",
        accessor: "remarks",
      },
      {
        Header: "Total Price",
        accessor: "total",
      },
    ],
    []
  );

  const handleSelectedProduct = (data) => {
    setProductID(data.values);
    onOpen();
  };

  const hanldeReturn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleFetchOnLoad = () => {
    Get({ url: primaryPathItem + "/" + pr.PK_pr_ID })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        setData(res.data.data);
        setTotal(data.reduce((acc, cur) => acc + cur.total, 0));
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
      });
  };

  const filteredData = data.filter(
    (filter) =>
      filter.description.toLowerCase().includes(search.toLowerCase()) ||
      filter.PK_iwItems.toLowerCase().includes(search.toLowerCase()) ||
      filter.unit.toLocaleLowerCase().includes(search.toLowerCase())
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
          h={"100vh"}
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
              handleClick={handleSelectedProduct}
            />
          </Box>
          {productID === null || productID === "" ? null : (
            <ProductModal
              data={productID}
              setFetch={setFetch}
              setProductID={setProductID}
              isOpen={isOpen}
              onClose={onClose}
            />
          )}
          <ProcurementPRForm id={pr.PK_pr_ID} setFetch={setFetchT} />
        </Box>
        <PRDetailedModule
          fetch={fetchT}
          date={pr.date}
          department={pr.dept_name}
          procDesc={pr.procurement_description}
          id={pr.PK_pr_ID}
          total={total}
        />
      </Flex>
    </Box>
  );
};

export default PurchaseRequestProcurement;
