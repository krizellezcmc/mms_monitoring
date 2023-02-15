import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathLogs } from "../API/Path_List";
import { Get } from "../API/Base_Http_Request";
import useAuth from "../Hooks/useAuth";
import ExceptionHandler from "../Utils/ExceptionHandler";

const RequestLogs = () => {
  const { setUser } = useAuth();
  const title = "Request Logs";
  const [isFetching, setIsFetching] = useState(true);
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);
  const [fStatus, setFStatus] = useState("");

  const column = [
    {
      Header: "ID",
      accessor: "PK_logs_ID",
    },
    {
      Header: "TABLE",
      accessor: "table_name",
    },
    {
      Header: "Foregin ID",
      accessor: "PK_ID",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
  ];

  const hanldeView = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const fetchTask = () => {
    Get({ url: primaryPathLogs })
      .then((res) => {
        if (!res.statusText) {
          throw new Error("Bad response", { cause: res });
        }
        setLogs(res.data.data);
        setTimeout(() => setIsFetching(false), [800]);
      })
      .catch((err) => {
        setFStatus(ExceptionHandler);
        setTimeout(() => setIsFetching(false), [800]);
      });
  };

  useEffect(() => {
    fetchTask();
  }, [fetch]);

  return (
    <>
      <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
        <CustomTable
          title={title}
          fetch={setFetch}
          search={search}
          setSearch={setSearch}
          columns={column}
          data={logs}
          handleClick={null}
          handleView={hanldeView}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isFetching={isFetching}
        />
      </Box>
    </>
  );
};

export default RequestLogs;
