import { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Timeline from "../Timeline/Timeline";
import { FaRegBuilding } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { getDateToFormatDate } from "../../Utils/DateFormat";

const HeaderComponent = (props) => {
  const [initializing, setInitializing] = useState(
    props.loadState === null ? false : props.loadState
  );

  if (initializing) {
    setTimeout(() => {
      setInitializing(false);
    }, [2000]);
    return <Box>Loading</Box>;
  }

  return (
    <Box
      display="flex"
      alignItems={"center"}
      columnGap={2}
      color="rgba(0,0,0,0.7)"
    >
      {props.children}
      <Text fontSize={[14, 14, 16, 16]} fontWeight={"500"}>
        {props.data}
      </Text>
    </Box>
  );
};

const PRDetailedModule = (props) => {
  return (
    <Box h={["70vh", "70vh", "100vh", "100vh"]} boxShadow={"lg"} p={5}>
      <Box h={["3rem", "3rem", "6rem", "6rem"]}>
        <Heading size={["sm", "sm", "md", "md"]} color={"teal"}>
          Purchase & Procurement Record
        </Heading>
      </Box>
      <Box
        h={["6%", "6%", "14%", "14%"]}
        rowGap={[0, 0, 2, 2]}
        columnGap={[5, 5, 0, 0]}
        display="flex"
        flexDirection={["column", "column", "column", "column"]}
      >
        <HeaderComponent
          data={getDateToFormatDate(new Date(props.date))}
          children={<BsCalendar2Date fontSize={16} />}
        />
        <HeaderComponent
          data={props.department}
          children={<FaRegBuilding fontSize={16} />}
        />
        <HeaderComponent
          data={props.procDesc}
          children={<MdPendingActions fontSize={16} />}
        />
        <HeaderComponent
          loadState={true}
          data={props.total}
          children={
            <Text pl={1} fontWeight="bold">
              ₱
            </Text>
          }
        />
      </Box>
      <Box h={"20%"}>
        <Heading mb={10} mt={[16, 12, 0, 0]} size="sm" color="rgba(0,0,0,0.7)">
          Procurement Timeline
        </Heading>
        <Timeline fetch={props.fetch} id={props.id} />
      </Box>
    </Box>
  );
};

export default PRDetailedModule;
