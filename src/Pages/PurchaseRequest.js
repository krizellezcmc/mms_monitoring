import { Box } from "@chakra-ui/react";
import { useMemo, useState, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathPR } from "../API/Path_List";
import { Get, Post } from "../API/Base_Http_Request";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PurchaseRequest = () => {
  const { setUser } = useAuth();
  const title = "Purchase Request";
  const navigate = useNavigate();
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [pr, setPR] = useState([]);
  const [status, setStatus] = useState("");
  const [tblStatus, setTblStatus] = useState("");

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
        accessor: "date",
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

  const migrateBizzboxPRtoDB = async () => {
    try {
      await Post({ url: primaryPathPR + "/bb" })
        .then((res) => {
          if (!res.statusText === "OK") {
            throw new Error("Bad response.", { cause: res });
          }
          setStatus(res.data.message);
        })
        .catch((err) => {
          switch (err) {
            case 400:
              setStatus("Encounter a problem. try again later.");
              break;
            case 401:
              setUser(null);
              break;
            case 404:
              setStatus("No record.");
              break;
            case 500:
              setStatus("Can't complete task, encounter a problem.");
              break;
          }
        });

      const result = {
        status: "Ok",
        message: "success",
      };

      return result;
    } catch (e) {
      const result = {
        status: "failed",
        message: e.message,
      };
      return result;
    }
  };

  const handleFetch = () => {
    Get({ url: primaryPathPR })
      .then((res) => {
        if (!res.statusText) {
          throw new Error("Bad response.", { cause: res });
        }
        setPR(res.data.data);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setTblStatus("Encounter a problem. try again later.");
            break;
          case 401:
            setUser(null);
            break;
          case 404:
            setTblStatus("No record.");
            break;
          case 500:
            setTblStatus("Can't complete the request. try again later.");
            break;
        }
      });
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
