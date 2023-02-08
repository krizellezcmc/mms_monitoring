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
import { useMemo, useState } from "react";
import CustomTable from "../Components/Custom_Table";
import { Get } from "../API/Base_Http_Request";
import { useEffect } from "react";
import { primaryPathUser } from "../API/Path_List";
import { Put } from "../API/Base_Http_Request";
import useAuth from "../Hooks/useAuth";

const UpdateModal = (props) => {
  const { setUser } = useAuth();
  const [fname, setFname] = useState(props.data.first_name);
  const [mname, setMname] = useState(props.data.middle_name);
  const [lname, setLname] = useState(props.data.last_name);
  const [department, setDepartment] = useState(props.data.department);
  const msg = "";

  const handleUpdateTask = () => {
    Put({ url: primaryPathUser })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Bad response", { cause: res });
        }

        handleClose();
      })
      .catch((err) => {
        switch (err) {
          case 400:
            msg = "Problem encounter. Please try again later.";
            break;
          case 401:
            setUser(null);
            msg = "Un-Authorized user.";
            break;
          case 404:
            msg = "User account not found";
            break;
          case 500:
            msg = "Failed to complete request. Please try again later.";
            break;
        }
      });
  };

  const handleClose = () => {
    props.onClose();
    setFname("");
    setMname("");
    setLname("");
    setDepartment("");
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update User</ModalHeader>
        <ModalBody>
          <Input
            focusBorderColor={"#008080"}
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            isReadOnly={true}
          />
          <Input
            mt={5}
            focusBorderColor={"#008080"}
            placeholder="Middle shortname"
            value={mname}
            onChange={(e) => setMname(e.target.value)}
            isReadOnly={true}
          />
          <Input
            mt={5}
            focusBorderColor={"#008080"}
            placeholder="Last shortname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            isReadOnly={true}
          />
          <Input
            mt={5}
            focusBorderColor={"#008080"}
            placeholder="Last shortname"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            isReadOnly={true}
          />
        </ModalBody>
        <ModalFooter>
          <Flex columnGap={5}>
            <Button
              color="rgba(0,0,0,0.7)"
              _hover={{
                bg: "gray",
                color: "white",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              color="darkorange"
              bg="white"
              _hover={{
                bg: "darkorange",
                color: "white",
              }}
              _active={{
                bg: "darkorange",
                color: "white",
              }}
              onClick={handleUpdateTask}
            >
              {props.data.status === "PENDING"
                ? "APPROVE"
                : props.data.status === "DISABLED"
                ? "APPROVE"
                : "DISABLED"}
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Users = () => {
  const title = "Registered User";
  const { setUser } = useAuth();
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      .then((res) => {
        console.log(res);
        if (!res.statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }
        setUsers(res.data.data);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            break;
          case 401:
            setUser(null);
            break;
          case 404:
            break;
          case 500:
            break;
        }
      });
  };

  const UserData = users.filter(
    (filter) =>
      filter.first_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.middle_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.last_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (props) => {
    setSelectedUser(props);
    onOpen();
  };

  const handleDeleteTask = () => {};

  useEffect(() => {
    handleRequest();
  }, [fetch]);

  return (
    <Box w={"100%"} h={"inherit"} verticalAlign={"center"} p={5}>
      <CustomTable
        title={title}
        fetch={setFetch}
        search={search}
        setSearch={setSearch}
        columns={column}
        data={UserData}
        handleEdit={handleEdit}
        handleDelete={handleDeleteTask}
      />
      <UpdateModal isOpen={isOpen} onClose={onClose} data={selectedUser} />
    </Box>
  );
};

export default Users;
