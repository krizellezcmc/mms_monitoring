import {
  Box,
  HStack,
  Icon,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

import "../Styles/style.css";

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
        width={{ sm: "500px", md: "350px", lg: "450px" }}
        p={5}
        boxShadow="md"
        bgColor="white"
      >
        <HStack>
          <Stat>
            <StatLabel>{props.label}</StatLabel>
            <StatNumber>{props.total.toLocaleString()}</StatNumber>
            <StatHelpText> {props.topLabel}</StatHelpText>
          </Stat>
          <Spacer />
          <Icon as={props.icon} boxSize={10} color="teal"></Icon>
        </HStack>
      </Box>
    </div>
  );
}

export default TotalTile;
