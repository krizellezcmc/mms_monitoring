import { Flex, Button } from "@chakra-ui/react";
import { AiOutlineFolderView, AiFillEdit } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";

const ActionButtons = (props) => {
  return (
    <Flex columnGap={1}>
      <Button
        _hover={{
          bg: "#BEEFDA",
          boxShadow: "lg",
          transform: "scale(1.2,1.2)",
          transition: "0.3s",
        }}
        onClick={(e) => props.handleRedirectView(e, props.value)}
      >
        <AiOutlineFolderView color="teal" />
      </Button>
      <Button
        _hover={{
          bg: "lightgray",
          boxShadow: "lg",
          transform: "scale(1.2,1.2)",
          transition: "0.3s",
        }}
        onClick={(e) => props.handleRedirectEdit(e, props.value)}
      >
        <AiFillEdit color="grey" />
      </Button>
      <Button
        _hover={{
          bg: "#FCD299",
          boxShadow: "lg",
          transform: "scale(1.2,1.2)",
          transition: "0.3s",
        }}
        onClick={(e) => props.handleRedirectDelete(e, props.value)}
      >
        <HiTrash color="darkorange" />
      </Button>
    </Flex>
  );
};

export default ActionButtons;
