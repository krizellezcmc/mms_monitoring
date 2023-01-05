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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import "../Styles/style.css";
import "../Styles/Table.css";
import NoDeptData from "../Components/NoDeptData";
import moment from "moment";
import {
  BiChevronLeft,
  BiDownload,
  BiMinusCircle,
  BiPlusCircle,
  BiSearch,
} from "react-icons/bi";
import ItemDesc from "../Components/ItemDesc";
import { useNavigate } from "react-router-dom";
import DepartmentReport from "../Components/DepartmentReport";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

function Department(props) {
  const [options, setOptions] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

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

  const exportPDF = () => {
    let element = (
      <div>
        {/* {options.map((j,k)=>{
        <DepartmentReport issNo={j.IssueNo} itmCode={j.ItemCode} itmDesc={j.Item} />
        })} */}
      </div>
    );
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: [215.9, 330.2],
    });

    doc.page = 1;

    function footer() {
      doc.setFont("Times-Roman");
      doc.setFontSize(8);
      doc.text(25, 327, "  Page" + " " + doc.page + " " + " of " + doc.page++);
      doc.page++;
    }

    doc.html(ReactDOMServer.renderToString(element), {
      width: 215.9,
      height: 330.2,
      windowWidth: 800,
      windowHeight: 1600,
      margin: [5, 10, 14, 10],

      callback: function (doc) {
        footer();
        window.open(doc.output("bloburl"));
      },
    });
  };
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
          <>
            <Flex mt={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearch color="gray.300" />}
                />
                <Input
                  fontSize="13px"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Issue No."
                  width="400px"
                  _hover={{ borderColor: "green" }}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                    borderColor: "green",
                  }}
                />
              </InputGroup>
              <Spacer />
              <Button
                onClick={exportPDF}
                rightIcon={<BiDownload />}
                colorScheme="teal"
                padding={5}
              >
                Download Report
              </Button>
            </Flex>
            <Box maxW={1500} mt={20}>
              <table
                style={{ width: "1000px", textAlign: "center" }}
                className="items-table"
              >
                <tr>
                  <td
                    style={{
                      fontWeight: "bolder",
                      padding: "5px",
                    }}
                  >
                    Issue No
                  </td>
                  {/* <td style={{ fontWeight: "bolder", padding: "5px" }}>
                  Item Code
                </td> */}
                  <td
                    style={{
                      fontWeight: "bolder",
                      padding: "5px",
                      width: "60%",
                    }}
                  >
                    Item Description
                  </td>
                  <td style={{ fontWeight: "bolder", padding: "5px" }}>
                    Issue Date
                  </td>
                  {/* <td style={{ fontWeight: "bolder", padding: "5px" }}>Unit</td>
                <td style={{ fontWeight: "bolder", padding: "5px" }}>QTY</td> */}
                  <td style={{ fontWeight: "bolder", padding: "5px" }}>
                    Grand Total
                  </td>
                </tr>
                {deptData
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (val.IssueNo.includes(search)) {
                      return val;
                    }
                  })

                  .map((j, k) => {
                    return (
                      <>
                        <tr>
                          <td style={{ padding: "5px" }}>{j.IssueNo}</td>

                          <td style={{ padding: "5px" }}>
                            <Accordion allowMultiple>
                              <AccordionItem>
                                {({ isExpanded }) => (
                                  <>
                                    <h2>
                                      <AccordionButton>
                                        <Box
                                          as="span"
                                          flex="1"
                                          textAlign="left"
                                          color="teal"
                                          fontWeight={600}
                                        >
                                          View all items
                                        </Box>
                                        {isExpanded ? (
                                          <BiMinusCircle
                                            fontSize="18px"
                                            color="teal"
                                          />
                                        ) : (
                                          <BiPlusCircle
                                            fontSize="18px"
                                            color="teal"
                                          />
                                        )}
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                      <ItemDesc
                                        id={j.IssueNo}
                                        selected={selected}
                                      />
                                    </AccordionPanel>
                                  </>
                                )}
                              </AccordionItem>
                            </Accordion>
                          </td>
                          <td style={{ padding: "5px" }}>
                            {moment(j.DateIssued).format(
                              "MMMM DD, YYYY, hh:mm A"
                            )}
                          </td>
                          <td style={{ padding: "5px" }}>{j.Total}</td>
                        </tr>
                      </>
                    );
                  })}
              </table>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

export default Department;
