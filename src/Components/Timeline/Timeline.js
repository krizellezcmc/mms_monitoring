import { Flex } from "@chakra-ui/react";
import TimelineComponent from "./Timeline_Component";

const Timeline = (props) => {
  return (
    <Flex flexDirection={"column"}>
      {props.data.map((value) => {
        return (
          <TimelineComponent
            date={value.date}
            procurementStatus={value.procurementStatus}
            isEnd={value.index === props.data.length - 1}
          />
        );
      })}
    </Flex>
  );
};

export default Timeline;
