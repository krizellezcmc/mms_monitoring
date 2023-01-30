import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import "../Style/Loading.css";
import { Get } from "../API/Base_Http_Request";
import { primaryPathToken, primaryPathUser } from "../API/Path_List";
import useAuth from "../Hooks/useAuth";

const Loading = () => {
  const { setUser } = useAuth();

  const fetchCsrf = async () => {
    await Get({ url: primaryPathToken });
  };

  const authorizationValidation = async () => {
    Get({ url: primaryPathUser + "/init" })
      .then((res) => {
        if (res.data.status === 200) {
          setUser(res.data.data);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCsrf();
    authorizationValidation();
  }, []);

  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      className={"body"}
    >
      <Center>
        <Box w={"40%"} h={"30vh"}>
          <Flex
            alignItems={"center"}
            columnGap={5}
            marginLeft={"15rem"}
            className="container"
          >
            <Box w={"60px"} className={"logo"} opacity={0}>
              <Image src={require("./../assets/logo/zcmc_logo.png")} />
            </Box>
            <Text
              fontSize={20}
              fontWeight={900}
              color={"teal"}
              className={"name"}
              opacity={"0"}
            >
              Zamboanga
            </Text>
            <Text
              fontSize={20}
              fontWeight={900}
              color={"teal"}
              className={"name1"}
              opacity={"0"}
            >
              City
            </Text>
            <Text
              fontSize={20}
              fontWeight={900}
              color={"teal"}
              className={"name2"}
              opacity={"0"}
            >
              Medical
            </Text>
            <Text
              fontSize={20}
              fontWeight={900}
              color={"teal"}
              className={"name3"}
              opacity={"0"}
            >
              Center
            </Text>
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
};

export default Loading;
