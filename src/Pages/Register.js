import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import CustomInput from "../Components/CustomInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { primaryPathSignup } from "../API/Path_List";
import { Post } from "../API/Base_Http_Request";
import Feedback from "../Components/Feedback";
import {
  AuthHeader,
  AuthFooter,
  AuthBackground,
} from "../Components/Auth_Header_Design";
import StatusHandling from "../Utils/ExceptionHandler";

const Register = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultProfileURL = `${window.location.origin}/default_profile.png`;
  const [feedbackTitle, setFeedBackTitle] = useState("");
  const [feedbackDescription, setFeedBackDescription] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [feedback, setFeedback] = useState("");

  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");

  const [loading, setLoading] = useState(false);

  const validatePasword = () => password === confirmPassword;

  const resultFeedBack = () => {
    setTimeout(() => {
      setLoading(false);
      onOpen();
    }, [200]);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    if (validatePasword) {
      let bodyForm = new FormData();
      bodyForm.append("username", username);
      bodyForm.append("email", email);
      bodyForm.append("password", password);
      bodyForm.append("url", defaultProfileURL);

      Post({ url: primaryPathSignup }, bodyForm)
        .then((res) => {
          if (!res.statusText === "OK") {
            throw new Error("Bad response", { cause: res });
          }

          setFeedBackTitle("Account created.");
          navigate("/account", {
            replace: true,
            state: { id: res.data.data, password: password, message: "" },
          });
        })
        .catch((err) => {
          setFeedback(StatusHandling(err));
          console.log(feedback);
          setFeedBackTitle("Something went wrong!");
          setFeedBackDescription(err.response.data.message);
          resultFeedBack();
        });
      setLoading(false);
    }
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("login");
  };

  return (
    <>
      <Feedback
        title={feedbackTitle}
        description={feedbackDescription}
        onClose={onClose}
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
                  <AuthHeader header={"Sign up"} />
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
                      title={"Username"}
                      value={username}
                      setValue={setUsername}
                      placeholder={"Username"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={5}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"text"}
                      title={"Email"}
                      value={email}
                      setValue={setEmail}
                      placeholder={"Email"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"password"}
                      title={"Password"}
                      value={password}
                      setValue={setPassword}
                      placeholder={"Password"}
                      errorMessage={passExc}
                      isError={false}
                      mt={3}
                    />
                    <CustomInput
                      isSignup={true}
                      type={"password"}
                      title={"Confirm password"}
                      value={confirmPassword}
                      setValue={setConfirmPassword}
                      placeholder={"Confirm password"}
                      errorMessage={passExc}
                      isError={false}
                      mt={3}
                    />
                    <Button
                      isLoading={loading}
                      loadingText={"Signing In"}
                      mt={14}
                      bg={"teal"}
                      color={"white"}
                      _hover={{ bg: "teal" }}
                      onClick={(e) => handleSignup(e)}
                    >
                      <Text>Register</Text>
                    </Button>
                    <Button
                      bg={"gray"}
                      color={"white"}
                      mt={3}
                      _hover={{
                        bg: "darkorange",
                      }}
                      onClick={(e) => handleNavigate(e)}
                    >
                      <Text>Sign In</Text>
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

export default Register;
