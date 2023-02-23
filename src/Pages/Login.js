import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CustomInput from "../Components/CustomInput";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Post } from "../API/Base_Http_Request";
import { primaryPathSignin } from "../API/Path_List";
import useAuth from "../Hooks/useAuth";
import {
  AuthHeader,
  AuthBackground,
  AuthFooter,
} from "../Components/Auth_Header_Design";
import { IoMdSad, IoMdClose } from "react-icons/io";

const Login = () => {
  const { setUser, username, setUsername, password, setPassword } = useAuth();
  const navigate = useNavigate();
  const [feedbackDescription, setFeedBackDescription] = useState("");
  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    Post({ url: primaryPathSignin }, formData)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }

        if (res.data.data.message === "Email or password incorrect") {
          setFeedBackDescription(res.data.message);
          return;
        }

        setUser(res.data.data);
        sessionStorage.setItem("Token", res.data.Token);
        setLoading(false);
        navigate("/", { replace: true });
        handleReset();
      })
      .catch((err) => {
        const {
          response: {
            status,
            data: { json },
          },
        } = err;
        if (status === 302) {
          navigate(json.path, {
            state: {
              id: json.data,
              password: password,
              message: "missing profile.",
            },
          });
          handleReset();
          return;
        }
        setFeedBackDescription("Something went wrong.");
      });
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleNavigateToRecovery = (e) => {
    e.preventDefault();
    navigate("/account-recovery");
  };

  return (
    <>
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
                  <AuthHeader header="Sign In" />
                  <Text
                    color={"darkred"}
                    fontWeight={500}
                    fontSize={15}
                    textAlign="center"
                    mt={10}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    columnGap={3}
                  >
                    {feedbackDescription === "" ? null : (
                      <Box
                        color="white"
                        display="flex"
                        columnGap={2}
                        bg="red"
                        opacity={0.8}
                        p={2}
                        borderRadius={15}
                        alignItems="center"
                      >
                        <IoMdSad fontSize={20} />
                        <Box maxWidth={"200px"} textAlign="start">
                          <Text fontWeight={700}>Email or password.</Text>
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
                    )}
                  </Text>
                  <Box
                    w={"inherit"}
                    h={"inherit"}
                    display={"flex"}
                    flexDirection={"column"}
                    mt={feedbackDescription === "" ? "2rem" : "1.1rem"}
                  >
                    <CustomInput
                      isSignup={false}
                      type={"text"}
                      title={"Email"}
                      value={username}
                      setValue={setUsername}
                      placeholder={"Email"}
                      errorMessage={emailExc}
                      isError={false}
                      mt={5}
                      children={
                        <Box
                          w={8}
                          h={4}
                          mt={6}
                          mb={6}
                          borderRight={"1px solid rgba(0,0,0,0.2)"}
                        >
                          <Center>
                            <FaUserAlt color="teal" size={15} />
                          </Center>
                        </Box>
                      }
                      isRequired={true}
                    />
                    <CustomInput
                      isSignup={false}
                      type={"password"}
                      title={"Password"}
                      value={password}
                      setValue={setPassword}
                      placeholder={"Password"}
                      errorMessage={passExc}
                      isError={false}
                      mt={3}
                      children={
                        <Box
                          w={8}
                          h={4}
                          mt={6}
                          mb={6}
                          borderRight={"1px solid rgba(0,0,0,0.2)"}
                        >
                          <Center>
                            <FaLock color="teal" size={15} />
                          </Center>
                        </Box>
                      }
                      isRequired={true}
                    />
                    <Button
                      color={"blackAlpha.500"}
                      bg="transparent"
                      mt={8}
                      _hover={{
                        bg: "transparent",
                        color: "blackAlpha.700",
                      }}
                      _active={{ bg: "white", color: "gray" }}
                      onClick={(e) => handleNavigateToRecovery(e)}
                    >
                      <Text fontWeight={400} fontSize={14}>
                        Forgot password?
                      </Text>
                    </Button>
                    <Button
                      isLoading={loading}
                      loadingText={"Signing In"}
                      mt={8}
                      bg={"teal"}
                      color={"white"}
                      _hover={{ bg: "teal" }}
                      onClick={(e) => handleSignin(e)}
                    >
                      <Text>Login</Text>
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
                      <Text>Create account?</Text>
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

export default Login;
