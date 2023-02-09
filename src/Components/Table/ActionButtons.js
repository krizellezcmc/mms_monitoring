import { Flex, Button, Text, Avatar, Box, Center } from "@chakra-ui/react";
import { AiOutlineFolderView, AiFillEdit } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
import { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useAuth from "../../Hooks/useAuth";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { getDateToFormatDate } from "../../Utils/DateFormat";

const DeleteModal = (props) => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const initialRef = useRef(null);

  const handleTask = () => {
    const message = props.handleTask();

    if (message.toLowerCase().includes("success")) {
      props.onClose();
      return;
    }
    setMsg(message);
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
        <ModalHeader
          color={"teal"}
          display="inline-flex"
          columnGap={2}
          alignItems="center"
        >
          Remove
          <Text fontSize={18} color={"black"}>
            {props.data.dept_name} Department
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="red" mb={5}>
            {msg}
          </Text>
          <FormControl>
            <FormLabel display="inline-flex" columnGap={2}>
              Please enter <Text fontWeight={600}>{user.username}</Text> to
              continue..
            </FormLabel>
            <Input
              focusBorderColor={"#008080"}
              ref={initialRef}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex columnGap={5}>
            <Button
              _hover={{
                bg: "gray",
                color: "white",
              }}
              color="rgba(0,0,0,0.7)"
              onClick={props.onClose}
            >
              Cancel
            </Button>
            <Button
              bg="darkorange"
              color="white"
              _hover={{ bg: "darkorange", color: "white" }}
              _active={{ bg: "darkorange", color: "white" }}
              disabled={username !== user.username}
              onClick={handleTask}
              rightIcon={<HiTrash color="white" />}
            >
              Delete
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const DeleteModule = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTask = () => props.handleDeleteTask();

  const handleClick = () => onOpen();

  return (
    <>
      <Btn color="#FCD299" handleClick={handleClick}>
        <HiTrash color="darkorange" />
      </Btn>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        handleTask={handleTask}
        data={props.data}
      />
    </>
  );
};

const ViewModalUser = (props) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={10}>
          <Box w="inherit" display="flex" justifyContent={"center"}>
            <Avatar name="" src={props.data.profile} size="2xl" />
          </Box>
          <Box
            w="inherit"
            h="5rem"
            mt={10}
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            color="rgba(0,0,0,0.8)"
          >
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Full name:</Text>
              <Text fontSize={16} fontWeight={600}>
                {`${props.data.first_name} ${props.data.middle_name} ${props.data.last_name}`}
              </Text>
            </Box>
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Department:</Text>
              <Text fontSize={16} fontWeight={600}>
                {`${props.data.department}`}
              </Text>
            </Box>
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Account status:</Text>
              <Text fontSize={16} fontWeight={600}>
                {`${props.data.status}`}
              </Text>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="teal"
            color="white"
            float="right"
            _hover={{ bg: "teal", color: "white" }}
            _active={{ bg: "teal", color: "white" }}
            onClick={props.onClose}
          >
            Okay
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ViewModalDepartment = (props) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={10}>
          <Box w="inherit" display="flex" justifyContent="center">
            <Box
              w="5rem"
              h="5rem"
              bg={"gray"}
              rounded={100}
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <HiOutlineOfficeBuilding fontSize={40} color="white" />
            </Box>
          </Box>
          <Box
            h="5rem"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            mt={5}
          >
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Department name:</Text>
              <Text fontSize={16} fontWeight={600}>
                {props.data.dept_name}
              </Text>
            </Box>
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Short name:</Text>
              <Text fontSize={16} fontWeight={600}>
                {props.data.dept_shortname}
              </Text>
            </Box>
            <Box display="flex" columnGap={3}>
              <Text fonstSize={14}>Date registered:</Text>
              <Text fontSize={16} fontWeight={600}>
                {getDateToFormatDate(new Date(props.data.date))}
              </Text>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="teal"
            color="white"
            _hover={{ bg: "teal", color: "white" }}
            _active={{ bg: "teal", color: "white" }}
            onClick={props.onClose}
          >
            Okay
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ViewModule = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTask = (e) => {
    if (props.handleViewTask === null) {
      onOpen();
      return;
    }

    props.handleViewTask(e);
  };

  return (
    <>
      <Btn color="#BEEFDA" handleClick={(e) => handleTask(e)}>
        <AiOutlineFolderView color="teal" />
      </Btn>
      {props.table === "Department" ? (
        <ViewModalDepartment
          isOpen={isOpen}
          onClose={onClose}
          data={props.data}
        />
      ) : (
        <ViewModalUser isOpen={isOpen} onClose={onClose} data={props.data} />
      )}
    </>
  );
};

const Btn = (props) => {
  return (
    <Button
      _hover={{
        bg: props.color,
        boxShadow: "lg",
        transform: "scale(1.2,1.2)",
        transition: "0.3s",
      }}
      onClick={(e) => props.handleClick(e)}
    >
      {props.children}
    </Button>
  );
};

const ActionButtons = (props) => {
  const handleViewTask = (e) => props.viewTask(e, props.value.original);
  const handleEditTask = (e) => props.editTask(e, props.value.original);
  const handleDeleteTask = () => props.deleteTask(props.value.original);

  return (
    <Flex columnGap={1}>
      <ViewModule
        table={props.table}
        handleViewTask={props.viewTask === null ? null : handleViewTask}
        data={props.value.original}
      />
      <Btn color="lightgray" handleClick={handleEditTask}>
        <AiFillEdit color="grey" />
      </Btn>
      <DeleteModule
        handleDeleteTask={handleDeleteTask}
        data={props.value.original}
      />
    </Flex>
  );
};

export default ActionButtons;
