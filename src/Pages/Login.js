import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CustomInput from "../Components/CustomInput";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginHeader = () => {
  return (
    <Box mt={5}>
      <Flex columnGap={5}>
        <Box>
          <Image
            w="60px"
            h={"80px"}
            src={require("./../assets/other/logo.png")}
          />
        </Box>
        <Box mt={4}>
          <Flex direction={"column"} justifyContent={"end"}>
            <Heading fontSize="26px" color="teal">
              {"Sign In"}
            </Heading>
            <Text fontSize="sm" color="gray">
              Enter your credentials to continue.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const LoginFooter = () => {
  return (
    <>
      <Box color={"gray"} display={"flex"} justifyContent={"center"}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          focusable="false"
          class="chakra-icon css-13otjrl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
          <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
        </svg>
        <Text fontSize={12} fontWeight={600}>
          2023 Zamboanga City Medical Center . All Rights reserved
        </Text>
      </Box>
    </>
  );
};

const LoginBackground = () => {
  return (
    <Box
      w={"100%"}
      h={"80vh"}
      backgroundImage={require("./../assets/other/zcmc-bg1.png")}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
    >
      <Box w={"100%"} h={"100vh"} bg={"rgba(0,0,0,0.2)"}>
        <Box p={5} color={"white"} textAlign={"center"}>
          <Heading mt={10} size={"lg"} letterSpacing={"0.34rem"}>
            ZCMC PR | PO MONITORING
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailExc, setEmailExc] = useState("");
  const [passExc, setPassExc] = useState("");

  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/m/");
    }, [1000]);
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
              <LoginBackground />
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
                  <LoginHeader />
                  <Box
                    w={"inherit"}
                    h={"inherit"}
                    display={"flex"}
                    flexDirection={"column"}
                    mt={"5rem"}
                  >
                    <CustomInput
                      isSignup={false}
                      type={"text"}
                      title={"Email"}
                      value={email}
                      setValue={setEmail}
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
                      onClick={(e) => handleClick(e)}
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
                  <LoginFooter />
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
