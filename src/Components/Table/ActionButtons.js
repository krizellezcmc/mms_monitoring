import { Flex, Button, Text } from "@chakra-ui/react";
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
  const handleViewTask = () => {};

  return (
    <Modal>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update User</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button float="right" onClick={handleViewTask}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ViewModule = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleViewTask = () => {
    if (props.handleViewTask === null) {
      props.handleViewTask();
      return;
    }

    onOpen();
  };

  return (
    <>
      <Btn color="#BEEFDA" handleClick={handleViewTask}>
        <AiOutlineFolderView color="teal" />
      </Btn>
      <ViewModalUser isOpen={props.isOpen} onClose={props.onClose} />
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
  const handleEditTask = () => props.editTask(props.value.original);
  const handleDeleteTask = () => props.deleteTask(props.value.original);

  return (
    <Flex columnGap={1}>
      <ViewModule handleViewTask={handleViewTask} />
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
