import { Box, Text } from "@chakra-ui/layout";
import { useMemo, useState, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathDepartment } from "../API/Path_List";
import { Get, Post } from "../API/Base_Http_Request";

const Departments = () => {
  const title = "Department";

  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState([]);

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "PK_department_ID",
      },
      {
        Header: "Warehouse ID",
        accessor: "dept_PK_msc_warehouse",
      },
      {
        Header: "Department Name",
        accessor: "dept_name",
      },
      {
        Header: "Total PR",
        accessor: "total_pr",
      },
      {
        Header: "Short Name",
        accessor: "dept_shortname",
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

  const handleMigrateFromBizzBox = () => {
    Post({ url: primaryPathDepartment + "/bb" })
      .then((res) => {
        if (res.data.status === 200) {
          console.log("Successfully migrated Department list from BizzBox");
          return;
        }

        console.log("Failed to migrat department list from BizzBox");
      })
      .catch((e) => console.log(e.message));
  };

  const handleFetch = () => {
    Get({ url: primaryPathDepartment })
      .then((res) => {
        if (res.data.status === 200) {
          setDepartments(res.data.data);
          return;
        }
      })
      .catch((e) => console.log(e.message));
  };

  const DepartmentData = departments.filter(
    (filter) =>
      filter.dept_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.dept_shortname.toLowerCase().includes(search.toLowerCase()) ||
      filter.dept_PK_msc_warehouse.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    handleFetch();
  }, [fetch]);

  return (
    <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
      <CustomTable
        title={title}
        fetch={setFetch}
        search={search}
        setSearch={setSearch}
        columns={column}
        handleClick={handleMigrateFromBizzBox}
        data={DepartmentData}
      />
    </Box>
  );
};

export default Departments;
