import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import { useMemo, useState, useEffect } from "react";
import CustomTable from "../Components/Custom_Table";
import { Get } from "../API/Base_Http_Request";
import { primaryPathUser } from "../API/Path_List";
import { Put } from "../API/Base_Http_Request";
import useAuth from "../Hooks/useAuth";
import ExceptionHandler from "../Utils/ExceptionHandler";
import { IoMdClose } from "react-icons/io";

const UpdateModal = (props) => {
  const { user } = useAuth();
  const json = props.data;

  const [loading, setLoading] = useState(false);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [department, setDepartment] = useState("");

  const [msg, setMsg] = useState("");

  const handleUpdateTask = () => {
    setLoading(true);

    Put(
      { url: `${primaryPathUser}/${json.id}` },
      {
        status: json.status === "PENDING" || json.status === "DISABLED" ? 1 : 2,
      }
    )
      .then((res) => {
        const { statusText } = res;
        if (!statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }

        setLoading(false);
        props.setFetch(true);
        props.onClose();
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setLoading(false);
      });
  };

  const handleInit = () => {
    try {
      setFname(json.first_name);
      setMname(json.middle_name);
      setLname(json.last_name);
      setDepartment(json.department);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleInit();
  }, [json]);

  return (
    <Modal
      closeOnOverlayClick={true}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display={"flex"}
          justifyContent="space-between"
          color="teal"
          fontSize={20}
        >
          ACCOUNT STATUS
          {msg === "" ? null : (
            <Box
              h={30}
              bg={"rgba(255,0,0,0.8)"}
              color="white"
              pl={5}
              pr={2}
              pt={1}
              pb={1}
              rounded={15}
              display="flex"
              justifyContent={"space-between"}
              columnGap={2}
            >
              <Text fontSize={14} fontWeight={400}>
                {msg}
              </Text>
              <Box _hover={{ cursor: "pointer" }} onClick={() => setMsg("")}>
                <IoMdClose />
              </Box>
            </Box>
          )}
        </ModalHeader>
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
              onClick={() => props.onClose()}
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText="Processing"
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
  const [isFetching, setIsFetching] = useState(true);
  const [msg, setMsg] = useState("");
  const [fetch, setFetch] = useState(true);
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
        Header: "PROFILE",
        accessor: "profile",
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
        const {
          statusText,
          data: { data },
        } = res;
        if (!statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }
        setUsers(data);
        setTimeout(() => setIsFetching(false), [800]);
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setTimeout(() => setIsFetching(false), [800]);
      });
  };

  const UserData = users.filter(
    (filter) =>
      filter.first_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.middle_name.toLowerCase().includes(search.toLowerCase()) ||
      filter.last_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (e, props) => {
    e.preventDefault();
    setSelectedUser(props);
    setTimeout(() => {
      onOpen();
    }, [500]);
  };

  const handleDeleteTask = () => {};

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (fetch) {
          setFetch(false);
        }
        handleRequest();
      },
      fetch ? 0 : 10000
    );
    return () => clearInterval(intervalId);
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
        handleView={null}
        handleEdit={handleEdit}
        handleDelete={handleDeleteTask}
        isFetching={isFetching}
      />
      <UpdateModal
        isOpen={isOpen}
        onClose={onClose}
        data={selectedUser}
        fetch={setFetch}
      />
    </Box>
  );
};

export default Users;
