import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";

const PRViewHeader = (props) => {
  return (
    <>
      <Box w={"100%"} h={"8rem"}>
        <Flex justifyContent={"center"}>
          <Image
            w="50px"
            h={"70px"}
            src={require("./../../assets/other/logo.png")}
          />
          <Box w={"25%"} textAlign={"center"}>
            <Text fontSize={11} fontWeight={"400"}>
              Republic of the Philippines
            </Text>
            <Text fontSize={11} fontWeight={"400"}>
              Department of Health
            </Text>
            <Text fontSize={12} fontWeight={"400"}>
              ZAMBOANGA CITY MEDICAL CENTER
            </Text>
            <Text fontSize={11} fontWeight={"400"}>
              Dr. D. Evangelista,Sta. Catalina, Zamboanga City, 7000
            </Text>
          </Box>
          <Image
            w="60px"
            h="60px"
            src={require("./../../assets/logo/doh-logo.png")}
          />
        </Flex>
      </Box>
    </>
  );
};

export default PRViewHeader;
