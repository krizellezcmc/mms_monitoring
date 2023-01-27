import { Box, Center, Heading } from "@chakra-ui/react";
import { PR_DataSet } from "../Data/PR_DataSet";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathPr } from "../API/Path_List";
import { Get } from "../API/Base_Http_Request";
import { useQuery } from "react-query";

const PurchaseRequest = () => {
  const title = "Purchase Request";
  const [fetch, setFetch] = useState(false);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "PK_pr_ID",
      },
      {
        Header: "PR TXNO",
        accessor: "pr_Prtxno",
      },
      {
        Header: "Department",
        accessor: "dept_name",
      },
      {
        Header: "STATUS",
        accessor: "procurement_description",
      },
      {
        Header: "DATE",
        accessor: "pr_date",
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

  const { isLoading, isError, data, error } = useQuery(
    "purchase_fetching_list",
    Get({ url: primaryPathPr }).then((res) => res.data)
  );

  if (isLoading) {
    return <Heading>Loading</Heading>;
  }

  if (isError) {
    return <Heading>{error.message}</Heading>;
  }

  return (
    <>
      <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
        <CustomTable
          title={title}
          fetch={fetch}
          setSearch={setFetch}
          columns={column}
          data={data}
        />
      </Box>
    </>
  );
};

export default PurchaseRequest;
