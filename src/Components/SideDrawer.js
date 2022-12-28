import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
  HStack,
  Text,
} from "@chakra-ui/react";

import { BiLogOut, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillBagPlusFill } from "react-icons/bs";

function SideDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bgColor="#fafafa" onClick={onOpen} _hover={{ bgColor: "none" }}>
        <BiMenu color="teal" fontSize={22} />{" "}
        <Text ml={2} color="teal">
          Menu
        </Text>
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.50">
          <DrawerCloseButton mt={2} />
          <DrawerHeader borderBottomWidth="1px">PR/PO MONITORING</DrawerHeader>

          <DrawerBody p={0} mt={1}>
            <Box p={5} _hover={{ bgColor: "teal.200" }}>
              <HStack>
                <BsFillBagPlusFill color="teal" fontSize={25} />
                <Link
                  width="full"
                  _hover={{ textDecoration: "none" }}
                  fontWeight={600}
                >
                  Purchase Request
                </Link>
              </HStack>
            </Box>
            <Box p={5} _hover={{ bgColor: "teal.200" }}>
              <HStack>
                <BsFillBagCheckFill color="teal" fontSize={25} />
                <Link
                  width="full"
                  _hover={{ textDecoration: "none" }}
                  fontWeight={600}
                  href="po"
                >
                  Purchase Order
                </Link>
              </HStack>
            </Box>

            {/* <Center>
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
            </Center> */}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px" display="flex">
            <Button colorScheme="red">
              Logout &nbsp;
              <BiLogOut style={{ transform: "rotate(180deg)" }} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
