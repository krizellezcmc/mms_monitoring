import { Text, Box, Spacer, Flex, Button, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import BinCard from "../Components/Reports/BinCard";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { BiArrowBack } from "react-icons/bi";
import { Select } from "chakra-react-select";
import localApi from "../API/localAPI";
import { useEffect } from "react";

function BinCardReport(props) {
  const [itemId, setItemId] = useState("");
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  // FOR REPORT
  const [deliveries, setDeliveries] = useState([]);
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [unit, setUnit] = useState("");

  const getCategory = async () => {
    let response = await localApi.get("/get_categoryList.php");

    if (response) {
      setCategory(response.data);
    }
  };

  const getItem = async (e) => {
    let res = await localApi.get("/get_itemList.php", {
      params: { category: e },
    });

    if (res) {
      setItems(res.data);
    }
  };

  const getDeliveries = async () => {
    let response = await localApi.get("/get_deliveries.php", {
      params: {
        itemId: itemId,
      },
    });

    setDeliveries(response.data);
  };

  const getBinCard = async () => {
    let response = await localApi.get("/get_binCard.php", {
      params: {
        itemId: itemId,
      },
    });

    setList(response.data);
    setItem(response.data[0].itemdesc);
    setUnit(response.data[0].unit);
  };

  const exportPDF = () => {
    let element = (
      <div>
        <BinCard deliveries={deliveries} list={list} item={item} unit={unit} />
      </div>
    );

    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: [215.9, 279.4],
    });

    function footer() {
      doc.setFont("Times-Roman");
      doc.setFontSize(8);
      doc.text(
        8,
        275,
        "ZCMC-F-MM-17" +
          "                                          " +
          "                                          " +
          "               " +
          "Rev. 1" +
          "                      " +
          "                      " +
          "                                              " +
          "       Effectivity Date: May 2, 2018"
      );
    }

    doc.html(ReactDOMServer.renderToString(element), {
      width: 215.9,
      height: 279.4,
      windowWidth: 850,
      windowHeight: 1700,
      margin: [5, 5, 5, 0],

      callback: function (doc) {
        footer();
        window.open(doc.output("bloburl"));
      },
    });
  };

  useEffect(() => {
    getCategory();
    getDeliveries();
    getBinCard();
  }, [itemId]);

  return (
    <div>
      <Flex p={5} mb={5}>
        <Button leftIcon={<BiArrowBack />} mr={3} as={Link} href="/po">
          Back
        </Button>
        <Button colorScheme="blue" onClick={exportPDF}>
          Download Report
        </Button>
        <Spacer />

        <Box w={400} mr={2}>
          <small>Select Category</small>
          <Select
            options={category}
            onChange={(e) => {
              getItem(e.value);
              setShow(true);
            }}
          />
        </Box>
        {!show ? (
          ""
        ) : (
          <Box w={400}>
            <small>Select Item </small>
            <Select
              options={items}
              onChange={(e) => {
                setItemId(e.value);
              }}
            />
          </Box>
        )}
      </Flex>
      <BinCard deliveries={deliveries} list={list} item={item} unit={unit} />
    </div>
  );
}

export default BinCardReport;
