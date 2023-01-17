import { Box, Center, Heading } from "@chakra-ui/react";
import { PR_DataSet } from "../Data/PR_DataSet";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";

const PurchaseRequest = () => {
  const title = "Purchase Request";
  const [fetch, setFetch] = useState(false);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "PR TXNO",
        accessor: "prtxno",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "TOTAL",
        accessor: "total",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "DATE",
        accessor: "created_at",
      },
      {
        Header: "UPDATED",
        accessor: "updated_at",
      },
      {
        Header: "ACTION",
        accessor: "action",
      },
    ],
    []
  );

  return (
    <>
      <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
        <CustomTable
          title={title}
          fetch={fetch}
          setSearch={setFetch}
          columns={column}
          data={PR_DataSet}
        />
      </Box>
    </>
  );
};

export default PurchaseRequest;
