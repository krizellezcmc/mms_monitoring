import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathItem, primaryPathPR } from "../API/Path_List";
import { Get } from "../API/Base_Http_Request";
import { MdOutlineArrowBack } from "react-icons/md";
import Search from "../Components/Search";
import ExceptionHandler from "../Utils/ExceptionHandler";
import ProcurementPRForm from "../Components/Procurement/ProcurementPRForm";
import PRDetailedModule from "../Components/Procurement/PRDetailedModule";
import ProductModal from "../Components/Procurement/ProductModalDesign";

const PurchaseRequestProcurement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFetching, setIsFetching] = useState(true);
  const [pr, setPr] = useState(location.state);
  const [prDetails, setPRDetails] = useState([]);
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
        setTotal(data.reduce((acc, cur) => acc + cur.total, 0));
        setData(res.data.data);
        setTimeout(() => setIsFetching(false), [800]);
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setTimeout(() => setIsFetching(false), [800]);
      });
  };

  const handleFetchPRDetails = () => {
    Get({ url: `${primaryPathPR}/${pr.PK_pr_ID}` }).then((res) => {
      if (!res.statusText === "OK") {
        throw new Error("Bad response.", { cause: res });
      }
      setPRDetails((prev) => {
        return { ...prev, ...res.data.data };
      });
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
    handleFetchPRDetails();
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
          bg={["white", "white", "rgba(0,0,0,0.05)", "rgba(0,0,0,0.05)"]}
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
              isFetching={isFetching}
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
          <ProcurementPRForm data={prDetails} setFetch={setFetchT} />
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
