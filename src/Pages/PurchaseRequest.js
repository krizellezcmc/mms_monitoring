import { Box, Center, Heading } from "@chakra-ui/react";
import { PR_DataSet } from "../Data/PR_DataSet";
import { useMemo, useState, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathPR } from "../API/Path_List";
import { Get, Post } from "../API/Base_Http_Request";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const PurchaseRequest = () => {
  const title = "Purchase Request";
  const navigate = useNavigate();
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [pr, setPR] = useState([]);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "PK_pr_ID",
      },
      {
        Header: "PR TXNO",
        accessor: "pr_Prxno",
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

  const migrateBizzboxPRtoDB = () => {
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

  const handleFetch = () => {
    Get({ url: primaryPathPR })
      .then((res) => {
        if (res.data.status === 200) {
          setPR(res.data.data);
          return;
        }
      })
      .catch((e) => console.log(e.message));
  };

  const PurchaseRequestData = pr.filter(
    (filter) =>
      filter.dept_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.procurement_description
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      filter.pr_Prxno.toLowerCase().includes(search.toLowerCase())
  );

  const handleRedirectView = (e, value) => {
    e.preventDefault();
    navigate("/pr-view", { state: value });
  };

  const handleRedirectEdit = (e, value) => {
    e.preventDefault();
    navigate("/pr-procurement", { state: value });
  };

  const handleRedirectDelete = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  useEffect(() => {
    handleFetch();
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
          data={PurchaseRequestData}
          handleClick={migrateBizzboxPRtoDB}
          handleView={handleRedirectView}
          handleEdit={handleRedirectEdit}
          handleDelete={handleRedirectDelete}
        />
      </Box>
    </>
  );
};

export default PurchaseRequest;
