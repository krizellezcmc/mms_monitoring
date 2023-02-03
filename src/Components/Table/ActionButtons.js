import { Flex, Button } from "@chakra-ui/react";
import { AiOutlineFolderView, AiFillEdit } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";

const Btn = (props) => {
  return (
    <Button
      _hover={{
        bg: props.color,
        boxShadow: "lg",
        transform: "scale(1.2,1.2)",
        transition: "0.3s",
      }}
      onClick={(e) => props.handleClick(e)}
    >
      {props.children}
    </Button>
  );
};

const ActionButtons = (props) => {
  const handleView = (e) => {
    props.handleRedirectView(e, props.value.original);
  };

  const handleEdit = (e) => {
    props.handleRedirectEdit(e, props.value.original);
  };

  const handleDelete = (e) => {
    props.handleRedirectDelete(e, props.value.original);
  };

  return (
    <Flex columnGap={1}>
      <Btn color="#BEEFDA" handleClick={handleView}>
        <AiOutlineFolderView color="teal" />
      </Btn>
      <Btn color="lightgray" handleClick={handleEdit}>
        <AiFillEdit color="grey" />
      </Btn>
      <Btn color="#FCD299" handleClick={handleDelete}>
        <HiTrash color="darkorange" />
      </Btn>
    </Flex>
  );
};

export default ActionButtons;
