import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      bg={"rgba(0,0,0,0.1)"}
      position={"absolute"}
      backgroundImage={"linear-gradient(#FFFFFF,#B0F3F1)"}
    >
      <Flex
        w={"100%"}
        h={"100vh"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Center>
          <Box
            w={["70%", "50%", "40%", "30%"]}
            h={["40vh", "40vh", "50vh", "50vh"]}
            textAlign={"center"}
          >
            <Text
              fontSize={["5rem", "8rem", "10rem", "12rem"]}
              color={"teal"}
              fontWeight={900}
              letterSpacing={20}
              textShadow={"2px 2px gray"}
            >
              404
            </Text>
            <Flex
              justifyContent={"center"}
              columnGap={[4, 4, 5, 5]}
              alignItems={"center"}
            >
              <Text fontSize={[12, 14, 16, 25]} fontWeight={600} color={"gray"}>
                Page not found.
              </Text>
              <Button
                rounded={25}
                bg={"darkorange"}
                color={"white"}
                boxShadow={"md"}
                rightIcon={<HiOutlineArrowRight size={25} />}
                _hover={{
                  bg: "darkorange",
                }}
                _active={{
                  bg: "orange",
                }}
                onClick={(e) => handleNavigate(e)}
              >
                <Text fontSize={[12, 12, 14, 14]}>RETURN HOME</Text>
              </Button>
            </Flex>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

export default PageNotFound;
