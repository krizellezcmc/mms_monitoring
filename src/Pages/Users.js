import { Box, Text } from "@chakra-ui/layout";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { User_Dataset } from "../Data/PR_DataSet";

const Users = () => {
  const title = "Registered User";
  const [fetch, setFetch] = useState(false);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Middle Name",
        accessor: "middle_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Status",
        accessor: "status",
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
        data={User_Dataset}
      />
    </Box>
  );
};

export default Users;
