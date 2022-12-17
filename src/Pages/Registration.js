import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Link,
  Center,
  Input,
  Stack,
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import localApi from "../API/localAPI";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [getArea, setGetArea] = useState([]);
  const toast = useToast();

  const onSearch = (searchTerm) => {
    setArea(searchTerm);
  };

  function clearForm() {
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setArea('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let cancel = true;
    const loadData = async () => {
      const response = await localApi.post(
        "/register.php",
        {
          fname: fname,
          lname: lname,
          email: email,
          password: password,
          area: area,
        }
      );
      if (cancel) {
        if (response.data.status === 1) {
          toast({
            position: "top",
            title: "Account Created",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          clearForm();
        } else if(response.data.status === 2){
          toast({
            position: "top",
            title: "Account already exist!",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        }
      }
    };
    loadData();
    return () => {
      cancel = false;
    };
  };

  useEffect(() => {
    let cancel = false;
    const loadArea = async () => {
      const response = await localApi.get("/getArea.php");
      if (!cancel) {
        setGetArea(response.data);
      }
    };
    loadArea();
    return () => {
      cancel = true;
    };
  }, [area]);

  return (
    <div className="wrapper">
      <Container
        maxW={600}
        py={{ base: "4", md: "4" }}
        px={{ base: "4", sm: "8" }}
      >
        <Stack spacing="3">
          <Box
            py={{ base: "4", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "white", sm: "white" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "xl", sm: "xl" }}
          >
            <Stack>
              <Text
                textAlign="center"
                fontSize="3xl"
                fontWeight="600"
                color="green.600"
              >
                Sign Up
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing="4" mt={6}>
                <Stack spacing="4">
                  <HStack
                    display={"flex"}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <InputGroup size="md">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BiUser color="#276749" />}
                        />
                        <Input
                          type="text"
                          placeholder="First Name"
                          focusBorderColor="green.700"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          required
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl pt={{ base: "3", sm: "0" }}>
                      <FormLabel>Last Name</FormLabel>
                      <InputGroup size="md">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BiUser color="#276749" />}
                        />
                        <Input
                          type="text"
                          placeholder="Last Name"
                          focusBorderColor="green.700"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          required
                        />
                      </InputGroup>
                    </FormControl>
                  </HStack>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <InputGroup size="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<AiOutlineMail color="#276749" />}
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        focusBorderColor="green.700"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BiLockAlt color="#276749" />}
                      />
                      <Input
                        pr="4.5rem"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        focusBorderColor="green.700"
                        fontSize="15px"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputRightElement>
                        <Button
                          color="gray.500"
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Area</FormLabel>
                    <InputGroup size="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<IoLocationOutline color="#276749" />}
                      />
                      <Input
                        type="text"
                        placeholder="Area"
                        focusBorderColor="green.700"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        autoComplete="off"
                        required
                      />
                    </InputGroup>
                    <div className="dropdown">
                      {getArea
                        .filter((item) => {
                          const searchTerm = area.toLowerCase();
                          const areaName = item.area.toLowerCase();

                          return (
                            searchTerm &&
                            areaName.startsWith(searchTerm) &&
                            areaName !== searchTerm
                          );
                        })
                        .slice(0, 10)
                        .map((item) => (
                          <div
                            onClick={() => onSearch(item.area)}
                            className="dropdown-row"
                            key={item.area}
                          >
                            <li>{item.area}</li>
                          </div>
                        ))}
                    </div>
                  </FormControl>
                </Stack>

                <Center>
                  <Button mt={6} colorScheme="green" width="50%" type="submit">
                    Sign Up
                  </Button>
                </Center>

                <Stack>
                  <Text align={"center"} mt={6} fontSize="sm">
                    Already a user?{" "}
                    <Link color={"green.600"} href="/login">
                      Sign In
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
export default SignUp;
