import {
  Box,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import CustomInput from "../Components/CustomInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomSelection } from "../Components/Custom_Selection";
import { Post } from "../API/Base_Http_Request";
import { primaryPathAccountReg } from "../API/Path_List";
import {
  AuthHeader,
  AuthFooter,
  AuthBackground,
} from "../Components/Auth_Header_Design";
import useAuth from "../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import HandleStatus from "../Utils/ExceptionHandler";
import { IoMdSad, IoMdClose } from "react-icons/io";
import { MdNoAccounts } from "react-icons/md";

const Feedback = (props) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={props.success ? "green" : "red"}>
          {props.title}
        </ModalHeader>
        <ModalBody>
          <Text>{props.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bg={props.success ? "teal" : "grey"}
            color={props.success ? "white" : "orange"}
            _hover={{
              bg: props.success ? "teal" : "grey",
              color: props.success ? "white" : "orange",
            }}
            _active={{
              bg: props.success ? "teal" : "grey",
              color: props.success ? "white" : "orange",
            }}
            onClick={props.handleClose}
          >
            <Text>{props.success ? "Go to Login" : "Close"}</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const AccountRegistration = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, setUser, password } = useAuth();

  const [feedbackTitle, setFeedBackTitle] = useState("");
  const [feedbackDescription, setFeedBackDescription] = useState("");

  const [message, setMessage] = useState(state.message);
  console.log(state);

  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [PK_department_ID, setPK_department_ID] = useState("");

  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(state);

  const resultFeedBack = () => {
    setTimeout(() => {
      setLoading(false);
      onOpen();
    }, [200]);
  };

  const closeModal = () => {
    onClose();
    if (success) {
      navigate("login", { replace: true });
    }
  };

  const navigateAuthorize = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  const resetState = () => {
    setFname("");
    setMname("");
    setLname("");
    setAddress("");
  };
  const handleUserInformation = async (e) => {
    e.preventDefault();
    setLoading(true);

    let bodyForm = new FormData();
    bodyForm.append("id", state.id);
    bodyForm.append("firstname", fname);
    bodyForm.append("middlename", mname);
    bodyForm.append("lastname", lname);
    bodyForm.append("address", address);
    bodyForm.append("PK_department_ID", PK_department_ID);
    bodyForm.append("password", state.password);
    bodyForm.append("status", message !== "" ? 0 : 1);

    Post({ url: primaryPathAccountReg }, bodyForm)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        resetState();
        setSuccess(true);
        if (res.data.json.exist) {
          setFeedBackTitle("Account Already Exist.");
          setFeedBackDescription(res.data.json.message);
          resultFeedBack();
          return;
        }
        if (res.data.data != null) {
          setLoading(false);
          setUser(res.data.data);
          sessionStorage.setItem("Token", res.data.Token);
          navigateAuthorize(e);
          return;
        }
        setFeedBackTitle("Registered successfully");
        setFeedBackDescription("Please wait for account approval.");
        resultFeedBack();
      })
      .catch((err) => {
        let msg = HandleStatus(err);

        setSuccess(false);
        setFeedBackTitle("Something went wrong!.");
        setFeedBackDescription(msg);
        resultFeedBack();
      });
  };

  return (
    <>
      <Feedback
        title={feedbackTitle}
        description={feedbackDescription}
        onClose={onClose}
        handleClose={closeModal}
        isOpen={isOpen}
        success={success}
      />
      <Box
        w={"100%"}
        h={"100vh"}
        bg={"rgba(0,0,0,0.1)"}
        position={"absolute"}
        backgroundImage={"linear-gradient(#B0F3F1,#FFCFDF)"}
      >
        <Box
          w={"60%"}
          h={"70%"}
          left={"50%"}
          top={"50%"}
          transform="translate(-50%, -50%)"
          position={"absolute"}
          boxShadow={"2xl"}
          rounded={15}
          overflow={"hidden"}
        >
          <Grid
            templateRows={"repeat(1, 1fr)"}
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem rowSpan={1} colSpan={7}>
              <AuthBackground />
            </GridItem>
            <GridItem colSpan={5}>
              <Box w={"100%"} h={"100%"} bg={"whiteAlpha.600"}>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  pl={10}
                  pt={8}
                  pr={10}
                  pb={3}
                  h={"70vh"}
                >
                  <AuthHeader header={"User information"} />
                  {message === "" ? null : (
                    <Box w={"100%"}>
                      <Box
                        float="right"
                        maxWidth={"200px"}
                        color="white"
                        display="flex"
                        columnGap={2}
                        bg="red"
                        opacity={0.8}
                        p={2}
                        borderRadius={15}
                        alignItems="center"
                        mt={5}
                      >
                        <MdNoAccounts fontSize={20} />
                        <Box maxWidth={"200px"} textAlign="start">
                          <Text fontWeight={700}>{message}</Text>
                        </Box>
                        <Box w="green" zIndex={99}>
                          <Text
                            bg="transparent"
                            fontSize={20}
                            _hover={{ cursor: "pointer" }}
                            onClick={() => {
                              setFeedBackDescription("");
                            }}
                          >
                            <IoMdClose color={"white"} />
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  )}
                  <Box
                    w={"inherit"}
                    h={"inherit"}
                    display={"flex"}
                    flexDirection={"column"}
                    mt={message === "" ? "2rem" : "0"}
                  >
                    <CustomInput
                      isSignup={true}
                      type={"text"}
                      title={"First name"}
                      value={fname}
                      setValue={setFname}
                      placeholder={"First name"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"text"}
                      title={"Middle name"}
                      value={mname}
                      setValue={setMname}
                      placeholder={"Middle name"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"text"}
                      title={"Last name"}
                      value={lname}
                      setValue={setLname}
                      placeholder={"last name"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"address"}
                      title={"Address name"}
                      value={address}
                      setValue={setAddress}
                      placeholder={"Address"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomSelection
                      value={PK_department_ID}
                      setValue={setPK_department_ID}
                      mt={5}
                    />
                    <Button
                      isLoading={loading}
                      loadingText={"Saving"}
                      mt={14}
                      bg={"teal"}
                      color={"white"}
                      _hover={{ bg: "teal" }}
                      onClick={(e) => handleUserInformation(e)}
                    >
                      <Text>Save</Text>
                    </Button>
                  </Box>
                  <AuthFooter />
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AccountRegistration;
