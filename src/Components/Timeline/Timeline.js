import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TimelineComponent from "./Timeline_Component";
import { Get } from "../../API/Base_Http_Request";
import { primaryPathProcurement } from "../../API/Path_List";
import ExceptionHandler from "../../Utils/ExceptionHandler";

const Timeline = (props) => {
  const [msg, setMsg] = useState("");
  const [timeline, setTimeline] = useState([]);

  const handleFetch = () => {
    Get({ url: `${primaryPathProcurement}/${props.id}` })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        setTimeline(res.data.data);
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
      });
  };

  useEffect(() => {
    handleFetch();
  }, [props.fetch]);

  return (
    <Flex flexDirection={"column"}>
      {timeline.length > 0 ? (
        timeline.map((value, index) => {
          return (
            <TimelineComponent
              date={value.date}
              procurementStatus={value.description}
              isEnd={index === timeline.length - 1}
            />
          );
        })
      ) : (
        <Text>No Record found</Text>
      )}
    </Flex>
  );
};

export default Timeline;
