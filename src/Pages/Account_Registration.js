import {
  Box,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import CustomInput from "../Components/CustomInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomSelection } from "../Components/Custom_Selection";
import { Post } from "../API/Base_Http_Request";
import { primaryPathAccountReg } from "../API/Path_List";
import Feedback from "../Components/Feedback";
import {
  AuthHeader,
  AuthFooter,
  AuthBackground,
} from "../Components/Auth_Header_Design";
import useAuth from "../Hooks/useAuth";

const AccountRegistration = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, setUser, password } = useAuth();

  const [feedbackTitle, setFeedBackTitle] = useState("");
  const [feedbackDescription, setFeedBackDescription] = useState("");

  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [PK_department_ID, setPK_department_ID] = useState("");

  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");

  const [loading, setLoading] = useState(false);

  const resultFeedBack = () => {
    setTimeout(() => {
      setLoading(false);
      onOpen();
    }, [200]);
  };

  const closeModal = () => {
    onClose();
    navigate("login", { replace: true });
  };

  const navigateAuthorize = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  const handleUserInformation = async (e) => {
    e.preventDefault();
    setLoading(true);

    let bodyForm = new FormData();
    bodyForm.append("firstname", fname);
    bodyForm.append("middlename", mname);
    bodyForm.append("lastname", lname);
    bodyForm.append("PK_department_ID", PK_department_ID);
    bodyForm.append("password", password);

    const response = await Post({ url: primaryPathAccountReg }, bodyForm);

    if (response.data.status === 200) {
      try {
        if (response.data.data != null) {
          setLoading(false);
          setUser(response.data.data);
          navigateAuthorize(e);
          return;
        }
      } catch (e) {
        console.log(e.message);
      }
      setFeedBackTitle("Registered successfully");
      setFeedBackDescription(response.data);
      resultFeedBack();
      return;
    }

    setFeedBackTitle("Something went wrong!.");
    setFeedBackDescription(response.message);
    resultFeedBack();
  };

  return (
    <>
      <Feedback
        title={feedbackTitle}
        description={feedbackDescription}
        onClose={onClose}
        handleClose={closeModal}
        isOpen={isOpen}
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
                  <Box
                    w={"inherit"}
                    h={"inherit"}
                    display={"flex"}
                    flexDirection={"column"}
                    mt={"2rem"}
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
