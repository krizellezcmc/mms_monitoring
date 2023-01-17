import { Box, Text } from "@chakra-ui/layout";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { Department_Dataset } from "../Data/PR_DataSet";

const Departments = () => {
  const title = "Department";
  const [fetch, setFetch] = useState(false);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Department Name",
        accessor: "dep_name",
      },
      {
        Header: "Total PR",
        accessor: "total_pr",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Head",
        accessor: "head",
      },
      {
        Header: "Date",
        accessor: "created_at",
      },
      {
        Header: "ACTION",
        accessor: "action",
      },
    ],
    []
  );

  return (
    <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
      <CustomTable
        title={title}
        fetch={fetch}
        setSearch={setFetch}
        columns={column}
        data={Department_Dataset}
      />
    </Box>
  );
};

export default Departments;
