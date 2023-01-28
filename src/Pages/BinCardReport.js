import { Box, Button } from "@chakra-ui/react";
import React from "react";
import BinCard from "../Components/Reports/BinCard";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

function BinCardReport(props) {
  const exportPDF = () => {
    let element = (
      <div>
        <BinCard />
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
  return (
    <div>
      <Box p={5}>
        <Button colorScheme="blue" onClick={exportPDF}>
          Download Report
        </Button>
      </Box>
      <BinCard />
    </div>
  );
}

export default BinCardReport;
