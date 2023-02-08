import { Box, Text, Flex } from "@chakra-ui/layout";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useMemo, useState, useEffect, useRef } from "react";
import CustomTable from "../Components/Custom_Table";
import { primaryPathDepartment } from "../API/Path_List";
import { Get, Post, Put, Delete } from "../API/Base_Http_Request";
import useAuth from "../Hooks/useAuth";
import { AiFillEdit } from "react-icons/ai";

const UpdateModal = (props) => {
  const { setUser } = useAuth();
  const [name, setName] = useState(props.data.dept_name);
  const [shortname, setShortname] = useState(props.data.dept_shortname);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const initialRef = useRef();

  const handleUpdate = () => {
    setLoading(true);
    Put({ url: primaryPathDepartment })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }

        setLoading(false);
        props.onClose();
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setMsg("Problem encounter. Please try again later.");
            break;
          case 401:
            setMsg("Un-Authorized user.");
            break;
          case 404:
            setUser(null);
            break;
          case 500:
            setMsg("Request Failed something went wrong.");
            break;
        }
        setLoading(false);
      });
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      initialFocusRef={initialRef}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Department</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            focusBorderColor={"#008080"}
            ref={initialRef}
            placeholder="Department name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            mt={5}
            focusBorderColor={"#008080"}
            placeholder="Department shortname"
            value={shortname}
            onChange={(e) => setShortname(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Flex columnGap={5}>
            <Button
              color="rgba(0,0,0,0.7)"
              _hover={{ bg: "gray", color: "white" }}
              onClick={props.onClose}
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText="Updating..."
              bg="darkorange"
              color="white"
              _hover={{ bg: "darkorange", color: "white" }}
              _active={{ bg: "darkorange", color: "white" }}
              disabled={name === "" || shortname === ""}
              onClick={handleUpdate}
              rightIcon={<AiFillEdit color="white" />}
            >
              Update
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Departments = () => {
  const { setUser } = useAuth();
  const title = "Department";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState([]);

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

  const handleEdit = (props) => {
    setSelectedDept(props);
    onOpen();
  };

  const handleDeleteTask = async (value) => {
    let msg = "";

    Delete({ url: `${primaryPathDepartment}/${value.PK_department_ID}` })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response", {
            cause: res,
          });
        }
      })
      .catch((err) => {
        switch (err) {
          case 400:
            msg = "Problem encounter please try again later.";
            break;
          case 401:
            // un-authorized user
            setUser(null);
            msg = "Un-Authorized user.";
            break;
          case 404:
            // not found base on request
            msg = "Department not found";
            break;
          case 500:
            // Server encounter problem cause it not to complete the request
            msg = "Failed to complete request. Try again later.";
            break;
        }
      });

    return msg;
  };

  useEffect(() => {
    handleFetch();
  }, [fetch]);

  return (
    <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
      <UpdateModal isOpen={isOpen} onClose={onClose} data={selectedDept} />
      <CustomTable
        title={title}
        fetch={setFetch}
        search={search}
        setSearch={setSearch}
        columns={column}
        data={DepartmentData}
        handleClick={handleMigrateFromBizzBox}
        handleEdit={handleEdit}
        handleDelete={handleDeleteTask}
      />
    </Box>
  );
};

export default Departments;
