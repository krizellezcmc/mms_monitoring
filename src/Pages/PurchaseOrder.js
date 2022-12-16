import { Container, Box, Wrap, WrapItem } from "@chakra-ui/react";
import SideDrawer from "../Components/SideDrawer";
import TotalTile from "../Components/TotalTile";
import "../Style/style.css";
import React, { useState } from "react";
import moment from "moment";

function PurchaseOrder(props) {
  const [year, setYear] = useState(moment().format("YYYY"));
  const [month, setMonth] = useState(moment().format("MMMM"));
  return (
    <div>
      <SideDrawer />

      <Wrap justify="center" spacing="30px" p={5}>
        <WrapItem>
          <TotalTile label="Total PO" topLabel={year} />
        </WrapItem>
        <WrapItem>
          <TotalTile label="Total PO" topLabel={month} />
        </WrapItem>
        <WrapItem>
          <TotalTile label="Not Served" topLabel={month} />
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default PurchaseOrder;
