import { Box, Text } from "@chakra-ui/react";

const TimelineComponent = (props) => {
  return (
    <Box display="flex" justifyContent="flex-start" columnGap={5}>
      <Box
        w="12px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box w={"10px"} h={"10px"} bg="gray.300" rounded={100}></Box>
        {props.isEnd ? null : <Box w="2px" h={10} bg="gray.300"></Box>}
      </Box>
      <Box mt={"-5px"} fontSize={14} display="flex" columnGap={1}>
        <Text>{props.date}</Text>
        <Text>{props.procurementStatus}</Text>
      </Box>
    </Box>
  );
};

export default TimelineComponent;
