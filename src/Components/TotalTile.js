import { Box, HStack, Icon, Spacer, Text } from "@chakra-ui/react";

import "../Style/style.css";

import { BsFillBagFill } from "react-icons/bs";

function TotalTile(props) {
  var sample = 1182;
  return (
    <div>
      <Box
        borderRadius={15}
        width={{ sm: "500px", md: "400px", lg: "500px" }}
        p={5}
        boxShadow="base"
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
            {sample.toLocaleString()}
          </Text>
          <Spacer />
          <Icon as={BsFillBagFill} boxSize={8} color="green.500"></Icon>
        </HStack>
      </Box>
    </div>
  );
}

export default TotalTile;
