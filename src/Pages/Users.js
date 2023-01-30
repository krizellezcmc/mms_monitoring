import { Box, Text } from "@chakra-ui/layout";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { Get } from "../API/Base_Http_Request";
import { primaryPathUser } from "../API/Path_List";
import { useQuery } from "@chakra-ui/react";
import { useEffect } from "react";

const Users = () => {
  const title = "Registered User";
  const [fetch, setFetch] = useState(false);
  const [users, setUsers] = useState([]);

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

  const handleRequest = () => {
    Get({ url: primaryPathUser })
      .then((response) => {
        if (response.data.status === 200) {
          setUsers(response.data.data);
          return;
        }
        setUsers([]);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
      <CustomTable
        title={title}
        fetch={fetch}
        setSearch={setFetch}
        columns={column}
        data={users}
      />
    </Box>
  );
};

export default Users;
