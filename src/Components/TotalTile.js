import { Box, HStack, Icon, Spacer, Text } from "@chakra-ui/react";

import "../Style/style.css";

import {
  BsCalendar,
  BsCalendar2CheckFill,
  BsCalendar2DateFill,
  BsFillBagFill,
} from "react-icons/bs";

function TotalTile(props) {
  var sample = 1182;
  return (
    <div>
      <Box
        borderRadius={15}
        width={{ sm: "500px", md: "350px", lg: "400px" }}
        p={5}
        boxShadow="md"
        bgColor="white"
      >
        <Text fontWeight={600} fontSize={14} color="gray.500">
          {props.topLabel}
        </Text>
        <Text fontWeight={700} fontSize={16} color="gray.400">
          {props.label}
        </Text>
        <HStack>
          <Text fontWeight={500} fontSize={22} color="black">
            {props.total.toLocaleString()}
          </Text>
          <Spacer />
          <Icon as={props.icon} boxSize={8} color="teal"></Icon>
        </HStack>
      </Box>
    </div>
  );
}

export default TotalTile;
