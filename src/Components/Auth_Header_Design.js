import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export const AuthHeader = (props) => {
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
              {props.header}
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

export const AuthFooter = () => {
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

export const AuthBackground = () => {
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
