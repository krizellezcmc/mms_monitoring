import { Box, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import DirectPurchase from "../Components/Reports/DirectPurchase";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

function DirectPurchaseReport(props) {
  const exportPDF = () => {
    let element = (
      <div>
        <DirectPurchase />
      </div>
    );

    const doc = new jsPDF({
      orientation: "l",
      unit: "mm",
      //   format: [297, 210],
      format: [216, 356],
    });

    // doc.page = 1;

    function footer() {
      //   doc.setFont("Times-Roman");
      doc.setFontSize(5);
      doc.text(
        9.5,
        210,
        "ZCMC-F-MM-10                                                             " +
          "                                                                          " +
          "                                                                                                                                                                                " +
          "              Rev. 0                                                                                   " +
          "                                                                                          " +
          "                                                                                                            Effectivity Date: April 1, 2014"
      );
    }
    // Get the number of pages
    const pageCount = doc.internal.getNumberOfPages();

    // For each page, print the page number and the total pages
    for (let i = 0; i < pageCount; i++) {
      // Go to page i
      doc.setPage(i);
      footer();
      //Print Page 1 of 4 for example
    }

    doc.html(ReactDOMServer.renderToString(element), {
      width: 352,
      height: 216,
      windowWidth: 1582,
      windowHeight: 800,
      margin: [5, 2, 11, 2],

      callback: function (doc) {
        window.open(doc.output("bloburl"));
      },
    });
  };
  return (
    <div>
      <Box p={5}>
        <Box paddingBottom={10}>
          <Button colorScheme="blue" onClick={exportPDF}>
            Download Report
          </Button>
        </Box>
        <DirectPurchase />
      </Box>
    </div>
  );
}

export default DirectPurchaseReport;
