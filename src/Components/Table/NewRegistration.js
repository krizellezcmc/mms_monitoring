import { Button } from "@chakra-ui/react";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";

const NewRegistration = (props) => {
  return (
    <Button
      size={"sm"}
      fontSize={14}
      bg={"teal"}
      colorScheme={"green"}
      color={"white"}
      variant={"solid"}
      fontWeight={"normal"}
      className={""}
      onClick={props.handleClick}
      columnGap={2}
      mt={5}
      _hover={{
        bg: "teal",
      }}
    >
      {props.title === "Purchase Request" || props.title === "Department" ? (
        <BsFillCloudDownloadFill fontSize={20} marginRight="5px" />
      ) : (
        <IoAddCircleOutline fontSize={20} marginRight="5px" />
      )}
      {props.title === "Purchase Request"
        ? "Download PR From BizzBox"
        : props.title === "Department"
        ? "Download department From BizzBox"
        : props.title}
    </Button>
  );
};

export default NewRegistration;
