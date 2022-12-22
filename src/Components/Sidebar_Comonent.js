import React from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Spacer,
  Switch,
  VStack,
  Image,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBagCheck, BsBagPlus } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { MdExitToApp } from "react-icons/md";

const SidebarHeader = () => {
  return (
    <Box w={"100%"} mt={3} pl={3} pr={3} pt={3}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex justifyContent={"center"} columnGap={2} alignItems={"center"}>
          <Box w={10}>
            <Image src={require("./../assets/logo/zcmc_logo.png")} />
          </Box>
          <Text fontSize={"1rem"} fontWeight={600}>
            PR | PO MONITORING
          </Text>
        </Flex>
        <Switch colorScheme="teal" />
      </Flex>
    </Box>
  );
};

const SidebarMenu = (props) => {
  return (
    <Box
      w={"100%"}
      h={"3.2rem"}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
      columnGap={5}
      p={5}
      color={"gray.600"}
      _hover={{
        bg: "rgba(0,128,128,0.5)",
        color: "white",
      }}
    >
      {props.icon}
      <Text fontSize={16} fontWeight={500}>
        {props.title}
      </Text>
    </Box>
  );
};

const SidebarProfile = () => {
  return (
    <Box w={"100%"} h={"5rem"} p={3}>
      <Flex columnGap={4} alignItems={"center"}>
        <Box w="3rem" h={"3rem"} bg={"grey"} rounded={"100%"} p={"3px"}>
          <Avatar
            src={
              "https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg"
            }
            size={"full"}
          />
        </Box>
        <Box>
          <Text fontSize={15} fontWeight={700}>
            {"Rowan Atkinson"}
          </Text>
          <Text fontSize={14}>{"rowanatkinson@gmail.com"}</Text>
        </Box>
        <Box _hover={{ color: "darkred", cursor: "pointer" }}>
          <MdExitToApp size={"1.4rem"} />
        </Box>
      </Flex>
    </Box>
  );
};

const SidebarComponent = ({ children }) => {
  return (
    <>
      <Flex>
        <Box
          w={["7rem", "7rem", "22rem", "22rem"]}
          h={"100vh"}
          bg={"white"}
          overflow={"hidden"}
          boxShadow={"dark-lg"}
          zIndex={99}
        >
          <SidebarHeader />
          <Spacer h={"4rem"} />

          <Box w={"100%"} h={"20rem"}>
            <VStack>
              <SidebarMenu
                icon={<AiOutlineHome size={"1.4rem"} />}
                title={"Home"}
              />
              <SidebarMenu
                icon={<BsBagPlus size={"1.4rem"} />}
                title={"Purchase Request"}
              />
              <SidebarMenu
                icon={<BsBagCheck size={"1.4rem"} />}
                title={"Purchase Order"}
              />
              <SidebarMenu
                icon={<GoReport size={"1.4rem"} />}
                title={"Report"}
              />
            </VStack>
          </Box>
          <Spacer h={"42%"} />
          <SidebarProfile />
        </Box>
        {children}
      </Flex>
    </>
  );
};

export default SidebarComponent;
