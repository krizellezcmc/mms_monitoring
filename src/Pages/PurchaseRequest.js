import { Box, Center, Heading } from "@chakra-ui/react";
import { PR_DataSet } from "../Data/PR_DataSet";
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathPR } from "../API/Path_List";
import { Get, Post } from "../API/Base_Http_Request";
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
    Get({ url: primaryPathPR }).then((res) => res.data)
  );

  if (isLoading) {
    return <Heading>Loading</Heading>;
  }

  if (isError) {
    return <Heading>{error.message}</Heading>;
  }

  const migrateBizzboxPRtoDB = () => {
    console.log("called");
    Post({ url: primaryPathPR + "/bb" })
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data.data);
          return;
        }
        console.log(response.data.message);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <>
      <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
        <CustomTable
          title={title}
          fetch={fetch}
          setSearch={setFetch}
          columns={column}
          data={data}
          handleClick={migrateBizzboxPRtoDB}
        />
      </Box>
    </>
  );
};

export default PurchaseRequest;
