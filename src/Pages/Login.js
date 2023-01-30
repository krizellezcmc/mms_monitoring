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
import { AiOutlineWarning } from "react-icons/ai";
import {
  AuthHeader,
  AuthBackground,
  AuthFooter,
} from "../Components/Auth_Header_Design";

const Login = () => {
  const { setUser, username, setUsername, password, setPassword } = useAuth();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState("");

  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    Post({ url: primaryPathSignin }, formData)
      .then((response) => {
        if (response.data.status === 200) {
          setUser(response.data.data);
          setLoading(false);
          navigate("/", { replace: true });
          return;
        }

        if (response.data.status === 404) {
          navigate(response.data.path, { replace: true });
          setUsername("");
          setLoading(false);
          return;
        }
        setFeedback(response.data.message);
        setPassword("");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
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
                    {feedback === "" ? null : (
                      <AiOutlineWarning fontSize={20} />
                    )}
                    {feedback}
                  </Text>
                  <Box
                    w={"inherit"}
                    h={"inherit"}
                    display={"flex"}
                    flexDirection={"column"}
                    mt={"2rem"}
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
